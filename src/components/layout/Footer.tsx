import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void text-bone-muted">
      <div className="container-edit flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-bone">{profile.name}</p>
          <p className="text-sm">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github.url || "#contact"}
            target={profile.socials.github.isPlaceholder ? undefined : "_blank"}
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-gold"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={profile.socials.linkedin.url || "#contact"}
            target={profile.socials.linkedin.isPlaceholder ? undefined : "_blank"}
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-gold"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href={profile.email ? `mailto:${profile.email}` : "#contact"}
            aria-label="Email"
            className="transition-colors hover:text-gold"
          >
            <Mail size={19} />
          </a>
        </div>

        <p className="text-xs text-bone-muted/70">
          © {year} {profile.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
