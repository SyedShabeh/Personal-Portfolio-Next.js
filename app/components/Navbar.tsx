"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar shadow-sm sticky top-0 z-50 bg-opacity-40 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="main-font mode font-bold text-2xl animate-left">
          SYED SHABEH
        </h1>
        <button
            id="theme-toggle"
            className="bg-transparent border-0 ml-3 mb-2 flex items-center justify-center"
          >
            <span id="theme-text" className="border-0 bg-transparent">
              <ThemeToggle />
            </span>
          </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-6 font-bold items-center mx-auto">
          <Link href="#home" className="nav-link active text-primary" >HOME</Link>
          <Link href="#about" className="mode nav-link">ABOUT</Link>
          <Link href="#services" className="mode nav-link">SERVICES</Link>
          <Link href="#resume" className="mode nav-link">RESUME</Link>
          <Link href="#faq" className="mode nav-link">FAQ</Link>
          <Link href="#portfolio" className="mode nav-link" >PORTFOLIO</Link>
          <Link href="#contact" className="mode nav-link">CONTACT</Link>
        </ul>

        {/* Right Side (Theme + Social Icons + Toggler) */}
        <div className="flex items-center gap-4 animate-right">
          

          {/* Socials (hidden on small) */}
          <div className="hidden lg:flex gap-3">
            <a className="facebook" href="https://www.google.com" rel="noreferrer">
              <i className="fa-brands fa-facebook text-xl hover:text-blue-500 transition-colors"></i>
            </a>
            <a className="twitter" href="https://www.google.com" rel="noreferrer">
              <i className="fa-brands fa-twitter text-xl hover:text-blue-400 transition-colors"></i>
            </a>
            <a className="instagram" href="https://www.google.com" rel="noreferrer">
              <i className="fa-brands fa-instagram text-xl hover:text-red-500 transition-colors"></i>
            </a>
          </div>

          {/* Mobile Toggler */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 font-bold">
            <Link href="#home" className="nav-link text-primary" >HOME</Link>
            <Link href="#about" className="mode nav-link" >ABOUT</Link>
            <Link href="#services" className="mode nav-link" >SERVICES</Link>
            <Link href="#resume" className="mode nav-link" >RESUME</Link>
            <Link href="#faq" className="mode nav-link">FAQ</Link>
            <Link  href="#portfolio" className="mode nav-link">PORTFOLIO</Link>
            <Link  href="#contact" className="mode nav-link">CONTACT</Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
