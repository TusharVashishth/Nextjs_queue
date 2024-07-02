import { sendEmail } from "@/config/mail";
import { NextRequest, NextResponse } from "next/server";

type BodyType = {
  email: string;
  body: string;
  subject: string;
};

export async function POST(request: NextRequest) {
  const body: BodyType = await request.json();
  console.log("The body is", body);
  await sendEmail(body.email, body.body, body.subject);
  return NextResponse.json({ status: 200, data: body });
}
