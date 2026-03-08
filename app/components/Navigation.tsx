"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="text-white font-bold text-2xl hover:text-sky-400 transition duration-300">
              QH
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-sky-400 transition duration-300 font-medium">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-sky-400 transition duration-300 font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-sky-400 transition duration-300 font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-sky-400 transition duration-300 font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg transition duration-300 font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
