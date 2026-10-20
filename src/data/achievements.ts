import outstanding2026 from "../assets/achievements/outstanding-2026.jpg";
import german2025 from "../assets/achievements/german-2025.jpg";
import german2024 from "../assets/achievements/german-2024.jpg";
import outstanding2024 from "../assets/achievements/outstanding-2024.jpg";

export interface Achievement {
  id: string;
  title: string;
  titleDe: string;
  category: string;
  categoryDe: string;
  date: string;
  image?: string;
  description?: string;
  descriptionDe?: string;
}

export const achievements: Achievement[] = [
  {
    id: "outstanding-student-2026",
    title: "Outstanding Student of the Year — 2026",
    titleDe: "Herausragender Student des Jahres — 2026",
    category: "Academic Excellence",
    categoryDe: "Akademische Auszeichnung",
    date: "January 2026",
    image: outstanding2026,
    description:
      "Awarded by Dhaanish Ahmed College of Engineering for academic performance, leadership, innovation, and outstanding overall achievement.",
    descriptionDe:
      "Ausgezeichnet vom Dhaanish Ahmed College of Engineering für akademische Leistungen, Führungsqualitäten, Innovation und herausragende Gesamtleistungen.",
  },

  {
    id: "german-achievement-2025",
    title: "Outstanding Achievement in German Language Certification",
    titleDe:
      "Auszeichnung für herausragende Leistungen bei der deutschen Sprachzertifizierung",
    category: "German Language Achievement",
    categoryDe: "Auszeichnung für Deutschkenntnisse",
    date: "2025",
    image: german2025,
    description:
      "Awarded by the Consulate General of Germany, Chennai, and Dhaanish Ahmed College of Engineering for successfully obtaining the Goethe-Zertifikat A1.",
    descriptionDe:
      "Ausgezeichnet vom Deutschen Generalkonsulat Chennai und dem Dhaanish Ahmed College of Engineering für das erfolgreiche Erlangen des Goethe-Zertifikats A1.",
  },

  {
    id: "best-student-german-2024",
    title: "Best Student of the Year — Excellence in German",
    titleDe: "Bester Student des Jahres — Exzellenz in Deutsch",
    category: "German Language Achievement",
    categoryDe: "Auszeichnung für Deutschkenntnisse",
    date: "2024",
    image: german2024,
    description:
      "Awarded by Dhaanish Ahmed College of Engineering for outstanding performance and special achievement in learning the German language.",
    descriptionDe:
      "Ausgezeichnet vom Dhaanish Ahmed College of Engineering für herausragende Leistungen und besondere Erfolge beim Erlernen der deutschen Sprache.",
  },

  {
    id: "outstanding-student-2024",
    title: "Outstanding Student of the Year — 2024",
    titleDe: "Herausragender Student des Jahres — 2024",
    category: "Academic Excellence",
    categoryDe: "Akademische Auszeichnung",
    date: "2024",
    image: outstanding2024,
    description:
      "Awarded by Dhaanish Ahmed College of Engineering for academic performance, leadership, active participation, and outstanding overall achievement.",
    descriptionDe:
      "Ausgezeichnet vom Dhaanish Ahmed College of Engineering für akademische Leistungen, Führungsqualitäten, aktive Teilnahme und herausragende Gesamtleistungen.",
  },
];