// Shared constants for registration form, admin panel, and Mongoose schema

export const EVENT_IDS = [
  "technoseek",
  "typemaster",
  "clash_royale",
  "coding_relay",
  "dsa_smackdown",
  "pitch_perfect",
  "prompt_wars",
] as const;
export type EventId = (typeof EVENT_IDS)[number];

export const TEAM_EVENT_IDS: readonly EventId[] = ["technoseek", "coding_relay"];

export const EVENT_LABELS: Record<EventId, string> = {
  pitch_perfect: "Ideathon",
  typemaster:    "Typemaster",
  clash_royale:  "Clash Royale",
  coding_relay:  "Code Relay",
  dsa_smackdown: "DSA Event",
  technoseek:    "Technoseek",
  prompt_wars:   "Prompt Wars",
};
export const BRANCHES: { value: string; label: string; code: string }[] = [
  { value: "Artificial Intelligence and Machine Learning",                                      label: "AI & ML",                    code: "ai" },
  { value: "Aeronautical Engineering",                                                          label: "Aeronautical Engg",          code: "ae" },
  { value: "Automobile Engineering",                                                            label: "Automobile Engg",            code: "au" },
  { value: "Biotechnology",                                                                     label: "Biotechnology",              code: "bt" },
  { value: "Chemical Engineering",                                                              label: "Chemical Engg",              code: "ch" },
  { value: "Civil Engineering",                                                                 label: "Civil Engg",                 code: "cv" },
  { value: "Computer Science and Business Systems",                                             label: "CS & Business Systems",      code: "cb" },
  { value: "Computer Science and Design",                                                       label: "CS & Design",                code: "cg" },
  { value: "Computer Science and Engineering",                                                  label: "CSE",                        code: "cs" },
  { value: "Computer Science & Engineering (Cyber Security)",                                   label: "CSE (Cyber Security)",       code: "cy" },
  { value: "Computer Science & Engineering (Data Science)",                                     label: "CSE (Data Science)",         code: "cd" },
  { value: "Computer Science & Engineering (IoT and Cyber Security Including Block Chain)",     label: "CSE (IoT & Cyber Security)", code: "ic" },
  { value: "Electrical & Electronics Engineering",                                              label: "EEE",                        code: "ee" },
  { value: "Electronics & Communication Engineering",                                           label: "ECE",                        code: "ec" },
  { value: "Electronics and Instrumentation Engineering",                                       label: "EIE",                        code: "ei" },
  { value: "Electronics and Telecommunication Engineering",                                     label: "E&TC",                       code: "et" },
  { value: "Information Science and Engineering",                                               label: "ISE",                        code: "is" },
  { value: "Mechanical Engineering",                                                            label: "Mechanical Engg",            code: "me" },
  { value: "Medical Electronics Engineering",                                                   label: "Medical Electronics",        code: "md" },
  { value: "Robotics and Artificial Intelligence",                                              label: "Robotics & AI",              code: "ri" },
];

export const SEMESTERS = ["2","4","6","8"] as const;
