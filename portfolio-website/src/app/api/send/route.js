import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data } = await resend.emails.send({
      from: fromEmail,
      to: ["randimamethminid525@gmail.com", email],
      subject: subject || "New Contact Form Submission",
      react: (
        <>
          <h1>{subject}</h1>
          <h3>You have a new message from,</h3>
          <ul>
            <li>Name - {name}</li>
            <li>Email - {email}</li>
          </ul>
          <p>{message}</p>
        </>
      ),
    });
    console.log(email, subject, message);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
