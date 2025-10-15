"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-10 border-t border-white/10 font-inter">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Derby City
            </h2>
            <span className="text-gray-300 text-lg font-semibold">
              Boxing Academy
            </span>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide">
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-white transition-colors duration-300"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-white transition-colors duration-300"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#locations"
                className="hover:text-white transition-colors duration-300"
              >
                Locations
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Derby City Boxing Academy. All rights reserved.
          </p>
          <p className="text-center md:text-right mt-2 md:mt-0">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
