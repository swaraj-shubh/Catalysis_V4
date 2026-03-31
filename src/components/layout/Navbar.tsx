"use client";

import Image from "next/image";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Events", id: "events" },
  { label: "Contact", id: "faq" },
  { label: "Support", id: "footer" },
];

export default function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">

        <div className="cursor-pointer" onClick={() => handleScroll("hero")}>
          <Image
            src="/catalysis.png"
            alt="Catalysis"
            width={120}
            height={50}
          />
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-red-500 transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className="cursor-pointer"
          onClick={() => handleScroll("cta")}
        >
          <Image
            src="/nav-register-now.png"
            alt="Register"
            width={120}
            height={60}
          />
        </div>
      </div>
    </nav>
  );
}