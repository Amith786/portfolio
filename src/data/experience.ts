import yuvaCertificate from "../assets/certificates/Experience/yuva-internship-certificate.jpeg";
import techoctanetPythonCertificate from "../assets/certificates/Experience/techoctanet-python-certificate.jpeg";
import techoctanetJavaCertificate from "../assets/certificates/Experience/techoctanet-java-certificate.jpeg";
import codsoftCertificate from "../assets/certificates/Experience/codsoft-ai-internship-certificate.jpeg";

export interface ExperienceCertificate {
  title: string;
  image: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  certificates?: ExperienceCertificate[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "research-assistant",
    role: "Research Assistant",
    organization:
      "Research & Development (R&D) Department, Dhaanish Ahmed College of Engineering",
    period: "May 2025 – Present",
    description:
      "Contributing to academic research in Artificial Intelligence and Data Science, including literature review, data analysis, machine learning experimentation, manuscript preparation, research documentation, and development of research-oriented projects.",
    tags: [
      "Research",
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Data Analysis",
      "Research Writing",
    ],
  },
  {
    id: "yuva-intern",
    role: "Junior Data Analyst – Business Analytics with Python",
    organization: "YuvaIntern",
    period: "Aug 2026 – Sep 2026",
    description:
      "Selected for a 6-week remote internship focused on business analytics with Python. Worked with data analysis techniques to explore datasets, identify patterns and trends, and support data-driven business insights.",
    tags: [
      "Python",
      "Data Analysis",
      "Business Analytics",
      "Data Visualization",
    ],
    certificates: [
      {
        title: "YuvaIntern Internship Certificate",
        image: yuvaCertificate,
      },
    ],
  },

  {
    id: "techoctanet",
    role: "Python & Java Development Intern",
    organization: "TechOctanet Services Pvt. Ltd.",
    period: "Feb 2025 – Mar 2025",
    description:
      "Developed applications using Python and Java while strengthening object-oriented programming, debugging, problem-solving, and software development skills.",
    tags: [
      "Python",
      "Java",
      "OOP",
      "Software Development",
    ],
    certificates: [
      {
        title: "TechOctanet Python Development Certificate",
        image: techoctanetPythonCertificate,
      },
      {
        title: "TechOctanet Java Development Certificate",
        image: techoctanetJavaCertificate,
      },
    ],
  },

  {
    id: "codsoft",
    role: "Artificial Intelligence Intern",
    organization: "CodSoft",
    period: "Feb 2024 – Mar 2024",
    description:
      "Worked on Artificial Intelligence and Machine Learning projects using Python, with experience in data preprocessing, feature engineering, exploratory data analysis, model development, and evaluation.",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Data Analysis",
    ],
    certificates: [
      {
        title: "CodSoft Artificial Intelligence Internship Certificate",
        image: codsoftCertificate,
      },
    ],
  },
];