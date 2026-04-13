import { NextResponse } from "next/server";
import { createHelpdeskSession } from "@/lib/helpdeskSession";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const validUsername = process.env.HELP_DESK_USERNAME;
    const validPassword = process.env.HELP_DESK_PASSWORD;

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { error: "Server misconfiguration: helpdesk credentials not set" },
        { status: 500 }
      );
    }

    if (username !== validUsername || password !== validPassword) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    await createHelpdeskSession(username);
    return NextResponse.json({ success: true, role: "helpdesk" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}