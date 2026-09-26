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
    location: "Bansal Institute of Science and Technology, Bhopal",
    presentationStatus: "Research Paper Presented",
    certificateUrl: iceticsCertificate,
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
    venue: "IEEE",
    date: "12–14 August 2026",
    location: "Shah Alam, Malaysia",
    presentationStatus: "Published in IEEE Xplore",
    paperUrl: "https://ieeexplore.ieee.org/document/11688594",
    certificateUrl: cmssCertificate,
  },
];