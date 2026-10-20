import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const isGerman = language === "de";

  const githubLabel = isGerman
    ? "GitHub-Profil"
    : "GitHub profile";

  const linkedinLabel = isGerman
    ? "LinkedIn-Profil"
    : "LinkedIn profile";

  const emailLabel = isGerman
    ? "E-Mail senden"
    : "Send email";

  return (
    <footer className="bg-void text-bone-muted">
      <div className="container-edit flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        {/* Identity */}
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-bone">
            {profile.name}
          </p>

          <p className="text-sm">
            {profile.role}
          </p>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center gap-5"
          aria-label={isGerman ? "Social Media" : "Social links"}
        >
          {!profile.socials.github.isPlaceholder &&
            profile.socials.github.url && (
              <a
                href={profile.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={githubLabel}
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
              >
                <GithubIcon size={19} />
              </a>
            )}

          {!profile.socials.linkedin.isPlaceholder &&
            profile.socials.linkedin.url && (
              <a
                href={profile.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinLabel}
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
              >
                <LinkedinIcon size={19} />
              </a>
            )}

          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label={emailLabel}
              className="transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
            >
              <Mail size={19} />
            </a>
          )}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-bone-muted/70 sm:text-right">
          © {year} {profile.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}