export interface SkillGroup {
  category: string;
  items: string[];
}

// Grouped rather than one flat pill wall, so the list reads as a considered
// skill map instead of a keyword dump. Add/remove strings freely — the UI
// re-flows automatically.
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Java", "C++"],
  },
  {
    category: "Machine Learning & AI",
    items: ["Machine Learning", "Computer Vision", "PyTorch", "TensorFlow"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Science", "Power BI", "Excel", "Tableau", "MySQL"],
  },
  {
    category: "Tools & Frameworks",
    items: ["Flask", "Streamlit", "Git", "GitHub"],
  },
  {
    category: "Other",
    items: ["Research", "German"],
  },
];
