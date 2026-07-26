import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Integration point: wire this up to Resend/SendGrid or a CRM once credentials
  // are available. For now the validated lead is just logged server-side.
  console.log("New rice export enquiry:", result.data);

  return NextResponse.json({ ok: true });
}
