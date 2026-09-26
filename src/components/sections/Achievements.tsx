import { achievements } from "../../data/achievements";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { AchievementCard } from "./AchievementCard";

export function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="bg-void py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.achievements.heading} tone="dark" />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.id} delayMs={i * 60}>
              <AchievementCard achievement={achievement} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
