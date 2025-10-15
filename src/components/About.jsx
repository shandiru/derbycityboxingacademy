"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16 font-inter"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-[0_0_35px_rgba(255,255,255,0.15)]">
          <img
            src="/banner-3-940x529.jpg"
            alt="Boxing training at Derby City Boxing Academy"
            className="rounded-2xl w-full object-cover h-[420px] md:h-[500px] transform group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <p className="uppercase text-gray-400 text-sm tracking-[4px]">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Derby City Boxing Academy
          </h2>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            <span className="text-[#BFBFBF] font-semibold">
              Founded in February 2009
            </span>{" "}
            by Midlands A.B.A. coach{" "}
            <span className="text-white font-semibold">Alex Neave</span>, the
            Academy was established to promote boxing among the younger
            generation and provide a positive outlet that encourages
            responsibility and respect within the local community.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            Our goal is to provide guidance and support to all — regardless of
            race, disability or gender. Affiliated with the{" "}
            <span className="text-white font-semibold">
              Amateur Boxing Association of England (A.B.A.)
            </span>
            , we follow strict training and safety standards. Amateur boxing
            teaches discipline, respect and the technical skills needed to
            compete under professional supervision.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            Boxing gives individuals a safe way to channel aggression, relieve
            daily stress, and build inner strength. Our club prides itself on
            camaraderie and encouragement, placing the{" "}
            <span className="text-white font-semibold">
              well-being and development of our boxers
            </span>{" "}
            first. With members from diverse cultural backgrounds, we strive to
            build confidence, communication skills, respect, discipline, and
            life skills.
          </p>

          {/* Founder Info */}
          <div>
            <p className="font-semibold text-gray-400 text-sm">
              Founder & Head Coach
            </p>
            <p className="font-bold text-white text-lg tracking-wide">
              Alex Neave
            </p>
          </div>

          {/* Buttons & Badge */}
          <div className="flex items-end justify-between flex-wrap mt-8">
            {/* Button */}
            <button
              className="inline-flex items-center justify-center rounded-full
                         border border-white/15 bg-[#141414]
                         px-6 py-2 text-sm font-medium text-white
                         hover:border-[#BFBFBF] hover:bg-[#1a1a1a]
                         transition-all duration-300"
            >
              Learn More
            </button>

            {/* Square Badge */}
            <div
              className="bg-gradient-to-br from-[#6C6C6C] to-[#A0A0A0]
                         text-black font-semibold
                         w-28 h-24 md:w-32 md:h-28
                         rounded-lg shadow-[0_8px_24px_rgba(255,255,255,0.15)]
                         flex flex-col items-center justify-center
                         mt-6 md:mt-0"
            >
              <h3 className="text-3xl font-extrabold leading-none">2009</h3>
              <p className="text-[10px] md:text-xs leading-tight text-center mt-1">
                Established <br /> Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
