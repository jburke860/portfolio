export const site = {
  name: "Jeremy Burke",
  email: "jeremy.burke024@gmail.com",
  linkedIn: "https://www.linkedin.com/",
  github: "https://github.com/jburke860",
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
    title: "Technical Paper AI Search Assistant",
    type: "Public Demo Project 01",
    status: "Local MVP Complete",
    description:
      "A public technical-paper search assistant that uses local embeddings, Chroma vector retrieval, and a FastAPI backend to search public PDFs and return source-grounded snippets with document names and page numbers.",
    stack: [
      "Next.js",
      "FastAPI",
      "Chroma",
      "PyMuPDF",
      "Sentence Transformers",
    ],
    focus: [
      "PDF text extraction",
      "Local embeddings",
      "Vector search",
      "Source-grounded snippets",
    ],
    github: "https://github.com/jburke860/technical-paper-ai-search",
    demo: "",
    demoLabel: "Local Demo",
  },
  {
    title: "Open Computer Vision Dashboard",
    type: "Public Demo Project 02",
    status: "Planned Build",
    description:
      "A public, non-sensitive computer vision demo that will display object detection outputs, confidence scores, and model results in a clean technical dashboard using open images or video samples.",
    stack: ["Python", "YOLOv8", "FastAPI", "Next.js", "Docker"],
    focus: [
      "Model output visualization",
      "Bounding box display",
      "Confidence scoring",
      "Technical dashboard UI",
    ],
    github: "",
    demo: "",
    demoLabel: "Live Demo Coming Soon",
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