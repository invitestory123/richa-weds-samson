import { useState } from "react";
import { wedding, type WeddingEvent } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function CelebrationsCard() {
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState<"tabs" | "timeline">("tabs");
  const event: WeddingEvent = wedding.events[active];

  return (
    <section className="celebrations-editorial" aria-labelledby="celebrations-title">
      <Reveal className="celebrations-editorial__heading">
        <p className="section-kicker">Two Days · Four Chapters</p>
        <h2 id="celebrations-title">Wedding Itinerary</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
          <p className="max-w-[380px] text-ivory/70 text-[0.92rem] leading-relaxed">
            Move through the moments — from poolside carnival hues to the sacred pheras under the stars at Kaka Ji Ni Wadi.
          </p>
          <div className="flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-hall-glow/30 bg-black/40 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode("tabs")}
              className={`rounded-full px-3.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                viewMode === "tabs"
                  ? "bg-hall-glow text-ink font-semibold shadow-sm"
                  : "text-hall-light/70 hover:text-hall-light"
              }`}
            >
              Interactive
            </button>
            <button
              type="button"
              onClick={() => setViewMode("timeline")}
              className={`rounded-full px-3.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                viewMode === "timeline"
                  ? "bg-hall-glow text-ink font-semibold shadow-sm"
                  : "text-hall-light/70 hover:text-hall-light"
              }`}
            >
              All Events
            </button>
          </div>
        </div>
      </Reveal>

      {viewMode === "tabs" ? (
        <>
          {/* Main Stage Card */}
          <div className="celebration-stage rounded-sm border border-hall-glow/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="celebration-stage__wash" aria-hidden />

            {/* Background chapter watermark */}
            <div
              aria-hidden
              className="absolute left-6 bottom-4 select-none pointer-events-none font-display text-[clamp(6rem,16vw,12rem)] font-light leading-none text-hall-glow/5"
            >
              0{active + 1}
            </div>

            <div className="celebration-stage__content" key={event.name}>
              <div className="flex items-center justify-between gap-2">
                <span className="event-number">0{active + 1}</span>
                <span className="rounded-full border border-hall-glow/40 bg-hall-deep/60 px-3 py-1 font-body text-[0.58rem] tracking-[0.24em] uppercase text-hall-glow">
                  {event.chapter}
                </span>
              </div>

              <p className="font-title text-[0.65rem] tracking-[0.24em] text-hall-glow uppercase">
                {event.day} · {event.date} · {event.time}
              </p>

              <h3 className="mt-2 text-ivory">{event.name}</h3>
              {event.subtitle && (
                <p className="mt-1 font-display text-[1.1rem] italic text-hall-light/80">
                  {event.subtitle}
                </p>
              )}

              {/* Specific timing flow */}
              <div className="mt-4 rounded border border-hall-glow/20 bg-black/30 px-3.5 py-2 text-[0.76rem] text-hall-light/90">
                <span className="font-semibold text-hall-glow uppercase tracking-wider text-[0.58rem] block mb-0.5">
                  Program Schedule
                </span>
                {event.flow}
              </div>

              <p className="event-note">{event.note}</p>

              {/* Colour Code / Dress Palette Highlight */}
              <div className="mt-6 rounded-sm border border-hall-glow/30 bg-[#241708]/80 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-title text-[0.58rem] uppercase tracking-[0.25em] text-hall-glow">
                    Dress Code / Colour Code
                  </span>
                  {event.isRestricted && (
                    <span className="rounded border border-amber-400/50 bg-amber-950/70 px-2 py-0.5 text-[0.54rem] uppercase tracking-wider text-amber-300">
                      Advisory
                    </span>
                  )}
                </div>

                <p className="mt-1.5 font-display text-[1.22rem] font-medium text-ivory">
                  {event.colorCodeText}
                </p>

                {event.restrictedNotes && (
                  <p className="mt-1 text-[0.72rem] text-amber-200/90 italic leading-snug">
                    {event.restrictedNotes}
                  </p>
                )}

                {/* Color Swatch Circles */}
                <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                  {event.colors.map((c) => (
                    <div
                      key={c.name}
                      className="group relative flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 py-1 pl-1 pr-2.5 shadow-sm"
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-white/30 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[0.62rem] text-hall-light/90 tracking-wider">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Spot */}
              <div className="event-venue">
                <span className="block font-title text-[0.56rem] uppercase tracking-[0.28em] text-hall-glow/80 mb-0.5">
                  Venue Location
                </span>
                <p className="text-[0.94rem] font-medium text-ivory">{event.fullVenue}</p>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Selector */}
          <div
            className="celebration-selector grid-cols-4 mt-2"
            role="tablist"
            aria-label="Wedding celebrations"
          >
            {wedding.events.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                <div className="font-title text-[0.64rem] tracking-[0.16em] uppercase">
                  {item.name}
                </div>
                <small className="block text-[0.54rem] text-hall-light/50 tracking-wider mt-1">
                  {item.date.split(" ")[0]} {item.date.split(" ")[1]} · {item.time}
                </small>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Timeline / All Events View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {wedding.events.map((ev, idx) => (
            <Reveal
              key={ev.name}
              delay={idx * 100}
              className="relative overflow-hidden rounded-sm border border-hall-glow/30 bg-[#201407]/90 p-6 shadow-xl backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-2xl text-hall-glow/60">0{idx + 1}</span>
                  <span className="rounded-full border border-hall-glow/30 bg-black/40 px-2.5 py-0.5 text-[0.56rem] tracking-[0.2em] uppercase text-hall-glow">
                    {ev.day} · {ev.time}
                  </span>
                </div>

                <p className="font-title text-[0.62rem] uppercase tracking-[0.22em] text-hall-light/70">
                  {ev.date}
                </p>
                <h3 className="font-display text-2xl text-ivory mt-1">{ev.name}</h3>
                {ev.subtitle && (
                  <p className="font-display text-[0.95rem] italic text-hall-light/80 mt-0.5">
                    {ev.subtitle}
                  </p>
                )}

                <p className="mt-3 text-[0.8rem] text-ivory/75 leading-relaxed font-light">
                  {ev.note}
                </p>

                <div className="mt-3 rounded border border-hall-glow/20 bg-black/30 p-2.5 text-[0.72rem] text-hall-light/85">
                  <span className="font-semibold text-hall-glow uppercase tracking-wider text-[0.54rem] block mb-0.5">
                    Schedule:
                  </span>
                  {ev.flow}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-hall-glow/20">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[0.58rem] uppercase tracking-wider text-hall-glow">
                    Colour Code:
                  </span>
                  {ev.isRestricted && (
                    <span className="text-[0.52rem] text-amber-300 font-medium tracking-wide">
                      Avoid Red/Maroon
                    </span>
                  )}
                </div>
                <p className="text-[0.88rem] font-medium text-ivory mb-2">{ev.colorCodeText}</p>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {ev.colors.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[0.58rem] text-hall-light"
                    >
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[0.74rem] text-hall-light/65">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-hall-glow shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="truncate">{ev.venueSpot} · Kaka Ji Ni Wadi</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
