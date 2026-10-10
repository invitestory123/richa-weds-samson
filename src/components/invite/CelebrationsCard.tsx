import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function CelebrationsCard() {
  return (
    <section className="celebrations-editorial" aria-labelledby="celebrations-title">
      <Reveal className="celebrations-editorial__heading">
        <p className="section-kicker">Two Days · Four Chapters</p>
        <h2 id="celebrations-title">Wedding Itinerary</h2>
        <p className="max-w-[420px] text-[#2c1a05] text-[0.96rem] leading-relaxed font-normal">
          Move through the moments — from poolside carnival hues to the sacred pheras under the stars at Kaka Ji Ni Wadi.
        </p>
      </Reveal>

      {/* Grid displaying All Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6">
        {wedding.events.map((ev, idx) => (
          <Reveal
            key={ev.name}
            delay={idx * 75}
            className="group relative overflow-hidden rounded-sm border border-hall-glow/35 bg-[#1b1105]/95 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-hall-glow/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Header: Chapter badge, Day pill & Index */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-3xl font-light text-[#ffd982]/85">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full border border-hall-glow/40 bg-black/55 px-3 py-1 font-body text-[0.58rem] tracking-[0.22em] uppercase text-[#ffd982] font-medium">
                    {ev.chapter}
                  </span>
                </div>
                <span className="rounded-full border border-hall-glow/35 bg-black/60 px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-[#fceec9] font-medium">
                  {ev.day}
                </span>
              </div>

              {/* Date & Time */}
              <div className="flex items-center gap-2 text-[0.72rem] tracking-[0.22em] uppercase text-[#ffd982] font-title mb-2">
                <span>{ev.date}</span>
                <span className="text-hall-glow/60">·</span>
                <span>{ev.time}</span>
              </div>

              {/* Name & Subtitle */}
              <h3 className="font-display text-[2rem] sm:text-[2.25rem] font-normal text-white leading-tight">
                {ev.name}
              </h3>
              {ev.subtitle && (
                <p className="font-display text-[1.12rem] italic text-[#ffd982] mt-1">
                  {ev.subtitle}
                </p>
              )}

              {/* Program schedule flow */}
              <div className="mt-4 rounded border border-hall-glow/30 bg-black/50 p-3.5 text-[0.78rem] text-[#f7e9c6] leading-relaxed">
                <span className="font-semibold text-[#ffd982] uppercase tracking-[0.2em] text-[0.58rem] block mb-1">
                  Program Schedule
                </span>
                {ev.flow}
              </div>

              {/* Note */}
              <p className="mt-3.5 text-[0.88rem] text-ivory/90 leading-relaxed font-light">
                {ev.note}
              </p>
            </div>

            {/* Bottom Details */}
            <div className="mt-6 pt-5 border-t border-hall-glow/25 space-y-4">
              {/* Colour Code / Dress Code */}
              <div className="rounded-sm border border-hall-glow/30 bg-[#251707]/90 p-3.5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-title text-[0.58rem] uppercase tracking-[0.24em] text-[#ffd982]">
                    Dress Code / Colour Code
                  </span>
                  {ev.isRestricted && (
                    <span className="rounded border border-amber-400/60 bg-amber-950/80 px-2 py-0.5 text-[0.54rem] uppercase tracking-wider text-amber-300 font-semibold">
                      Advisory
                    </span>
                  )}
                </div>
                <p className="font-display text-[1.22rem] font-medium text-white">
                  {ev.colorCodeText}
                </p>
                {ev.restrictedNotes && (
                  <p className="mt-1 text-[0.74rem] text-amber-200 italic leading-snug">
                    {ev.restrictedNotes}
                  </p>
                )}
                <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                  {ev.colors.map((c) => (
                    <div
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 py-0.5 pl-1 pr-2.5 text-[0.62rem] text-[#f7e9c6]"
                    >
                      <span
                        className="h-3 w-3 rounded-full border border-white/30 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cordially Invited By / Invitees */}
              {ev.invitees && ev.invitees.length > 0 && (
                <div className="rounded-sm border border-hall-glow/25 bg-black/45 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[#ffd982] text-[0.65rem]">✦</span>
                    <span className="font-title text-[0.56rem] uppercase tracking-[0.22em] text-[#ffd982]">
                      Cordially Invited By / Invitees
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ev.invitees.map((invitee) => (
                      <span
                        key={invitee}
                        className="inline-flex items-center rounded-full border border-hall-glow/30 bg-[#251707]/85 px-2.5 py-0.5 text-[0.68rem] text-[#fbf5e8] tracking-wide"
                      >
                        {invitee}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Venue Spot */}
              <div className="flex items-center gap-2 pt-1 text-[0.82rem] text-[#f7e9c6] font-medium">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-hall-glow shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{ev.fullVenue}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
