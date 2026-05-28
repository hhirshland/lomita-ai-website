import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMultiline(value: unknown) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Contact form is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      name,
      email,
      firmType,
      maturity,
      workflows,
      pilot,
      message,
    } = await request.json();

    if (!name || !email || !firmType || !maturity || !workflows || !pilot) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: `${escapeHtml(name)} <onboarding@resend.dev>`,
      to: "henry@hyperactivestudio.xyz",
      replyTo: email,
      subject: `Get started request from ${name}`,
      html: `
        <h2>New message from hyperactive.studio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Firm type:</strong> ${escapeHtml(firmType)}</p>
        <p><strong>AI maturity:</strong> ${escapeHtml(maturity)}</p>
        <p><strong>Desired first workflow:</strong> ${escapeHtml(pilot)}</p>
        <hr />
        <h3>Highest-friction workflows</h3>
        <p>${formatMultiline(workflows)}</p>
        <h3>Additional context</h3>
        <p>${formatMultiline(message || "Not provided")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
