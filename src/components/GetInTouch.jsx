"use client";
import React from "react";

export default function GetInTouch() {
  return (
    <section
      className="bg-[#0B0B0B] py-20 px-6 font-inter"
      id="locations"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Left Image */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="relative w-full h-[240px] md:h-[260px] rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(255,255,255,0.1)] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1920&auto=format&fit=crop"
              alt="Derby City Boxing Academy Gym"
              className="w-full h-full object-cover object-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left space-y-6">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-[16px] leading-relaxed max-w-lg mx-auto md:mx-0">
            Visit us at{" "}
            <span className="text-white font-semibold">
              Stockbrook Street, Derby DE22 3WH
            </span>{" "}
            or give us a call to learn more about classes, training, or
            membership details.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 text-gray-300 text-[15px] mt-4">
            <div>
              <span className="font-semibold text-white">Call:</span>{" "}
              <a
                href="tel:07903247596"
                className="hover:text-white transition-colors duration-300"
              >
                07903 247596
              </a>
            </div>
            <span className="hidden sm:block text-gray-500">|</span>
            <div>
              <a
                href="tel:01332344380"
                className="hover:text-white transition-colors duration-300"
              >
                01332 344380
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-20 h-[3px] bg-white/20 mt-6 rounded-full mx-auto md:mx-0"></div>
        </div>
      </div>
    </section>
  );
}
