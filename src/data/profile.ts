// Central profile data. Update this file to change name, tagline, bio,
// contact details and social links across the entire site.

import heroImage from "../assets/profile/hero.jpg";
import profileImage from "../assets/profile/profile.jpg";

export interface SocialLink {
  label: string;
  url: string;
  /** Set to true when the URL has not been added yet. */
  isPlaceholder: boolean;
}

export const profile = {
  name: "Amith Anand",
  initials: "AA",

  role: "AI & Data Science",
  roleDe: "KI & Data Science",

  tagline: "AI & Data Science · Research · Technology",
  taglineDe: "KI & Data Science · Forschung · Technologie",

  location: "Kerala, India",
  locationDe: "Kerala, Indien",

  heroHeadingLines: ["Hi, I'm", "Amith Anand"],
  heroHeadingLinesDe: ["Hallo, ich bin", "Amith Anand"],

  heroSubtext:
    "B.Tech graduate in Artificial Intelligence and Data Science, focused on Data Science, Artificial Intelligence, Machine Learning, Computer Vision, and research-driven applications. I build data-centric projects and explore practical AI solutions through academic research.",

  heroSubtextDe:
    "B.Tech-Absolvent in Künstlicher Intelligenz und Data Science mit Schwerpunkt auf Data Science, Künstlicher Intelligenz, Machine Learning, Computer Vision und forschungsorientierten Anwendungen. Ich entwickle datengetriebene Projekte und erforsche praxisnahe KI-Lösungen im Rahmen wissenschaftlicher Forschung.",

  aboutHeadline: "Building with data,\nintelligence & purpose.",

  aboutHeadlineDe: "Mit Daten,\nIntelligenz & Zielstrebigkeit gestalten.",

  aboutParagraphs: [
    "Amith is a B.Tech graduate in Artificial Intelligence and Data Science from Dhaanish Ahmed College of Engineering, affiliated to Anna University.",

    "His work sits at the intersection of applied machine learning and research — from satellite image fusion to forecasting models — with a focus on turning data into dependable, well-evaluated systems rather than one-off experiments.",

    "Interests span data science, machine learning, artificial intelligence, computer vision, data analytics, research and Python-driven AI applications.",
  ],

  aboutParagraphsDe: [
    "Amith ist Absolvent eines B.Tech-Studiengangs in Künstlicher Intelligenz und Data Science am Dhaanish Ahmed College of Engineering, der Anna University angeschlossen ist.",

    "Seine Arbeit verbindet angewandtes maschinelles Lernen mit wissenschaftlicher Forschung – von der Fusion von Satellitenbildern bis hin zu Prognosemodellen. Dabei liegt der Fokus darauf, zuverlässige und gut evaluierte Systeme zu entwickeln, anstatt nur experimentelle Lösungen umzusetzen.",

    "Seine Interessen umfassen Data Science, Machine Learning, Künstliche Intelligenz, Computer Vision, Datenanalyse, Forschung und Python-basierte KI-Anwendungen.",
  ],

  // Hero photo
  photo: {
    src: heroImage,
    alt: "Amith Anand — AI and Data Science",
    altDe: "Amith Anand — KI und Data Science",
  },

  // About section photo
  aboutPhoto: {
    src: profileImage,
    alt: "Amith Anand",
    altDe: "Amith Anand",
  },

  // CV
  // GitHub Pages deployment path
  cvUrl: "/portfolio/Amith-Anand-Resume.pdf",

  // Contact email
  email: "anandamith378@gmail.com",

  // Social links
  socials: {
    github: {
      label: "GitHub",
      url: "https://github.com/Amith786",
      isPlaceholder: false,
    } as SocialLink,

    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/amith-anand/",
      isPlaceholder: false,
    } as SocialLink,

    email: {
      label: "Email",
      url: "mailto:anandamith378@gmail.com",
      isPlaceholder: false,
    } as SocialLink,
  },
};

export type Profile = typeof profile;