import imageFusion from "../assets/projects/image-fusion.jpg";
import keralaRainfall from "../assets/projects/kerala-rainfall.jpg";
import breastCancer from "../assets/projects/breast-cancer.jpg";
import carSales from "../assets/projects/car-sales.jpg";
import faceRecognition from "../assets/projects/face-recognition.jpg";
import atmSimulation from "../assets/projects/atm-simulation.jpg";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDetail {
  overview: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  methodology?: string;
  metrics?: ProjectMetric[];
  datasetInfo?: string;
  screenshots?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  researchPaperId?: string;
  detail: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "image-fusion",
    title: "Image Fusion for Improved Situational Awareness",
    category: "Computer Vision · Deep Learning",
    shortDescription:
      "A multi-modal EO + SAR satellite image fusion system built around a Haar DWT pathway, a CNN-based FusionNet, and a scene-adaptive router.",
    tags: [
      "Computer Vision",
      "Deep Learning",
      "Haar DWT",
      "FusionNet",
      "Flask",
      "Python",
    ],
    image: imageFusion,
    githubUrl: "https://github.com/Amith786/image-fusion-remote-sensing",
    demoUrl: "",
    researchPaperId: "eo-sar-fusion",
    detail: {
      overview:
        "Developed with co-authors Mohammed Shahan and Irshadhullah, this project fuses electro-optical (EO) and synthetic aperture radar (SAR) satellite imagery to improve situational awareness in conditions where either modality alone falls short.",

      problem:
        "EO imagery is rich in visual detail but can degrade in fog, smoke, fire, and night conditions. SAR imagery is more robust to these conditions but can be harder to interpret visually. The project addresses the limitations of relying on either modality independently.",

      solution:
        "A fusion pipeline combining a Haar discrete wavelet transform (DWT) pathway with FusionNet, a CNN-based fusion network, coordinated by a statistics-driven scene router that adapts fusion behaviour across night, fog, fire, and normal-condition scenes.",

      architecture:
        "Haar DWT fusion pathway + FusionNet CNN-based image fusion + a scene-adaptive router that selects or blends fusion behaviour according to detected scene conditions.",

      methodology:
        "Progressive model development across multiple FusionNet versions, followed by evaluation using image-quality and computational-performance metrics. Results were cross-verified against training and evaluation logs before reporting.",

      metrics: [
        { label: "Average PSNR", value: "38.4272 dB" },
        { label: "Average SSIM", value: "0.9694" },
        { label: "Mean Latency", value: "8.7350 ms" },
        { label: "Approx. FPS", value: "114.48" },
      ],

      datasetInfo:
        "EO and SAR satellite imagery used for multi-modal image fusion. Detailed dataset sources and composition will be added.",

      screenshots: [],
    },
  },

  {
    id: "kerala-rainfall",
    title: "Kerala Rainfall Forecasting",
    category: "Machine Learning · Forecasting",
    shortDescription:
      "Leakage-aware rainfall forecasting for Kerala using engineered lag and rolling-average features across several ensemble models.",
    tags: [
      "Machine Learning",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "Feature Engineering",
      "Forecasting",
    ],
    image: keralaRainfall,
    githubUrl: "https://github.com/Amith786/Kerala-Rainfall-Leakage-Aware-ML",
    demoUrl: "",
    researchPaperId: "kerala-rainfall",
    detail: {
      overview:
        "A forecasting pipeline for Kerala rainfall built with leakage-aware feature engineering and time-aware validation. The project investigates how historical rainfall patterns and engineered temporal features can support monthly rainfall prediction.",

      problem:
        "Rainfall forecasting is challenging because rainfall patterns are seasonal and strongly influenced by temporal dependencies. Conventional random train-test splitting can also introduce future information into the training process.",

      solution:
        "Time-aware validation combined with lag features, shifted rolling averages, seasonal representations, and historical climatological information to build forecasting models while avoiding look-ahead leakage.",

      methodology:
        "The workflow includes temporal feature engineering followed by evaluation of multiple machine-learning models, including Random Forest, XGBoost, and LightGBM, using time-aware validation.",

      datasetInfo:
        "Historical Kerala rainfall records covering long-term monthly rainfall observations. Detailed dataset source, period, and feature description will be added.",

      screenshots: [],
    },
  },

  {
    id: "breast-cancer-classification",
    title: "Breast Cancer Classification",
    category: "Machine Learning",
    shortDescription:
      "A machine learning classification project for distinguishing breast cancer diagnoses using structured clinical features.",
    tags: [
      "Machine Learning",
      "Classification",
      "Python",
      "Data Analysis",
    ],
    image: breastCancer,
    githubUrl: "https://github.com/Amith786/breast-cancer-classification",
    demoUrl: "",
    detail: {
      overview:
        "A machine-learning classification project exploring the use of structured medical diagnostic features to classify breast cancer cases.",

      problem:
        "Medical datasets can contain multiple correlated diagnostic features, making appropriate preprocessing, feature selection, and model evaluation important for developing a reliable classification workflow.",

      solution:
        "A supervised machine-learning pipeline involving data preprocessing, exploratory analysis, model training, and evaluation for breast cancer classification.",

      methodology:
        "The workflow focuses on preparing the dataset, analysing diagnostic features, training classification models, and evaluating their predictive performance.",

      datasetInfo:
        "Breast cancer diagnostic dataset. Detailed dataset source and model-specific results will be added.",

      screenshots: [],
    },
  },

  {
    id: "car-sales-prediction",
    title: "Car Sales Prediction",
    category: "Machine Learning",
    shortDescription:
      "A machine-learning project focused on analysing automobile sales data and building a predictive model for sales estimation.",
    tags: [
      "Machine Learning",
      "Regression",
      "Python",
      "Data Analysis",
      "Prediction",
    ],
    image: carSales,
    githubUrl: "https://github.com/Amith786/car-sales-prediction",
    demoUrl: "",
    detail: {
      overview:
        "A machine-learning project that analyses automobile sales data and explores predictive modelling for estimating sales outcomes.",

      problem:
        "Automobile sales depend on multiple interacting factors, requiring structured data analysis and appropriate predictive modelling to identify useful patterns.",

      solution:
        "A data-driven workflow involving preprocessing, exploratory analysis, feature preparation, model training, and prediction.",

      methodology:
        "The project follows a typical machine-learning pipeline from data cleaning and exploratory analysis through feature preparation, model development, and evaluation.",

      datasetInfo:
        "Automobile sales dataset. Detailed dataset source, features, and model results will be added.",

      screenshots: [],
    },
  },

  {
    id: "face-recognition",
    title: "Face Recognition",
    category: "Computer Vision",
    shortDescription:
      "A computer-vision project for detecting and recognising faces using image-processing and recognition techniques.",
    tags: [
      "Computer Vision",
      "Face Recognition",
      "Python",
      "Image Processing",
    ],
    image: faceRecognition,
    githubUrl: "https://github.com/Amith786/Face-Recognition",
    demoUrl: "",
    detail: {
      overview:
        "A computer-vision application exploring automated face detection and recognition from image data.",

      problem:
        "Automatically identifying faces from images requires reliable face detection, feature representation, and matching techniques that can handle variations in appearance and image conditions.",

      solution:
        "A computer-vision pipeline that processes facial images and applies recognition techniques to identify known faces.",

      methodology:
        "The workflow involves image acquisition, preprocessing, face detection, feature extraction or representation, and recognition against available face data.",

      datasetInfo:
        "Face image dataset used for recognition experiments. Dataset composition and implementation details will be added.",

      screenshots: [],
    },
  },

  {
    id: "atm-simulation",
    title: "ATM Simulation",
    category: "Software Engineering",
    shortDescription:
      "A software simulation of core ATM operations including account access, transactions, and balance management.",
    tags: [
      "Python",
      "Java",
      "Software Engineering",
      "OOP",
      "Simulation",
    ],
    image: atmSimulation,
    githubUrl: "https://github.com/Amith786/ATM-Simulation",
    demoUrl: "",
    detail: {
      overview:
        "A software-based ATM simulation designed to reproduce common banking operations through a controlled application environment.",

      problem:
        "ATM systems require structured handling of authentication, account information, transactions, and balance updates while maintaining clear program flow.",

      solution:
        "A simulated banking workflow implementing core ATM operations such as user authentication, balance checking, withdrawals, deposits, and transaction handling.",

      methodology:
        "The project applies programming fundamentals, object-oriented design, conditional logic, input validation, and transaction-oriented workflows to simulate ATM functionality.",

      datasetInfo:
        "No external dataset required. The project operates using simulated account and transaction data.",

      screenshots: [],
    },
  },
];