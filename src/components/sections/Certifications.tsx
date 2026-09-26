import { certifications } from "../../data/certifications";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.certifications.heading} tone="light" />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delayMs={i * 60}>
              <CertificationCard certification={cert} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
