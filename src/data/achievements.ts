import outstanding2026 from "../assets/achievements/outstanding-2026.jpg";
import german2025 from "../assets/achievements/german-2025.jpg";
import german2024 from "../assets/achievements/german-2024.jpg";
import outstanding2024 from "../assets/achievements/outstanding-2024.jpg";

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  image?: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    id: "outstanding-student-2026",
    title: "Outstanding Student of the Year — 2026",
    category: "Academic Recognition",
    date: "January 2026",
    image: outstanding2026,
    description:
      "Awarded by Dhaanish Ahmed College of Engineering in recognition of academic excellence, leadership, innovation, and overall achievement.",
  },
  {
    id: "german-achievement-2025",
    title: "Honoured for Achievement in German Language Certification",
    category: "German Language Achievement",
    date: "June 2025",
    image: german2025,
    description:
      "Recognized by the German Consulate General, Chennai and Dhaanish Ahmed College of Engineering for successfully earning the Goethe-Zertifikat A1.",
  },
  {
    id: "best-student-german-2024",
    title: "Best Student of the Year — Excellence in German",
    category: "German Language Achievement",
    date: "January 2024",
    image: german2024,
    description:
      "Honoured by Dhaanish Ahmed College of Engineering for outstanding performance and excellence in German language learning.",
  },
  {
    id: "outstanding-student-2024",
    title: "Outstanding Student of the Year — 2024",
    category: "Academic Recognition",
    date: "January 2024",
    image: outstanding2024,
    description:
      "Awarded by Dhaanish Ahmed College of Engineering in recognition of academic performance, leadership, active participation, and overall excellence.",
  },
];