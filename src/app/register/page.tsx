"use client";
import React, { useState } from "react";

const TEAM_EVENTS = ["technoseek", "coding_relay"];
const ALL_EVENTS = ["technoseek", "typemaster", "clash_royale", "coding_relay", "dsa_smackdown", "pitch_perfect"];

// Interface for Member Data
interface MemberData {
  name: string;
  usn: string;
  email: string;
  phone: string;
  semester: string | number;
  branch: string;
}

const INITIAL_MEMBER: MemberData = { name: "", usn: "", email: "", phone: "", semester: "", branch: "" };

export default function RegisterPage() {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    team_name: "",
    member1: { ...INITIAL_MEMBER },
    member2: { ...INITIAL_MEMBER },
    member3: { ...INITIAL_MEMBER },
  });

  const isTeamEvent = TEAM_EVENTS.includes(event);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      event,
      ...formData,
      member1: { ...formData.member1, semester: Number(formData.member1.semester) },
      member2: { ...formData.member2, semester: Number(formData.member2.semester) },
      member3: { ...formData.member3, semester: Number(formData.member3.semester) },
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    const data = await res.json();
    setLoading(false);
    
    alert(res.ok ? "Registration Successful!" : data.error);
    if(res.ok) window.location.reload();
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8 bg-gray-900 p-8 rounded-2xl">
        <h1 className="text-3xl font-bold border-b border-gray-800 pb-4 text-blue-500">Event Registration</h1>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Choose your game</label>
          <select className="w-full p-4 bg-gray-800 rounded-lg outline-none" 
            onChange={(e) => setEvent(e.target.value)} required>
            <option value="">-- Select Event --</option>
            {ALL_EVENTS.map(ev => <option key={ev} value={ev}>{ev.toUpperCase().replace('_', ' ')}</option>)}
          </select>
        </div>

        {isTeamEvent && (
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Team Name</label>
            <input className="w-full p-4 bg-gray-800 rounded-lg" 
              placeholder="Enter team name"
              onChange={(e) => setFormData({...formData, team_name: e.target.value})} required />
          </div>
        )}

        <MemberInput title="Member 1 (Lead)" val={formData.member1} 
          set={(data: MemberData) => setFormData({...formData, member1: data})} />

        {isTeamEvent && (
          <>
            <MemberInput title="Member 2" val={formData.member2} 
              set={(data: MemberData) => setFormData({...formData, member2: data})} />
            <MemberInput title="Member 3 (Optional)" val={formData.member3} required={false}
              set={(data: MemberData) => setFormData({...formData, member3: data})} />
          </>
        )}

        <button className="w-full bg-blue-600 p-4 rounded-xl font-bold text-lg disabled:opacity-50" 
          disabled={loading || !event}>
          {loading ? "Registering..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}

// Props interface for the component
interface MemberInputProps {
  title: string;
  val: MemberData;
  set: (data: MemberData) => void;
  required?: boolean;
}

function MemberInput({ title, val, set, required = true }: MemberInputProps) {
  const update = (field: keyof MemberData, value: string) => set({ ...val, [field]: value });
  return (
    <div className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 space-y-4">
      <p className="text-blue-400 font-bold text-lg">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Full Name" required={required} value={val.name} onChange={e => update("name", e.target.value)} />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="USN" required={required} value={val.usn} onChange={e => update("usn", e.target.value)} />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Email" type="email" required={required} value={val.email} onChange={e => update("email", e.target.value)} />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Phone" required={required} value={val.phone} onChange={e => update("phone", e.target.value)} />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Semester" type="number" required={required} value={val.semester} onChange={e => update("semester", e.target.value)} />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Branch" required={required} value={val.branch} onChange={e => update("branch", e.target.value)} />
      </div>
    </div>
  );
}