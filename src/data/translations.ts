// Structural translation dictionary. English is fully implemented; German
// covers navigation, headings and UI chrome so the switcher is meaningful
// without machine-translating long-form bio/project copy (per project brief).
// Extend the `de` branch with real translations as full localisation is needed.

export type Language = "en" | "de";

export interface TranslationShape {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    research: string;
    achievements: string;
    projects: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    downloadCv: string;
    contactMe: string;
  };
  about: { heading: string };
  skills: { heading: string };
  experience: { heading: string };
  education: { heading: string };
  research: {
    heading: string;
    journals: string;
    conferences: string;
  };
  achievements: { heading: string };
  certifications: { heading: string };
  projects: {
    heading: string;
    viewProject: string;
    readMore: string;
    github: string;
    liveDemo: string;
  };
  contact: {
    heading: string;
    subtext: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  footer: { rights: string };
}

export const translations: Record<Language, TranslationShape> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      research: "Research & Publications",
      achievements: "Achievements",
      projects: "Projects",
      contact: "Contact",
    },

    hero: {
      eyebrow: "AI & Data Science · Research · Technology",
      greeting: "Hi, I'm",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
    },

    about: {
      heading: "About Me",
    },

    skills: {
      heading: "Skills",
    },

    experience: {
      heading: "Experience",
    },

    education: {
      heading: "Education",
    },

    research: {
      heading: "Research & Publications",
      journals: "Journals",
      conferences: "Conferences",
    },

    achievements: {
      heading: "Achievements",
    },

    certifications: {
      heading: "Certifications",
    },

    projects: {
      heading: "Projects",
      viewProject: "View Project",
      readMore: "Read More",
      github: "GitHub",
      liveDemo: "Live Demo",
    },

    contact: {
      heading: "Get In Touch",
      subtext:
        "Have a project, research idea, collaboration opportunity or technical discussion? Let's connect.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },

    footer: {
      rights: "All rights reserved.",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      experience: "Erfahrung",
      education: "Ausbildung",
      research: "Forschung & Publikationen",
      achievements: "Erfolge",
      projects: "Projekte",
      contact: "Kontakt",
    },

    hero: {
      eyebrow: "KI & Data Science · Forschung · Technologie",
      greeting: "Hallo, ich bin",
      downloadCv: "Lebenslauf herunterladen",
      contactMe: "Kontakt aufnehmen",
    },

    about: {
      heading: "Über mich",
    },

    skills: {
      heading: "Fähigkeiten",
    },

    experience: {
      heading: "Erfahrung",
    },

    education: {
      heading: "Ausbildung",
    },

    research: {
      heading: "Forschung & Publikationen",
      journals: "Fachzeitschriften",
      conferences: "Konferenzen",
    },

    achievements: {
      heading: "Erfolge",
    },

    certifications: {
      heading: "Zertifizierungen",
    },

    projects: {
      heading: "Projekte",
      viewProject: "Projekt ansehen",
      readMore: "Mehr erfahren",
      github: "GitHub",
      liveDemo: "Live-Demo",
    },

    contact: {
      heading: "Kontakt aufnehmen",
      subtext:
        "Haben Sie ein Projekt, eine Forschungsidee oder eine Kooperationsmöglichkeit? Lassen Sie uns sprechen.",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      send: "Nachricht senden",
    },

    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
};