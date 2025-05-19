// app/api/auth/verify-email/route.js
import { Resend } from 'resend';
import { createVerificationEmail } from '../resend/email-template';
import connectMongo from '../../../../libs/mongoose';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongo();
    
    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      // For security reasons, don't reveal that the user doesn't exist
      return NextResponse.json({ success: true });
    }
    
    // Generate verification token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours
    
    // Save token to user
    user.verificationToken = token;
    user.verificationTokenExpiresAt = expiresAt;
    await user.save();
    
    // Create verification URL
    const baseUrl = process.env.NEXTAUTH_URL || 
                   (typeof window !== 'undefined' ? window.location.origin : 'https://blindandosuenos.com');
    const verificationUrl = `${baseUrl}/api/auth/verify?token=${token}&email=${encodeURIComponent(email)}`;
    
    // Send verification email using Resend
    const { html, text, subject } = createVerificationEmail(verificationUrl, new URL(baseUrl).host);
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json(
        { error: 'Failed to send verification email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in verification email handler:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 