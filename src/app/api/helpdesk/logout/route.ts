import { NextResponse } from "next/server";
import { deleteHelpdeskSession } from "@/lib/helpdeskSession";

export async function POST() {
  await deleteHelpdeskSession();
  return NextResponse.json({ success: true }, { status: 200 });
}