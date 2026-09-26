import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type Status = "idle" | "sent";

const inputClasses =
  "w-full rounded-lg border border-bone/20 bg-transparent px-4 py-3 text-bone placeholder:text-bone-muted/50 outline-none transition-colors focus:border-gold focus:shadow-gold-glow";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipient = profile.email;

    const subject =
      form.subject.trim() || `Portfolio Contact from ${form.name}`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setStatus("sent");
  };

  return (
    <section id="contact" className="bg-void py-24 lg:py-32">
      <div className="container-edit grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Contact Information */}
        <div>
          <SectionHeading title={t.contact.heading} tone="dark" />

          <Reveal delayMs={80}>
            <p className="mt-6 max-w-md leading-relaxed text-bone-muted">
              {t.contact.subtext}
            </p>
          </Reveal>

          <Reveal delayMs={140} className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-bone-muted transition-colors hover:text-gold-bright"
            >
              <Mail size={17} />
              {profile.email}
            </a>

            <a
              href={profile.socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-bone-muted transition-colors hover:text-gold-bright"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>

            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-bone-muted transition-colors hover:text-gold-bright"
            >
              <GithubIcon size={17} />
              GitHub
            </a>

            <p className="flex items-center gap-3 text-bone-muted">
              <MapPin size={17} />
              {profile.location}
            </p>
          </Reveal>
        </div>

        {/* Contact Form */}
        <Reveal delayMs={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-bone/15 bg-void-soft p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs text-bone-muted"
                >
                  {t.contact.name}
                </label>

                <input
                  id="contact-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs text-bone-muted"
                >
                  {t.contact.email}
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-xs text-bone-muted"
              >
                {t.contact.subject}
              </label>

              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                className={inputClasses}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs text-bone-muted"
              >
                {t.contact.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-wide text-void transition-colors hover:bg-gold-bright"
            >
              <Send size={15} />
              {t.contact.send}
            </button>

            {status === "sent" && (
              <p role="status" className="mt-4 text-sm text-gold-bright">
                Your email client should open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}