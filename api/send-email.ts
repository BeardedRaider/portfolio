// /api/send-email.ts
import { Resend } from "resend";

export const runtime = "nodejs"; // modern Vercel runtime flag

export default async function handler(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    const { name, email, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "ShaneCrossman365@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);

    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
