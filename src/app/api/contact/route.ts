import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  services?: string;
  hearAbout?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!payload.fullName || !payload.email || !payload.message) {
      return NextResponse.json(
        { error: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Replace with email or CRM integration.
    console.info("New contact request", {
      fullName: payload.fullName,
      email: payload.email,
      company: payload.company,
      phone: payload.phone,
      services: payload.services,
      hearAbout: payload.hearAbout,
      messageLength: payload.message.length,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to handle contact request", error);
    return NextResponse.json(
      { error: "Unable to submit the form right now. Please try again later." },
      { status: 500 }
    );
  }
}
