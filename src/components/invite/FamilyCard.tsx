import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function FamilyCard() {
  return (
    <section className="relative px-6 py-16 sm:py-24" aria-labelledby="family-blessings-title">
      <div className="mx-auto max-w-[48rem] text-center">
        <Reveal>
          <p className="section-kicker !text-[#ffd982] font-semibold">With the blessings of our elders</p>
          <h2
            id="family-blessings-title"
            className="mt-3 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-light text-white"
          >
            Two Families · One Celebration
          </h2>
          <div className="rule-gold mx-auto my-6 w-28" />
          <p className="mx-auto max-w-[32rem] font-display text-[1.05rem] italic text-[#f5ebd7] leading-relaxed">
            {wedding.invitationLine}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {/* Bride's Side */}
          <Reveal
            delay={100}
            className="relative overflow-hidden rounded-sm border border-hall-glow/35 bg-[#1c1105]/92 p-7 shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-hall-glow/15 to-transparent pointer-events-none" />
            <span className="font-title text-[0.62rem] uppercase tracking-[0.32em] text-[#ffd982] block font-medium">
              Bride's Family
            </span>
            <h3 className="mt-2 font-display text-[2.1rem] font-normal gold-text leading-tight drop-shadow-sm">
              {wedding.brideFullName}
            </h3>
            <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-[#ffd885] font-medium">
              Daughter of
            </p>
            <p className="mt-1.5 font-display text-[1.38rem] text-white font-light">
              {wedding.brideParents.combined}
            </p>
            <div className="mt-4 pt-3.5 border-t border-hall-glow/20 text-[0.76rem] text-[#f7e9c6] space-y-1">
              <span className="block text-[0.56rem] uppercase tracking-[0.2em] text-[#ffd982] font-title font-medium">
                Blessings of Elders & Grandparents
              </span>
              <p className="leading-snug text-white/95">Mr. Satyapal Arora & Mrs. Krishana Arora</p>
              <p className="leading-snug text-[#f7e9c6]/80">
                Mr. (Late) Vijay Hadkar & Mrs. (Late) Vaijayanti Hadkar
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-hall-glow/25 flex items-center gap-2 text-[0.74rem] text-[#ffd885] font-light">
              <span className="h-1.5 w-1.5 rounded-full bg-hall-glow" />
              <span>Arora Family cordially welcomes you</span>
            </div>
          </Reveal>

          {/* Groom's Side */}
          <Reveal
            delay={200}
            className="relative overflow-hidden rounded-sm border border-hall-glow/35 bg-[#1c1105]/92 p-7 shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-hall-glow/15 to-transparent pointer-events-none" />
            <span className="font-title text-[0.62rem] uppercase tracking-[0.32em] text-[#ffd982] block font-medium">
              Groom's Family
            </span>
            <h3 className="mt-2 font-display text-[2.1rem] font-normal gold-text leading-tight drop-shadow-sm">
              {wedding.groomFullName}
            </h3>
            <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-[#ffd885] font-medium">
              Son of
            </p>
            <p className="mt-1.5 font-display text-[1.38rem] text-white font-light">
              {wedding.groomParents.combined}
            </p>
            <div className="mt-5 pt-4 border-t border-hall-glow/25 flex items-center gap-2 text-[0.74rem] text-[#ffd885] font-light">
              <span className="h-1.5 w-1.5 rounded-full bg-hall-glow" />
              <span>Muthukumar Family warmly awaits you</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
