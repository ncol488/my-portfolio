"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/logo-cat.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-16 h-16"
          />
        </a>
        <div
          className="hidden md:flex gap-8 items-center"
          style={{
            letterSpacing: "-0.09em",
            fontSize: "1.2rem",
            fontWeight: "100",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition font-semibold ${
                  isActive ? "text-blue-700" : "hover:text-blue-700"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </nav>
  );
}
