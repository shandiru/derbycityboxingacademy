"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BoxingTeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle open/close on mobile
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

 const team = [
  {
    name: "Alex Neave",
    role: "Head Coach",
    image: "coach-6.jpg", // replace with real path
    bio: `With over 40 years in boxing, I began as an amateur and now coach fighters to develop their skill, discipline, and confidence. I also lead the East Midlands Female Squad and enjoy guiding all who want to box or stay fit.`,
  },
  {
    name: "Jindy Tamba",
    role: "Coach",
    image: "jindy-tamba.jpg",
    bio: `I’ve spent over two decades in boxing and 15 years coaching at Level 2. My proudest moment was helping a Derby boxer become a National ABA Champion, and I’m passionate about passing that drive to others.`,
  },
  {
    name: "Will Cheung",
    role: "Assistant Coach",
    image: "coach-4.jpg",
    bio: `I support daily training sessions, helping boxers improve their technique and fitness. My focus is on building confidence and consistency both inside and outside the ring.`,
  },
  {
    name: "Jacqueline Radford",
    role: "Volunteer",
    image: "jacqueline-radford.jpg",
    bio: `I assist with club operations and support our young athletes. My goal is to create a positive, organized environment that helps everyone thrive within the Academy.`,
  },
];


  return (
    <section
      id="team"
      className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16 font-inter"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="uppercase text-gray-400 text-sm tracking-[4px] mb-2">
          The Boxing Team
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Meet Our Coaches & Volunteers
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-[16px] leading-relaxed">
          Our experienced coaches and volunteers bring years of passion and
          skill to help every boxer reach their potential.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {team.map((member, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              onClick={() => handleToggle(i)}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(255,255,255,0.25)",
              }}
              className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-pointer transition-all duration-500"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[340px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />

              {/* Overlay Content (desktop hover) */}
              <motion.div
                className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 text-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  {member.bio}
                </p>
              </motion.div>

              {/* Mobile Click Reveal */}
              {isActive && (
                <div className="absolute inset-0 bg-black/85 flex flex-col justify-center items-center text-center p-5 transition-all duration-500 md:hidden">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              )}

              {/* Name label always visible */}
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
