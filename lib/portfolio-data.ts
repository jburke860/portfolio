export const site = {
  name: "Jeremy Burke",
  email: "jeremy.burke024@gmail.com",
  linkedIn: "https://www.linkedin.com/",
  github: "https://github.com/",
  resume: "/resume.pdf",
};

export const workHighlights = [
  {
    title: "Computer Vision & Multi-Spectral Perception",
    type: "Sanitized Contract Work",
    description:
      "Developed ML-based perception workflows using synthetic and real multi-spectral data to support object detection, sensor modeling, and fusion-oriented validation.",
    stack: ["Python", "Computer Vision", "YOLOv8", "Sensor Fusion"],
  },
  {
    title: "AI Automation & Decision Support",
    type: "Sanitized Contract Work",
    description:
      "Built AI-enabled internal tools using cloud services, vector search, and LLM APIs to accelerate technical analysis, document workflows, and engineering decision support.",
    stack: ["AWS", "OpenAI API", "Weaviate", "Python"],
  },
  {
    title: "Simulation & Engineering Modeling",
    type: "Sanitized Contract Work",
    description:
      "Created simulation and modeling workflows for sensor behavior, environmental effects, technical trade studies, and system-level R&D validation.",
    stack: ["Gazebo", "ANSYS", "MATLAB", "Physics Modeling"],
  },
];

export const demoProjects = [
  {
    title: "Open Computer Vision Dashboard",
    type: "Public Demo Project 01",
    status: "Planned Build",
    description:
      "A public, non-sensitive computer vision demo that runs object detection on open images or video samples and displays predictions, confidence scores, and model outputs in a clean web dashboard.",
    stack: ["Python", "YOLOv8", "FastAPI", "Next.js", "Docker"],
    focus: [
      "Model inference API",
      "Image upload workflow",
      "Prediction visualization",
      "Confidence scoring",
    ],
  },
  {
    title: "Technical Paper AI Search Assistant",
    type: "Public Demo Project 02",
    status: "Planned Build",
    description:
      "A public RAG-style document assistant that searches open technical papers, retrieves relevant passages, and generates grounded answers with source references.",
    stack: ["Python", "OpenAI API", "Vector Search", "Next.js", "TypeScript"],
    focus: [
      "Document ingestion",
      "Embedding search",
      "Source-grounded answers",
      "Clean research UI",
    ],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "C++", "Java", "SQL", "TypeScript"],
  },
  {
    category: "AI / ML",
    items: ["Computer Vision", "YOLOv8", "Multimodal Fusion", "LLM Systems"],
  },
  {
    category: "Simulation",
    items: ["Gazebo", "ANSYS Workbench", "MATLAB", "Physics-Based Modeling"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS S3", "AWS EC2", "Weaviate", "OpenAI API", "Linux"],
  },
];