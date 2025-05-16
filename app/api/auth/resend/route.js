import { createMagicLinkEmail } from './email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// This is a custom handler for the Resend provider
// It will be called by NextAuth when a magic link is requested
export async function POST(request) {
  try {
    const body = await request.json();
    const { url, email, host } = body;

    if (!url || !email || !host) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const { subject, html, text } = createMagicLinkEmail(url, host);

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
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in magic link handler:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 