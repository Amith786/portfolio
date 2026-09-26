import aiToolsClaude from "../assets/certificates/ai-tools-claude-workshop.jpeg";
import aiFoundation from "../assets/certificates/artificial-intelligence-foundation.jpeg";

import awsCloudEssential from "../assets/certificates/aws-cloud-essential.jpeg";
import awsCloudEssentialbadge from "../assets/certificates/aws-cloud-essential badge.jpeg";

import awsCloudFoundation from "../assets/certificates/aws-cloud-foundation.jpeg";
import awsCloudFoundationbadge from "../assets/certificates/aws-cloud-foundation badge.jpeg";

import ethicsOfAi from "../assets/certificates/ethics-of-ai.jpeg";
import goetheA1 from "../assets/certificates/goethe-a1.jpeg";
import goldmanSachsSoftware from "../assets/certificates/goldman-sachs-software-engineering.jpeg";
import googleDataAnalysisR from "../assets/certificates/google-data-analysis-r.jpeg";
import googleDataVisualization from "../assets/certificates/google-data-visualization.jpeg";
import hackerrankSql from "../assets/certificates/hackerrank-sql-basic.jpeg";
import hpDataScience from "../assets/certificates/hp-life-data-science-analytics.jpeg";
import iirsAiMlGeodata from "../assets/certificates/iirs-ai-ml-geodata.jpeg";
import microsoftExcel from "../assets/certificates/microsoft-excel-data-analysis.jpeg";
import powerBi from "../assets/certificates/microsoft-power-bi.jpeg";
import mindlusterDataScienceAi from "../assets/certificates/mindluster-data-science-ai.jpeg";
import modernAi from "../assets/certificates/modern-ai.jpeg";
import mongodbBasics from "../assets/certificates/mongodb-basics-for-students.jpeg";
import nptelJava from "../assets/certificates/nptel-java-programming.jpeg";
import rpaFoundation from "../assets/certificates/rpa-foundation.jpeg";
import simplilearnMachineLearning from "../assets/certificates/simplilearn-machine-learning.jpeg";
import tataGenaiDataAnalytics from "../assets/certificates/tata-genai-data-analytics.jpeg";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  images?: string[];
  credentialUrl?: string;
  skills?: string[];
  description?: string;
  expired?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "iirs-ai-ml-geodata",
    name: "AI/ML for Geodata Analytics",
    issuer:
      "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)",
    date: "September 2026",
    credentialId: "2026234311998",
    image: iirsAiMlGeodata,
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Geospatial Analytics",
      "Remote Sensing",
      "Geodata Analytics",
    ],
    description:
      "Successfully completed the online course AI/ML for Geodata Analytics conducted by IIRS, ISRO, with a focus on applying AI and machine learning techniques to geospatial and remote sensing data.",
  },

  {
    id: "tata-genai-data-analytics",
    name: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "August 2026",
    credentialId: "6a6c29ae1ebe2d46f880eb05",
    image: tataGenaiDataAnalytics,
    skills: [
      "Data Analytics",
      "Data Analysis",
      "Generative AI",
      "Business Analytics",
    ],
  },

  {
    id: "ai-tools-claude",
    name: "AI Tools & Claude Workshop",
    issuer: "Be10x",
    date: "August 2026",
    credentialId: "0270772f-3809-4400-b29b-1e1c61cd09971661059",
    image: aiToolsClaude,
    skills: [
      "AI",
      "Claude",
      "AI Tools",
      "Data Analysis",
      "Coding",
      "Debugging",
    ],
  },

  {
    id: "hackerrank-sql",
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    credentialId: "FBA25B18E312",
    image: hackerrankSql,
    credentialUrl:
      "https://www.hackerrank.com/certificates/fba25b18e312",
    skills: ["SQL"],
  },

  {
    id: "power-bi",
    name: "Basics of Microsoft Power BI",
    issuer:
      "UniAthena (in partnership with Cambridge International Qualifications, UK)",
    date: "January 2026",
    credentialId: "5285-2757-8774",
    image: powerBi,
    skills: [
      "Microsoft Power BI",
      "Data Visualization",
      "Dashboards",
      "Business Intelligence",
    ],
  },

  {
    id: "rpa-foundation",
    name: "RPA Foundation",
    issuer: "FutureSkills Prime",
    date: "November 2025",
    credentialId: "TNext_FS_24_RP_G_0298",
    image: rpaFoundation,
    skills: ["Robotic Process Automation"],
  },

  {
    id: "ai-foundation",
    name: "Artificial Intelligence – Foundation",
    issuer: "FutureSkills Prime",
    date: "November 2025",
    credentialId: "TNext_FS_24_AI_G_1596",
    image: aiFoundation,
    skills: ["Artificial Intelligence"],
  },

  {
    id: "modern-ai",
    name: "Modern AI",
    issuer: "FutureSkills Prime",
    date: "November 2025",
    credentialId: "TNext_FS_24_MA_G_0297",
    image: modernAi,
    skills: ["Artificial Intelligence"],
  },

  {
    id: "mongodb-basics",
    name: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "August 19, 2025",
    image: mongodbBasics,
    skills: [
      "MongoDB",
      "NoSQL",
      "CRUD Operations",
      "Data Modeling",
      "Database Fundamentals",
    ],
    description:
      "Completed the MongoDB Basics for Students course, covering NoSQL databases, CRUD operations, data modeling, and MongoDB fundamentals.",
  },

  {
    id: "goethe-a1",
    name: "Goethe-Zertifikat A1: Start Deutsch 1",
    issuer: "Goethe-Institut Indien",
    date: "April 2025",
    credentialId: "1420-ASA1-0002252692",
    image: goetheA1,
    skills: ["German"],
  },

  {
    id: "ethics-of-ai",
    name: "Ethics of AI",
    issuer: "University of Helsinki",
    date: "April 22, 2025",
    image: ethicsOfAi,
    skills: [
      "AI Ethics",
      "Artificial Intelligence",
      "Algorithmic Bias",
      "Transparency",
      "Data Privacy",
      "Accountability",
    ],
    description:
      "Completed the 2 ECTS Ethics of AI online course covering ethical challenges and societal implications of artificial intelligence.",
  },

  {
    id: "aws-cloud-foundation",
    name: "Cloud Foundation Badge",
    issuer: "AWS Training and Certifications",
    date: "November 2024",
    image: awsCloudFoundation,
    images: [
      awsCloudFoundation,
      awsCloudFoundationbadge,
    ],
    skills: ["AWS", "Cloud Computing"],
  },

  {
    id: "aws-cloud-essential",
    name: "Cloud Essential Badge",
    issuer: "Amazon Web Services (AWS)",
    date: "November 2024",
    image: awsCloudEssential,
    images: [
      awsCloudEssential,
      awsCloudEssentialbadge,
    ],
    skills: ["AWS", "Cloud Computing"],
  },

  {
    id: "goldman-sachs-software",
    name: "Goldman Sachs - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "November 2024",
    credentialId: "64H5hHFWrHsERKgzX",
    image: goldmanSachsSoftware,
    skills: [
      "Software Engineering",
      "Programming",
      "Problem Solving",
    ],
  },

  {
    id: "google-data-analysis-r",
    name: "Data Analysis with R Programming",
    issuer: "Google",
    date: "October 2024",
    credentialId: "LQWF6FND71A6",
    image: googleDataAnalysisR,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/LQWF6FND71A6",
    skills: ["R Programming", "Data Analysis"],
  },

  {
    id: "hp-data-science",
    name: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "October 2024",
    credentialId: "aebe016b-7c5d-4fdd-b944-0cabb8c77526",
    image: hpDataScience,
    skills: ["Data Analysis", "Data Science"],
    expired: true,
  },

  {
    id: "google-visualization",
    name: "Share Data Through the Art of Visualization",
    issuer: "Google",
    date: "September 2024",
    credentialId: "HCRDQ0J7YQ2F",
    image: googleDataVisualization,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/HCRDQ0J7YQ2F",
    skills: ["Tableau", "Data Visualization"],
  },

  {
    id: "microsoft-excel",
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft",
    date: "September 2024",
    credentialId: "ZRCAQMY2SJRM",
    image: microsoftExcel,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/ZRCAQMY2SJRM",
    skills: ["Microsoft Excel", "Data Analysis"],
  },

  {
    id: "data-science-ai-mindluster",
    name: "Data Science and Artificial Intelligence",
    issuer: "MindLuster",
    date: "April 2024",
    credentialId: "17589647425",
    image: mindlusterDataScienceAi,
    skills: ["Data Science", "Artificial Intelligence"],
  },

  {
    id: "machine-learning-simplilearn",
    name: "Machine Learning",
    issuer: "Simplilearn",
    date: "May 2024",
    credentialId: "5570840",
    image: simplilearnMachineLearning,
    skills: ["Machine Learning"],
  },

  {
    id: "nptel-java",
    name: "Introduction to Programming Using Java",
    issuer: "NPTEL",
    date: "October 2023",
    credentialId: "NPTEL23CS74S43354227",
    image: nptelJava,
    skills: ["Java"],
  },
];