export const site = {
  name: "Jeremy Burke",
  email: "jeremy.burke024@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jeremy-burke-26bbb81b8/",
  github: "https://github.com/jburke860",
  resume: "/Jeremy_Burke_Resume.pdf",
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
    title: "ProjectPulse API",
    type: "Public Demo Project 01",
    status: "Complete Local API",
    description:
      "A Clean Architecture project-management system centered on an ASP.NET Core 8 API, with EF Core persistence, CQRS-style MediatR workflows, FluentValidation, Swagger/OpenAPI, seeded demo data, tests, Docker Compose, GitHub Actions CI, and a thin React/Vite dashboard.",
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
      "React dashboard + API tests",
    ],
    github: "https://github.com/jburke860/projectpulse-api",
  },
  {
    title: "Technical Paper AI Search Assistant",
    type: "Public Demo Project 02",
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
  {
    title: "Open Computer Vision Detection Dashboard",
    type: "Public Demo Project 03",
    status: "Hosted Public Demo",
    description:
      "A hosted computer vision dashboard that visualizes precomputed YOLOv8 object-detection results on public urban-scene images. The dashboard displays bounding boxes, confidence scores, class summaries, and detection tables without accounts, private data, or live model inference.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "YOLOv8",
      "Computer Vision",
      "Precomputed JSON",
    ],
    focus: [
      "Object-detection visualization",
      "Bounding-box overlays",
      "Confidence-score summaries",
      "Technical dashboard UI",
    ],
    github: "https://github.com/jburke860/open-cv-detection-dashboard",
    demo: "https://open-cv-detection-dashboard.vercel.app",
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
