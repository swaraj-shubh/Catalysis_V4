import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Participant, { TEAM_EVENTS } from "@/models/Participant";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { event, team_name, member1, member2, member3 } = body;

    if (!event || !member1?.usn) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const existing = await Participant.findOne({ event, "member1.usn": member1.usn });
    if (existing) return NextResponse.json({ error: "Already registered for this event" }, { status: 409 });

    const isTeam = TEAM_EVENTS.includes(event);
    if (isTeam && (!team_name || !member2?.usn)) {
      return NextResponse.json({ error: "Team details required for this event" }, { status: 400 });
    }

    await Participant.create({
      event,
      team_name: isTeam ? team_name : "",
      member1,
      member2: member2 || {},
      member3: member3 || {},
    });

    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}