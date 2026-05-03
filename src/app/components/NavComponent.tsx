"use client"

import { useState } from "react";

const navLinks = [
  { link: "#home", title: "Home" },
  { link: "#about", title: "About" },
  { link: "#skills", title: "Skills" },
  { link: "#projects", title: "Projects" },
  { link: "#contact", title: "Contact Me" },
];

export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="flex bg-primary-bg/10 backdrop-blur-xs justify-between px-10 lg:px-18 xl:px-35 items-center h-24 w-full sticky top-0 z-50 border-b border-primary/10">


      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Gurpinder <span className="text-primary">Singh</span>
      </h1>

      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <section className={`
    ${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row
    absolute md:static top-full left-0
    w-full md:w-auto items-center
    gap-3 md:gap-x-1 py-5 md:py-0
    bg-secondary-bg border-t border-primary/10 md:border-none md:bg-transparent
    lg:text-lg z-50
  `}>
        {navLinks.map(navlink => (
          <a
            key={navlink.title}
            className="uppercase text-sm tracking-wider py-2 px-5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center w-4/5 md:w-auto"
            href={navlink.link}
            onClick={() => setIsOpen(false)}
          >
            {navlink.title}
          </a>
        ))}
      </section>
    </nav>
  );
}