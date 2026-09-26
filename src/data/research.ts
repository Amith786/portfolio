export type ResearchStatus =
  | "With Editor"
  | "Peer Review"
  | "Transfer Completed"
  | "Published";

export interface JournalEntry {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  status: ResearchStatus;
  year: string;
  doi?: string;
  publisherUrl?: string;
  pdfUrl?: string;
  certificateUrl?: string;
  presentationUrl?: string;
  githubUrl?: string;
  bibtex?: string;
}

export const journals: JournalEntry[] = [
  {
    id: "kerala-rainfall",
    title:
      "Leakage-Aware Environmental Forecasting under Strong Seasonality: A Century-Scale Benchmark of Monthly Rainfall Prediction in Kerala, India",
    authors: ["Amith Anand"],
    journal: "Scientific Reports",
    status: "With Editor",
    year: "2026",
    publisherUrl: "",
    doi: "",
  },

  {
    id: "hotel-optimization",
    title:
      "Uncertainty Aware Artificial Intelligence Based Multi Objective Optimization of Hotel Operations in New York City",
    authors: ["Shehabul Alam, Adnan, Amith Anand"],
    journal: "Discover Artificial Intelligence",
    status: "Peer Review",
    year: "2026",
    publisherUrl: "",
    doi: "",
  },

  {
    id: "warehouse-3pl",
    title:
      "Machine Learning-Based Quantitative Analysis of the Impact of Warehouse Operational Factors on Efficiency in Third-Party Logistics (3PL) Networks",
    authors: ["Md Safawat Jamil Sagar, Mohammad Moshiur Rahman, Mohammad Mehedi Hasan, Md Hashin Mezbaur Rahman Patoary, Shariar Emon Alve, Md Sazidul Islam, Md Abu Bakar Siddique, Bidhayok Sharma, Amith Anand"],
    journal: "Journal of Data, Information and Management",
    status: "With Editor",
    year: "2026",
    publisherUrl: "",
    doi: "",
  },

  {
    id: "arizona-drought",
    title:
      "Hybrid Deep Learning and Meta-Ensemble Modeling for Temperature Forecasting and Drought Risk Assessment in Arizona, USA",
    authors: ["Avijit Deb Nath, Md Sazidul Islam, Suhas Singha, Md Ali Ashraf Yad, Md Jahidul Islam Ridoy, Tasnim Ahmad Mumu, Kazi Anik Arman, Amith Anand"],
    journal: "Discover Sustainability",
    status: "Peer Review",
    year: "2026",
    publisherUrl: "",
    doi: "",
  },

  {
    id: "work-life-balance",
    title:
      "Assessing the Impact of Work-Life Balance and Job Satisfaction on Employee Retention through HR Analytics: A Management Information Systems Perspective",
    authors: ["Amith Anand, Erugu Lokesh"],
    journal: "Journal of Data, Information and Management",
    status: "With Editor",
    year: "2026",
    publisherUrl: "",
    doi: "",
  },
    
];