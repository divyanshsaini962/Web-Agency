// Header.tsx
"use client";
import { useState } from "react";
import { Shield } from "lucide-react"; // For Admin icon

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 
                 flex items-center justify-between px-6 py-3 
                 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
        <span className="text-white font-semibold text-lg">Divyansh-Agency</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-white/70 font-medium">
        <a href="/" className="hover:text-white transition">Home</a>
        <a href="/services" className="hover:text-white transition">Services</a>
        <a href="/portfolio" className="hover:text-white transition">Portfolio</a>
        <a href="/blog" className="hover:text-white transition">Blog</a>
        <a href="/about" className="hover:text-white transition">About</a>
        <a href="/contact" className="hover:text-white transition">Contact</a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Admin Icon */}
        <a
          href="/admin"
          className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          title="Admin Panel"
        >
          <Shield size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 transition"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-full flex flex-col items-center gap-4 p-4 
                     bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:hidden"
        >
          <a href="/" className="text-white hover:text-cyan-300">Home</a>
          <a href="/services" className="text-white hover:text-cyan-300">Services</a>
          <a href="/portfolio" className="text-white hover:text-cyan-300">Portfolio</a>
          <a href="/blog" className="text-white hover:text-cyan-300">Blog</a>
          <a href="/about" className="text-white hover:text-cyan-300">About</a>
          <a href="/contact" className="text-white hover:text-cyan-300">Contact</a>
          <a href="/admin" className="flex items-center gap-2 text-white hover:text-cyan-300">
            <Shield size={16} /> Admin
          </a>
        </div>
      )}
    </header>
  );
}
