"use client";
import React, { useState, useEffect } from "react";
import { CalendarDays, Clock, Users } from "lucide-react";

export default function ClassesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const collapseDelay = 6000; // Auto-switch every 6 seconds

  // ✅ Boxing classes data
  const data = [
    {
      id: 1,
      day: "Monday",
      image: "boxing-classes-768x432.jpg",
      sessions: [
        { time: "6.00 – 7.30pm", group: "Juniors (9–17yrs)", price: "£3.00" },
        { time: "7.30 – 9.00pm", group: "Seniors (18yrs+)", price: "£4.00" },
      ],
    },
    {
      id: 2,
      day: "Wednesday",
      image: "boxing-classes-768x432.jpg",
      sessions: [
        { time: "6.00 – 7.30pm", group: "Juniors (9–17yrs)", price: "£3.00" },
        { time: "7.30 – 9.00pm", group: "Seniors (18yrs+)", price: "£4.00" },
      ],
    },
    {
      id: 3,
      day: "Thursday (Beginners Only)",
      image: "boxing-classes-768x432.jpg",
      sessions: [
        { time: "6.00 – 7.30pm", group: "(9–17yrs)", price: "£3.00" },
      ],
    },
    {
      id: 4,
      day: "Friday",
      image: "boxing-classes-768x432.jpg",
      sessions: [
        { time: "6.00 – 7.30pm", group: "Juniors (9–17yrs)", price: "£3.00" },
        { time: "7.30 – 9.00pm", group: "Seniors (18yrs+)", price: "£4.00" },
      ],
    },
  ];

  // 🔁 Auto-switch rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, collapseDelay);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="classes"
      className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16 font-inter"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Image */}
        <div className="relative flex justify-center order-1 md:order-1">
          <img
            key={data[currentIndex].id}
            src={data[currentIndex].image}
            alt={data[currentIndex].day}
            className="rounded-2xl w-full max-w-md h-[420px] object-cover border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              {data[currentIndex].day}
            </h3>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <p className="uppercase text-gray-400 text-sm tracking-[4px]">
              Boxing Classes
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-4">
              Train Hard. Stay Disciplined.
            </h2>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              All classes are led by{" "}
              <span className="text-white font-semibold">
                qualified A.B.A. instructors
              </span>{" "}
              with real amateur boxing experience. Our coaches inspire young
              people to become stronger, healthier, and more confident through
              disciplined training and teamwork.
            </p>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 gap-5">
            {data.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-xl border p-5 transition-all duration-500 cursor-pointer ${
                  currentIndex === index
                    ? "bg-white/10 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-6 h-6 text-gray-300" />
                    <h3 className="text-lg font-semibold text-white">
                      {item.day}
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Sessions */}
                <div className="space-y-2">
                  {item.sessions.map((session, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm md:text-[15px]"
                    >
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <p>{session.time}</p>
                      </div>
                      <p className="text-gray-400">{session.group}</p>
                      <p className="font-semibold text-white">{session.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
              <Users className="w-5 h-5 text-gray-300" />
              <p>Please ring prior for availability — limited spaces only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

