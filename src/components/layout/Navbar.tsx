"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home",     id: "hero"     },
  { label: "About",    id: "about"    },
  { label: "Events",   id: "events"   },
  { label: "Timeline", id: "timeline" },
  { label: "Gallery",  id: "gallery"  },
  { label: "FAQ",      id: "faq"      },
];

export default function Navbar() {
  const [isOpen,        setIsOpen]        = useState(false);
  const [isVisible,     setIsVisible]     = useState(true);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollY = useRef(0);
  const pathname    = usePathname();
  const router      = useRouter();
  const isHome      = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      if (y < lastScrollY.current || y < 50) {
        setIsVisible(true);
      } else if (y > lastScrollY.current && y > 50) {
        setIsOpen((prev) => { if (!prev) setIsVisible(false); return prev; });
      }
      lastScrollY.current = y;

      // scroll spy — highlight whichever section's top is closest above mid-viewport
      if (isHome) {
        const mid = y + window.innerHeight * 0.4;
        for (let i = navItems.length - 1; i >= 0; i--) {
          const el = document.getElementById(navItems[i].id);
          if (el && el.offsetTop <= mid) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (pathname?.startsWith("/admin")) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleNavClick = (id: string) => {
    if (isHome) scrollTo(id);
    else { router.push(`/#${id}`); setIsOpen(false); }
  };

  const handleRegister = () => {
    if (isHome) scrollTo("cta");
    else router.push("/register");
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => handleNavClick("hero")}
        >
          <Image
            src="/catalysis.png"
            alt="Catalysis"
            width={110}
            height={40}
            className="h-auto w-auto"
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive ? "text-[#DD273E]" : "text-black/70 hover:text-black"
                }`}
              >
                {item.label}
                {/* active underline */}
                <span
                  className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#DD273E] rounded-full transition-transform duration-200 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Register button */}
        <button
          onClick={handleRegister}
          className="hidden md:flex items-center bg-[#DD273E] text-white font-bold text-sm px-5 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_black] hover:-translate-y-px hover:shadow-[3px_4px_0px_black] active:translate-y-px active:shadow-[2px_2px_0px_black] transition-all duration-100"
        >
          Register Now
        </button>

        {/* Mobile hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-[60] gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#FFEEF0]/97 backdrop-blur-md flex flex-col items-center justify-center gap-5 transition-all duration-300 z-50 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navItems.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-gliker text-[22px] tracking-[-0.01em] transition-all duration-200 ${
                  isActive ? "text-[#DD273E] scale-105" : "text-[#3A001D] hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleRegister}
          className="mt-4 bg-[#E63946] text-white px-8 py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_black] font-bold hover:scale-105 active:scale-95 transition"
        >
          Register Now
        </button>
      </div>
    </nav>
  );
}
