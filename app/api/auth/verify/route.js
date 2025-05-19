// app/api/auth/verify/route.js
import { NextResponse } from 'next/server';
import connectMongo from '../../../../libs/mongoose';
import User from '../../../../models/User';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    
    if (!token || !email) {
      return NextResponse.redirect(new URL('/api/auth/verification-error', request.url));
    }
    
    await connectMongo();
    
    // Find user with this token
    const user = await User.findOne({ 
      email: email.toLowerCase(),
      verificationToken: token,
      verificationTokenExpiresAt: { $gt: new Date() }
    });
    
    if (!user) {
      return NextResponse.redirect(new URL('/api/auth/verification-error', request.url));
    }
    
    // Verify the user
    user.emailVerified = new Date();
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    
    // Redirect to success page
    return NextResponse.redirect(new URL('/api/auth/verification-success', request.url));
  } catch (error) {
    console.error('Error verifying email:', error);
    return NextResponse.redirect(new URL('/api/auth/verification-error', request.url));
  }
} 