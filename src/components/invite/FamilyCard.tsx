import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function FamilyCard() {
  return (
    <section className="relative px-6 py-16 sm:py-24" aria-labelledby="family-blessings-title">
      <div className="mx-auto max-w-[48rem] text-center">
        <Reveal>
          <p className="section-kicker">With the blessings of our elders</p>
          <h2
            id="family-blessings-title"
            className="mt-3 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-light text-ivory"
          >
            Two Families · One Celebration
          </h2>
          <div className="rule-gold mx-auto my-6 w-28" />
          <p className="mx-auto max-w-[32rem] font-display text-[1.05rem] italic text-ivory/80 leading-relaxed">
            {wedding.invitationLine}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {/* Bride's Side */}
          <Reveal
            delay={100}
            className="relative overflow-hidden rounded-sm border border-hall-glow/30 bg-[#231608]/70 p-7 shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-hall-glow/15 to-transparent pointer-events-none" />
            <span className="font-title text-[0.62rem] uppercase tracking-[0.32em] text-hall-glow block">
              Bride's Family
            </span>
            <h3 className="mt-2 font-display text-[2.1rem] font-normal gold-text leading-tight">
              {wedding.brideFullName}
            </h3>
            <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-hall-light/60">
              Daughter of
            </p>
            <p className="mt-2 font-display text-[1.35rem] text-ivory font-light">
              {wedding.brideParents.combined}
            </p>
            <div className="mt-3.5 pt-3 border-t border-hall-glow/15 text-[0.72rem] text-hall-light/80 space-y-1">
              <span className="block text-[0.54rem] uppercase tracking-[0.2em] text-hall-glow/90 font-title">
                Blessings of Elders & Grandparents
              </span>
              <p className="leading-snug">Mr. Satyapal Arora & Mrs. Krishana Arora</p>
              <p className="leading-snug text-hall-light/70">
                Mr. (Late) Vijay Hadkar & Mrs. (Late) Vaijayanti Hadkar
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-hall-glow/20 flex items-center gap-2 text-[0.74rem] text-hall-light/70 font-light">
              <span className="h-1.5 w-1.5 rounded-full bg-hall-glow" />
              <span>Arora Family cordially welcomes you</span>
            </div>
          </Reveal>

          {/* Groom's Side */}
          <Reveal
            delay={200}
            className="relative overflow-hidden rounded-sm border border-hall-glow/30 bg-[#231608]/70 p-7 shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-hall-glow/15 to-transparent pointer-events-none" />
            <span className="font-title text-[0.62rem] uppercase tracking-[0.32em] text-hall-glow block">
              Groom's Family
            </span>
            <h3 className="mt-2 font-display text-[2.1rem] font-normal gold-text leading-tight">
              {wedding.groomFullName}
            </h3>
            <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-hall-light/60">
              Son of
            </p>
            <p className="mt-2 font-display text-[1.35rem] text-ivory font-light">
              {wedding.groomParents.combined}
            </p>
            <div className="mt-5 pt-4 border-t border-hall-glow/20 flex items-center gap-2 text-[0.74rem] text-hall-light/70 font-light">
              <span className="h-1.5 w-1.5 rounded-full bg-hall-glow" />
              <span>Muthukumar Family warmly awaits you</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
