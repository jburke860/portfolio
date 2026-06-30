export const site = {
  name: "Jeremy Burke",
  email: "jeremy.burke024@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jeremytburke/",
  github: "https://github.com/jburke860",
  resume: "/Jeremy_Burke_Resume.pdf",
};

export const workHighlights = [
  {
    title: "Multi-Spectral Computer Vision & Sensor Fusion",
    type: "Sanitized Contract Work",
    description:
      "Developed ML-based perception workflows using synthetic and real multi-spectral data to support object detection, sensor modeling, and fusion-oriented validation for technical R&D programs.",
    stack: ["Python", "Computer Vision", "YOLOv8", "Sensor Fusion", "Synthetic Data"],
  },
  {
    title: "AI Automation & Engineering Decision Support",
    type: "Sanitized Contract Work",
    description:
      "Built AI-enabled internal tools that combine cloud services, vector search, LLM APIs, and automation workflows to accelerate technical analysis, documentation, and engineering decision support.",
    stack: ["AWS", "OpenAI API", "Weaviate", "Python", "Automation"],
  },
  {
    title: "Simulation, Modeling & Technical Analysis",
    type: "Sanitized Contract Work",
    description:
      "Created simulation and modeling workflows for sensor behavior, environmental effects, engineering trade studies, and system-level R&D validation across defense and aerospace programs.",
    stack: ["Gazebo", "ANSYS", "MATLAB", "Physics Modeling", "Technical R&D"],
  },
];

export const demoProjects = [
  {
    title: "ProjectPulse Demo",
  icon: "/proj_projpulse.svg",
  type: "Public Demo Project 01",
  status: "Live Public Demo",
  description:
    "A live full-stack project-management demo with a React/Vite frontend, ASP.NET Core 8 API, seeded demo workspaces, project/task workflows, activity history, EF Core persistence, tests, Docker Compose, and GitHub Actions CI. This public demo uses temporary seeded workspaces and is being iteratively improved.",
  stack: [
    "C#",
    "ASP.NET Core 8",
    "EF Core",
    "MediatR",
    "FluentValidation",
    "React/Vite",
    "xUnit",
    "Docker/CI",
  ],
  focus: [
    "Clean Architecture layers",
    "CQRS + validation pipeline",
    "Task workflow + audit logging",
    "Hosted demo workspace",
  ],
  github: "https://github.com/jburke860/projectpulse-api",
  demo: "https://projectpulse-demo.vercel.app",
  demoLabel: "Live Demo",
  },
  {
    title: "Open Computer Vision Detection Dashboard",
    icon: "/opencv.ico",
    type: "Public Demo Project 02",
    status: "Live Public Demo",
    description:
      "A hosted computer vision dashboard that lets users upload an image or select a sample scene, run live YOLOv8 object detection, and download annotated image, JSON, and CSV results. The project uses a Next.js/TypeScript frontend, Firebase Authentication, Storage, and Firestore for upload/job tracking, and a Cloud Run FastAPI service for YOLOv8/OpenCV inference.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Cloud Run",
      "Fast API",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
    ],
    focus: [
      "Live image-upload inference workflow",
      "Firestore job tracking",
      "Cloud Run FastAPI backend deployment",
      "Firebase Authentication",
      "YOLOv8 object detection",
      "Annotated image, JSON, and CSV results generation",
    ],
    github: "https://github.com/jburke860/open-cv-detection-dashboard",
    demo: "https://open-cv-detection-dashboard--open-cv-detection-dashboard.us-central1.hosted.app",
  },
  {
    title: "Technical Paper AI Search Assistant",
    icon: "/tech_paper_ass.ico",
    type: "Public Demo Project 03",
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
  },
];

export const skills = [
  {
    category: "Backend & APIs",
    items: ["C#", "ASP.NET Core", "FastAPI", "EF Core", "SQL", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "AI & Data Systems",
    items: ["Python", "LLM Systems", "RAG", "Chroma", "Computer Vision", "YOLOv8"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Swagger/OpenAPI", "AWS", "Linux", "Git"],
  },
];
