export interface EventShowcase {
  name: string;
  type: string;
  image: string;
  color: string;
  detailsLink: string;
  top?: string;
  width?: number;
  height?: number;
  badgeColor: string;
  badgeIcon: string;
  badgeIconAlt: string;
  imageBg: string;
  tags: { label: string; bg: string; border: string }[];
}

export const EVENTS_DATA: EventShowcase[] = [
  {
    name: "DSA SMACKDOWN",
    type: "STRATEGY TYPE",
    image: "/pokemons/alakazam.svg",
    color: "#FFD1D1",
    detailsLink: "/rules/dsa-challenge",
    badgeColor: "#FFB84D",
    badgeIcon: "/pokemons/fire.png",
    badgeIconAlt: "Fire",
    imageBg: "#FFF8D6",
    tags: [
      { label: "Data Structures", bg: "#FFD9C3", border: "#FBB993" },
      { label: "Optimization", bg: "#E6DBED", border: "#CCB8E6" },
      { label: "Logic", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Algorithms", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
  {
    name: "PITCH PERFECT",
    type: "STRATEGY TYPE",
    image: "/pokemons/jigglypuff.svg",
    color: "#D1FFE9",
    detailsLink: "/rules/pitch-event",
    width: 175,
    height: 175,
    badgeColor: "#5AC178",
    badgeIcon: "/pokemons/leaf.png",
    badgeIconAlt: "Leaf",
    imageBg: "#83CCB147",
    tags: [
      { label: "Ideation", bg: "#FFD9C3", border: "#FBB993" },
      { label: "Business Model", bg: "#E6DBED", border: "#CCB8E6" },
      { label: "Presentation", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Pitch Pro", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
  {
    name: "CODING RELAY",
    type: "STRATEGY TYPE",
    image: "/pokemons/ditto.svg",
    color: "#FFD1D1",
    detailsLink: "/rules/coding-relay",
    top: "-top-[25px]",
    badgeColor: "#FFB84D",
    badgeIcon: "/pokemons/fire.png",
    badgeIconAlt: "Fire",
    imageBg: "#FFF8D6",
    tags: [
      { label: "Algorithms", bg: "#FFD9C3", border: "#FBB993" },
      { label: "Team Sync", bg: "#E6DBED", border: "#CCB8E6" },
      { label: "Endurance", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Relay", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
  {
    name: "TECHNOSEEK",
    type: "STRATEGY TYPE",
    image: "/pokemons/zoroark.svg",
    color: "#D1FFE9",
    detailsLink: "/rules/technoseek",
    top: "-top-[30px]",
    badgeColor: "#5AC178",
    badgeIcon: "/pokemons/leaf.png",
    badgeIconAlt: "Leaf",
    imageBg: "#83CCB147",
    tags: [
      { label: "Scavenger Hunt", bg: "#FFD9C3", border: "#FBB993" },
      { label: "Tech Puzzles", bg: "#E6DBED", border: "#CCB8E6" },
      { label: "Teamwork", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Explore", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
  {
    name: "CLASH ROYALE",
    type: "STRATEGY TYPE",
    image: "/pokemons/arceus.svg",
    color: "#FFD1D1",
    detailsLink: "/rules/clash-royale",
    width: 175,
    height: 160,
    badgeColor: "#FFB84D",
    badgeIcon: "/pokemons/fire.png",
    badgeIconAlt: "Fire",
    imageBg: "#FFF8D6",
    tags: [
      { label: "Strategy", bg: "#FFD9C3", border: "#FBB993" },
      { label: "1v1", bg: "#E6DBED", border: "#CCB8E6" },
      { label: "Card Battle", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Compete", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
  {
    name: "TYPEMASTER",
    type: "STRATEGY TYPE",
    image: "/pokemons/rayquaza.svg",
    color: "#D1FFE9",
    detailsLink: "/rules/typemaster",
    width: 200,
    height: 175,
    badgeColor: "#5AC178",
    badgeIcon: "/pokemons/leaf.png",
    badgeIconAlt: "Leaf",
    imageBg: "#83CCB147",
    tags: [
      { label: "Speed Demon", bg: "#FFD9C3", border: "#FBB993" },
      { label: "Precision Master", bg: "#CCB8E0", border: "#A890C8" },
      { label: "Combo Builder", bg: "#CEF2FF", border: "#A6E0F4" },
      { label: "Typing", bg: "#D6EBDC", border: "#ADD6B8" },
    ],
  },
];
