import { skillGroups } from "../../data/skills";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-void py-24 lg:py-32">
      <div className="container-edit">

        {/* =====================================================
            MAIN ABOUT GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <div>
            {/* About heading */}
            <SectionHeading
              title={t.about.heading}
              tone="dark"
            />

            {/* About content */}
            <div className="mt-8">
              <Reveal>
                <h3 className="whitespace-pre-line font-display text-3xl leading-tight text-bone sm:text-4xl lg:text-[2.7rem]">
                  {profile.aboutHeadline}
                </h3>
              </Reveal>

              <div className="mt-8 space-y-5">
                {profile.aboutParagraphs.map((para, i) => (
                  <Reveal key={i} delayMs={i * 80}>
                    <p className="leading-relaxed text-bone-muted">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <Reveal delayMs={260}>
              <div className="mt-10 border-t border-bone/10 pt-7">
                <div className="flex items-center gap-4">
                  <p className="eyebrow text-gold">
                    Focus Areas
                  </p>

                  <div className="h-px flex-1 bg-bone/10" />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Artificial Intelligence
                    </p>
                  </div>

                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Data Science & Analytics
                    </p>
                  </div>

                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Machine Learning
                    </p>
                  </div>

                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Computer Vision
                    </p>
                  </div>

                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Research & Applied AI
                    </p>
                  </div>

                  <div className="rounded-xl border border-bone/10 bg-void-soft/40 px-4 py-3 transition-colors hover:border-gold/30">
                    <p className="text-sm text-bone">
                      Python Development
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}
          <div>

            {/* Profile photo */}
            <Reveal>
              <div className="flex justify-center lg:justify-start">
                <div className="relative h-[330px] w-[265px] overflow-hidden rounded-[2rem] border border-gold/40 bg-void-soft shadow-gold-glow sm:h-[360px] sm:w-[290px]">
                  <img
                    src={profile.aboutPhoto.src}
                    alt={profile.aboutPhoto.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* =================================================
                SKILLS
            ================================================= */}
            <div
              id="skills"
              className="mt-10 scroll-mt-24"
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <p className="eyebrow text-gold">
                    {t.skills.heading}
                  </p>

                  <div className="h-px flex-1 bg-bone/10" />
                </div>
              </Reveal>

              {/* Skill cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skillGroups.map((group, gi) => (
                  <Reveal
                    key={group.category}
                    delayMs={gi * 70}
                  >
                    <div className="h-full rounded-2xl border border-bone/10 bg-void-soft/40 p-4 transition-all duration-300 hover:border-gold/30 hover:shadow-gold-glow">
                      <p className="text-xs font-medium tracking-wide text-bone-muted/70">
                        {group.category}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="tag-pill border-bone/20 text-bone transition-colors hover:border-gold hover:text-gold-bright"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}