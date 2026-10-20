export type Language = "en" | "de";

export interface TranslationShape {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    research: string;
    achievements: string;
    certifications: string;
    projects: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    greeting: string;
    downloadCv: string;
    contactMe: string;
    scroll: string;
  };

  about: {
    heading: string;
    focusAreas: string;
    skills: string;
  };

  skills: {
    heading: string;
  };

  experience: {
    heading: string;
    present: string;
    viewCertificate: string;
    close: string;
  };

  education: {
    heading: string;
    completed: string;
    languageStudy: string;
    inProgress: string;
  };

  research: {
    heading: string;
    journals: string;
    conferences: string;
    author: string;
    presenter: string;
    coAuthor: string;
    authorAndPresenter: string;
    withEditor: string;
    peerReview: string;
    published: string;
    researchPaperPresented: string;
    viewPaper: string;
    viewCertificate: string;
    close: string;
  };

  achievements: {
    heading: string;
    viewCertificate: string;
    close: string;
  };

  certifications: {
    heading: string;
    viewCertificate: string;
    credential: string;
    issued: string;
    close: string;
  };

  projects: {
    heading: string;
    viewProject: string;
    readMore: string;
    github: string;
    liveDemo: string;
    close: string;
  };

  contact: {
    heading: string;
    subtext: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    location: string;
  };

  footer: {
    rights: string;
  };
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
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    },

    hero: {
      eyebrow: "AI & Data Science · Research · Technology",
      greeting: "Hi, I'm",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      scroll: "Scroll",
    },

    about: {
      heading: "About Me",
      focusAreas: "Focus Areas",
      skills: "Skills",
    },
    skills: {
      heading: "Skills",
    },

    experience: {
      heading: "Experience",
      present: "Present",
      viewCertificate: "View Certificate",
      close: "Close",
    },

    education: {
      heading: "Education",
      completed: "Completed",
      languageStudy: "Language Study",
      inProgress: "In Progress",
    },

    research: {
      heading: "Research & Publications",
      journals: "Journals",
      conferences: "Conferences",
      author: "Author",
      presenter: "Presenter",
      coAuthor: "Co-author",
      authorAndPresenter: "Author & Presenter",
      withEditor: "With Editor",
      peerReview: "Peer Review",
      published: "Published",
      researchPaperPresented: "Research Paper Presented",
      viewPaper: "View Paper",
      viewCertificate: "View Certificate",
      close: "Close",
    },

    achievements: {
      heading: "Achievements",
      viewCertificate: "View Certificate",
      close: "Close",
    },

    certifications: {
      heading: "Certifications",
      viewCertificate: "View Certificate",
      credential: "Credential",
      issued: "Issued",
      close: "Close",
    },

    projects: {
      heading: "Projects",
      viewProject: "View Project",
      readMore: "Read More",
      github: "GitHub",
      liveDemo: "Live Demo",
      close: "Close",
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
      location: "Kerala, India",
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
      certifications: "Zertifizierungen",
      projects: "Projekte",
      contact: "Kontakt",
    },

    hero: {
      eyebrow: "KI & Data Science · Forschung · Technologie",
      greeting: "Hallo, ich bin",
      downloadCv: "Lebenslauf herunterladen",
      contactMe: "Kontakt aufnehmen",
      scroll: "Scrollen",
    },

    about: {
      heading: "Über mich",
      focusAreas: "Schwerpunkte",
      skills: "Fähigkeiten",
    },

    skills: {
      heading: "Fähigkeiten",
    },

    experience: {
      heading: "Berufserfahrung",
      present: "Heute",
      viewCertificate: "Zertifikat ansehen",
      close: "Schließen",
    },

    education: {
      heading: "Ausbildung",
      completed: "Abgeschlossen",
      languageStudy: "Sprachkenntnisse",
      inProgress: "In Bearbeitung",
    },

    research: {
      heading: "Forschung & Publikationen",
      journals: "Fachzeitschriften",
      conferences: "Konferenzen",
      author: "Autor",
      presenter: "Präsentator",
      coAuthor: "Co-Autor",
      authorAndPresenter: "Autor & Präsentator",
      withEditor: "Bei der Redaktion",
      peerReview: "Begutachtung",
      published: "Veröffentlicht",
      researchPaperPresented: "Forschungsarbeit präsentiert",
      viewPaper: "Publikation ansehen",
      viewCertificate: "Zertifikat ansehen",
      close: "Schließen",
    },

    achievements: {
      heading: "Erfolge",
      viewCertificate: "Zertifikat ansehen",
      close: "Schließen",
    },

    certifications: {
      heading: "Zertifizierungen",
      viewCertificate: "Zertifikat ansehen",
      credential: "Nachweis",
      issued: "Ausgestellt",
      close: "Schließen",
    },

    projects: {
      heading: "Projekte",
      viewProject: "Projekt ansehen",
      readMore: "Mehr erfahren",
      github: "GitHub",
      liveDemo: "Live-Demo",
      close: "Schließen",
    },

    contact: {
      heading: "Kontakt aufnehmen",
      subtext:
        "Haben Sie ein Projekt, eine Forschungsidee, eine Kooperationsmöglichkeit oder möchten Sie sich über technische Themen austauschen? Lassen Sie uns in Kontakt treten.",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      send: "Nachricht senden",
      location: "Kerala, Indien",
    },

    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
};