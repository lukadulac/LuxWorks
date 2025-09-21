import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5">
        <h2>📩 New message from your portfolio site</h2>
        <h3>New contact from ${name}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:10px; border:1px solid #ccc; border-radius:8px;">
          ${message}
        </div>
      </div>
    `;

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `New contact from ${name}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
