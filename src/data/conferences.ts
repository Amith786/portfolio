import icndiaCertificate from "../assets/conferences/icndia-2026.jpeg";
import seisaeCertificate from "../assets/conferences/seisae-2026.jpeg";
import iceticsCertificate from "../assets/conferences/icetics-2026.jpg";
import cmssCertificate from "../assets/conferences/CMSS-2026.jpg";

export type ConferenceCategory = "presenter" | "author";

export interface ConferenceEntry {
  id: string;
  category: ConferenceCategory;
  conferenceTitle: string;
  paperTitle: string;
  authors?: string[];
  role: string;
  venue: string;
  date: string;
  location: string;
  presentationStatus: string;
  certificateUrl?: string;
  paperUrl?: string;
}

export const conferences: ConferenceEntry[] = [
  {
    id: "icetics-2026-presenter",
    category: "presenter",
    conferenceTitle:
      "IEEE International Conference on Emerging Trends in Information, Communication & Systems (ICETICS-2026)",
    paperTitle:
      "Pricing in Silence: Modeling Latent Customer Dissatisfaction Through Behavioral Inaction Patterns for Proactive Churn Management",
    role: "Presenter",
    venue: "IEEE ICETICS-2026",
    date: "10–11 July 2026",
    location:
      "Bansal Institute of Science and Technology, Bhopal",
    presentationStatus: "Research Paper Presented",
    certificateUrl: iceticsCertificate,
  },

  {
    id: "icndia-2026-presenter",
    category: "presenter",
    conferenceTitle:
      "IEEE International Conference on Nexus of Digitalization, Intelligence and Applications (ICNDIA 2026)",
    paperTitle:
      "Causal Machine Learning for Infrastructure Investment Efficiency in Environmental Management: A Double Machine Learning and Causal Forest Approach",
    role: "Presenter",
    venue: "IEEE ICNDIA 2026",
    date: "18–19 September 2026",
    location:
      "Army Institute of Technology, Dighi, Pune, India",
    presentationStatus: "Research Paper Presented",
    certificateUrl: icndiaCertificate,
  },

  {
    id: "cmss-2026-climate-risk",
    category: "author",
    conferenceTitle:
      "2026 International Conference on Modern Sustainable Systems (CMSS)",
    paperTitle:
      "Self-Calibrating Hybrid Bayesian-Deep Learning Framework for Long-Horizon Climate Risk Prediction in Renewable Energy Infrastructure",
    authors: [
      "Tanvir Rahman Tanjim",
      "Md Ragib Ahasan Tutunji Khan",
      "Abdullah Md Omar Farukh",
      "Md Sazidul Islam",
      "Zaid Bin Sajid",
      "Amith Anand",
    ],
    role: "Co-author",
    venue: "IEEE CMSS",
    date: "12–14 August 2026",
    location: "Shah Alam, Malaysia",
    presentationStatus: "Published in IEEE Xplore",
    paperUrl:
      "https://ieeexplore.ieee.org/document/11688594",
    certificateUrl: cmssCertificate,
  },

  {
    id: "seisae-2026-cardio",
    category: "author",
    conferenceTitle:
      "International Conference on Sustainable Energy, Intelligent Systems & Advanced Engineering (SEISAE-2026)",
    paperTitle:
      "Interpretable Machine Learning for Cardiovascular Risk Stratification Using Routine Clinical Health Indicators",
    authors: [
      "Ridwan Noor Tasin",
      "Rebekah Sultana",
      "Avijit Deb Nath",
      "Tashfia Hoque Nuha",
      "Fahim Montasir",
      "Amith Anand",
    ],
    role: "Author & Presenter",
    venue: "IEEE SEISAE-2026",
    date: "29–30 September 2026",
    location:
      "Gyan Ganga College of Technology, Jabalpur, India",
    presentationStatus: "Research Paper Presented",
    certificateUrl: seisaeCertificate,
  },
];