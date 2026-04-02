import mongoose from "mongoose";


import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import Participant from "../src/models/Participant.js";

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI not found in environment variables.");
    process.exit(1);
  }

  try {
    console.log("Connecting to database...");
    await mongoose.connect(uri);
    console.log("Connected!");

    // Drop obsolete team_id index that was blocking insertions
    try {
      await Participant.collection.dropIndex('team_id_1');
      console.log("Dropped obsolete team_id index");
    } catch {
      // Ignore if index doesn't exist
    }

    // Create some dummy entries
    const dummyData = [
      {
        team_id: "TEAM-001",
        event: "technoseek",
        team_name: "Code Wizards",
        member1: { name: "Alice Smith", usn: "1DS22IS001", email: "alice@example.com", phone: "9876543210", semester: 4, branch: "ISE" },
        member2: { name: "Bob Johnson", usn: "1DS22IS002", email: "bob@example.com", phone: "9876543211", semester: 4, branch: "ISE" },
        member3: { name: "Charlie Brown", usn: "1DS22CS099", email: "charlie@example.com", phone: "9876543212", semester: 4, branch: "CSE" },
      },
      {
        team_id: "TEAM-002",
        event: "typemaster",
        team_name: "", // solo event
        member1: { name: "David Miller", usn: "1DS21EC045", email: "david@example.com", phone: "9876543213", semester: 6, branch: "ECE" },
      },
      {
        team_id: "TEAM-003",
        event: "clash_royale",
        team_name: "King Tower",
        member1: { name: "Eve Davis", usn: "1DS23AI012", email: "eve@example.com", phone: "9876543214", semester: 2, branch: "AIML" },
      },
      {
        team_id: "TEAM-004",
        event: "coding_relay",
        team_name: "Null Pointers",
        member1: { name: "Frank White", usn: "1DS22IS055", email: "frank@example.com", phone: "9876543215", semester: 4, branch: "ISE" },
        member2: { name: "Grace Lee", usn: "1DS22IS056", email: "grace@example.com", phone: "9876543216", semester: 4, branch: "ISE" },
      },
      {
        team_id: "TEAM-005",
        event: "dsa_smackdown",
        team_name: "",
        member1: { name: "Hank Green", usn: "1DS20CS101", email: "hank@example.com", phone: "9876543217", semester: 8, branch: "CSE" },
      },
      {
        team_id: "TEAM-006",
        event: "pitch_perfect",
        team_name: "Startup Bros",
        member1: { name: "Ivy Chen", usn: "1DS21IS088", email: "ivy@example.com", phone: "9876543218", semester: 6, branch: "ISE" },
        member2: { name: "Jack Wilson", usn: "1DS21ME023", email: "jack@example.com", phone: "9876543219", semester: 6, branch: "ME" },
      },
      {
        team_id: "TEAM-007",
        event: "technoseek",
        team_name: "Cyber Punks",
        member1: { name: "Karen Young", usn: "1DS22CY005", email: "karen@example.com", phone: "9998887776", semester: 4, branch: "CY" },
      }
    ];

    console.log(`Inserting ${dummyData.length} dummy records...`);
    await Participant.insertMany(dummyData);
    
    console.log("Successfully seeded database!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seed();
