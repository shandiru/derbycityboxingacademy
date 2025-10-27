"use client";
import React from "react";

/* =========================
   DATA
   ========================= */
const schedule = [
  {
    day: "MON",
    classes: [
      { title: "Juniors (9–17yrs)", subtitle: "£3.00", time: "6.00 – 7.30pm" },
      { title: "Seniors (18yrs+)", subtitle: "£4.00", time: "7.30 – 9.00pm" },
    ],
  },
  {
    day: "WED",
    classes: [
      { title: "Juniors (9–17yrs)", subtitle: "£3.00", time: "6.00 – 7.30pm" },
      { title: "Seniors (18yrs+)", subtitle: "£4.00", time: "7.30 – 9.00pm" },
    ],
  },
  {
    day: "THU",
    classes: [
      { title: "Beginners Only (9-17yrs)", subtitle: "£3.00", time: "6.00 – 7.30pm" },
    ],
  },
  {
    day: "FRI",
    classes: [
      { title: "Juniors (9–17yrs)", subtitle: "£3.00", time: "6.00 – 7.30pm" },
      { title: "Seniors (18yrs+)", subtitle: "£4.00", time: "7.30 – 9.00pm" },
    ],
  },
];

/* =========================
   COMPONENTS
   ========================= */

function DayColumn({ day, classes }) {
  return (
    <div className="min-w-[180px] flex-shrink-0 text-white">
      {/* Day header */}
      <div className="bg-red-700 text-white font-bold text-center text-4xl uppercase tracking-wide rounded-lg py-5">
        {day}
      </div>

      {/* Class cards */}
      <div className="flex flex-col gap-3 mt-3">
        {classes.map((cls, idx) => (
          <div
            key={idx}
            className="
              bg-black/80 
              border 
              border-red-800 
              shadow-[0_0_15px_rgba(255,0,0,0.2)]
              px-3 py-4 text-center flex flex-col justify-between rounded-lg
              min-h-[110px]
            "
          >
            <div className="uppercase text-sm font-bold leading-tight">
              <div>{cls.title}</div>
              {cls.subtitle && (
                <div className="text-sm leading-tight font-normal mt-3">
                  {cls.subtitle}
                </div>
              )}
            </div>

            <div className="text-white text-sm font-semibold mt-3">
              {cls.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   PAGE WRAPPER
   ========================= */

export default function FeatureSection() {
  return (
    <section className="w-full bg-cover bg-center text-white py-8 md:py-12">
      <div
        className="max-w-6xl mx-auto p-6 rounded-xl bg-center bg-cover"
        style={{ backgroundImage: "url('/banner-3-940x529.jpg')" }}
      >
        {/* Logo */}
        <img
          src="/dcba-logo.svg" // Replace with your logo file in public folder
          alt="Logo"
          className="mx-auto mb-6 w-32 md:w-40"
        />

        {/* Title */}
        <h2 className="text-black text-center text-xl md:text-2xl font-bold tracking-wide uppercase mb-6">
          Weekly Class Timetable
        </h2>

        {/* MOBILE / TABLET: horizontal scroll */}
        <div className="md:hidden mx-auto overflow-x-auto pb-4 flex gap-4 justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {schedule.map((dayBlock, i) => (
            <DayColumn key={i} day={dayBlock.day} classes={dayBlock.classes} />
          ))}
        </div>

        {/* DESKTOP: grid centered */}
        <div className="hidden md:flex md:justify-center md:gap-4">
          {schedule.map((dayBlock, i) => (
            <DayColumn key={i} day={dayBlock.day} classes={dayBlock.classes} />
          ))}
        </div>
      </div>
    </section>
  );
}
