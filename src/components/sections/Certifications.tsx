import { certifications } from "../../data/certifications";
import { useLanguage } from "../../lib/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="scroll-mt-24 overflow-hidden bg-paper py-24 lg:py-32"
    >
      <div className="container-edit">
        <SectionHeading
          title={t.certifications.heading}
          tone="light"
        />

        <div className="relative mt-16">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-24"
            aria-hidden="true"
          />

          {/* Right fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-24"
            aria-hidden="true"
          />

          <div className="cert-marquee">
            <div className="cert-marquee-track">
              {/* =====================================================
                  ORIGINAL SET — INTERACTIVE
                  ===================================================== */}
              <div className="cert-marquee-group">
                {certifications.map((certification) => (
                  <div
                    key={`primary-${certification.id}`}
                    className="cert-marquee-card"
                  >
                    <CertificationCard
                      certification={certification}
                    />
                  </div>
                ))}
              </div>

              {/* =====================================================
                  DUPLICATE SET — VISUAL ONLY
                  ===================================================== */}
              <div
                className="cert-marquee-group pointer-events-none select-none"
                aria-hidden="true"
              >
                {certifications.map((certification) => (
                  <div
                    key={`duplicate-${certification.id}`}
                    className="cert-marquee-card"
                    tabIndex={-1}
                  >
                    <CertificationCard
                      certification={certification}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}