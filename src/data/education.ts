export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  detail?: string;
  period?: string;
}

export const education: EducationEntry[] = [
  {
    id: "btech",
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Dhaanish Ahmed College of Engineering",
    affiliation: "Affiliated to Anna University",
    detail: "Completed 2026 · CGPA 8.39",
    period: "2022 – 2026",
  },

  {
    id: "hss",
    degree: "Higher Secondary",
    institution: "Technical Higher Secondary School, Perinthalmanna",
    detail: "Completed 2022 · 86.25%",
    period: "2020 – 2022",
  },

  {
    id: "school",
    degree: "SSLC",
    institution: "Government Higher Secondary School, Cherpulassery",
    detail: "Completed 2020 · 93.33%",
    period: "2019 – 2020",
  },
];

export interface LanguageEntry {
  id: string;
  name: string;
  institution: string;
  detail: string;
}

export const languageStudy: LanguageEntry[] = [
  {
    id: "german",
    name: "German A1",
    institution: "Goethe-Institut",
    detail: "A1 completed · A2 in progress",
  },
];