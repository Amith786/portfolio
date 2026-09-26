import { useState } from "react";
import { Award } from "lucide-react";
import type { Achievement } from "../../data/achievements";
import { Modal } from "../ui/Modal";
import { PlaceholderImage } from "../ui/PlaceholderImage";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const [open, setOpen] = useState(false);
  const titleId = `achievement-${achievement.id}-title`;
  const hasImage = Boolean(achievement.image);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="card-glow group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-bone/10 text-left hover:border-gold/50 hover:shadow-gold-glow"
      >
        {hasImage ? (
          <img
            src={achievement.image}
            alt={achievement.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage icon={Award} label={achievement.category} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="eyebrow text-gold-bright">{achievement.category}</p>
          <h3 className="mt-1 font-display text-lg leading-snug text-bone">
            {achievement.title}
          </h3>
          {achievement.date && <p className="mt-1 text-xs text-bone-muted">{achievement.date}</p>}
        </div>
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)} labelledBy={titleId} variant="lightbox">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
          {hasImage ? (
            <img
              src={achievement.image}
              alt={achievement.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <PlaceholderImage icon={Award} label={achievement.category} className="h-full w-full" />
          )}
        </div>
        <p className="eyebrow mt-6 text-gold">{achievement.category}</p>
        <h3 id={titleId} className="mt-2 font-display text-2xl text-bone">
          {achievement.title}
        </h3>
        {achievement.date && <p className="mt-1 text-sm text-bone-muted">{achievement.date}</p>}
        {achievement.description && (
          <p className="mt-4 leading-relaxed text-bone-muted">{achievement.description}</p>
        )}
      </Modal>
    </>
  );
}
