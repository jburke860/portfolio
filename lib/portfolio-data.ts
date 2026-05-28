export const site = {
  name: "Jeremy Burke",
  email: "jeremy.burke024@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jeremy-burke-26bbb81b8/",
  github: "https://github.com/jburke860",
  resume: "/resume_v2.pdf",
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
    status: "Enhanced Local MVP",
    description:
      "A local technical-paper search assistant that combines PDF ingestion, local embeddings, hybrid vector/BM25 retrieval, PDF upload with index rebuild, and Ollama-based local answer synthesis to return source-grounded answers from public technical PDFs.",
    stack: [
      "Next.js",
      "FastAPI",
      "Chroma",
      "BM25",
      "Ollama",
      "Sentence Transformers",
    ],
    focus: [
      "PDF upload + re-indexing",
      "Hybrid vector/BM25 retrieval",
      "Local LLM answer synthesis",
      "Source-grounded snippets",
    ],
    github: "https://github.com/jburke860/technical-paper-ai-search",
    demo: "https://github.com/jburke860/technical-paper-ai-search",
    demoLabel: "Run Locally",
  },
  {
    title: "Open Computer Vision Detection Dashboard",
    type: "Public Demo Project 02",
    status: "Static Local MVP",
    description:
      "A static local computer vision dashboard that visualizes precomputed YOLOv8 object-detection results on public urban-scene images. The dashboard displays bounding boxes, confidence scores, class summaries, and detection tables without live inference, accounts, or private data.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "YOLOv8",
      "Computer Vision",
      "Static JSON",
    ],
    focus: [
      "Object-detection visualization",
      "Bounding-box overlays",
      "Confidence-score summaries",
      "Technical dashboard UI",
    ],
    github: "https://github.com/jburke860/open-cv-detection-dashboard",
    demo: "https://github.com/jburke860/open-cv-detection-dashboard",
    demoLabel: "Run Locally",
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