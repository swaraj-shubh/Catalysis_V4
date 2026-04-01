"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Events", id: "events" },
  { label: "Contact", id: "faq" },
  { label: "Support", id: "footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        <div className="cursor-pointer" onClick={() => handleScroll("hero")}>
          <Image
            src="/catalysis.png"
            alt="Catalysis"
            width={110}
            height={45}
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
          className="hidden md:block cursor-pointer"
          onClick={() => handleScroll("cta")}
        >
          <Image
            src="/nav-register-now.png"
            alt="Register"
            width={110}
            height={50}
          />
        </div>

        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-black mb-1 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#FFEEF0] shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-lg hover:text-red-500 transition"
            >
              {item.label}
            </button>
          ))}


          <div
            className="cursor-pointer mt-2"
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
      </div>
    </nav>
  );
}