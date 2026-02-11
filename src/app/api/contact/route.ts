import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  turnstileToken: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY environment variable is not set");
    return false;
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    },
  );

  const data: TurnstileVerifyResponse = await response.json();
  if (!data.success) {
    console.error("Turnstile verification failed:", data["error-codes"]);
  }
  return data.success;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Verification required" },
        { status: 400 },
      );
    }

    console.log("Token received:", turnstileToken?.substring(0, 20) + "...", "Length:", turnstileToken?.length);
    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Get the destination email from environment variable
    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_EMAIL environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Initialize Resend at runtime (not during build)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }
    const resend = new Resend(apiKey);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      // from: "Baseball-Catcher.com <noreply@baseball-catcher.com>",
      from: "onboarding@resend.dev",
      to: [toEmail],
      replyTo: email,
      subject: `[Baseball-Catcher.com] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<h3>Message:</h3>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
