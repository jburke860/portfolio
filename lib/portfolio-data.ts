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
    title: "SentinelGrid Edge Telemetry",
    icon: "/sentinel_grid_icon.png",
    type: "Public Demo Project 01",
    status: "Live Public Demo",
    description:
      "A local-first edge telemetry platform for climate-risk monitoring. It simulates 4,174 sensor nodes across 19 US regions, streaming readings through an MQTT pipeline into a geospatial store, with z-score + Isolation Forest anomaly scoring, sensor-drift quarantine, and incident tracking behind a national ops console. The dashboard overlays genuinely live public data (NEXRAD radar, ~3,700 real NWS/USGS stations, active storm warnings), and its deterministic engine can replay any moment of the last 24 hours, including storms that have already dissipated, without storing history. Runs fully in-browser, or against a live local backend.",
    stack: [
      "C++",
      "MQTT / Mosquitto",
      "FastAPI",
      "PostgreSQL / PostGIS",
      "Next.js",
      "Leaflet",
      "Docker",
    ],
    focus: [
      "MQTT edge-sensor ingestion pipeline",
      "PostGIS geospatial telemetry storage",
      "z-score + IsolationForest anomaly scoring",
      "Live public-data integration (NWS · USGS · NEXRAD)",
      "Deterministic 4k-node simulation with zero-storage replay",
      "Ops console: incident triage, playback, forecasts, ⌘K",
    ],
    github: "https://github.com/jburke860/sentinelgrid",
    demo: "https://sentinelgrid-two.vercel.app",
    demoLabel: "Live Demo",
  },
  {
    title: "ProjectPulse Demo",
    icon: "/proj_projpulse.svg",
    type: "Public Demo Project 02",
    status: "Live Public Demo",
    description:
      "A production-style project-management platform with an ASP.NET Core 8 Clean Architecture API and a React 19 dashboard. Features isolated demo workspaces, drag-and-drop Kanban board, file attachments, labels, role-based permissions, audit history, rate limiting, and 100+ automated tests across the stack.",
    stack: [
      "C#",
      "ASP.NET Core 8",
      "Clean Architecture",
      "EF Core",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "xUnit/Vitest",
    ],
    focus: [
      "Clean Architecture + CQRS pipeline",
      "Drag-and-drop Kanban with domain-enforced transitions",
      "Isolated multi-tenant demo sessions",
      "Rate limiting, audit logging, 100+ tests",
    ],
    github: "https://github.com/jburke860/projectpulse-api",
    demo: "https://projectpulse-demo.vercel.app",
    demoLabel: "Live Demo",
  },
  {
    title: "Open Computer Vision Detection Dashboard",
    icon: "/opencv_icon.png",
    type: "Public Demo Project 03",
    status: "Live Public Demo",
    description:
      "A hosted computer vision dashboard where users upload an image, capture a webcam frame, or batch-process multiple images through live YOLOv8 object detection. Features an interactive dark/light workspace with bounding-box viewer, original/annotated comparison, detection analytics, and annotated image, JSON, and CSV exports. Built with a Next.js/TypeScript frontend, Firebase Authentication, Storage, and Firestore for upload/job tracking, and a token-verified Cloud Run FastAPI service running selectable YOLOv8 models.",
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
      "Live upload, webcam, and batch-queue inference workflows",
      "Selectable YOLOv8 models with confidence/IoU tuning",
      "Secure token-verified Cloud Run FastAPI backend",
      "Interactive detection analytics + bounding-box viewer",
      "Firestore job tracking",
      "Annotated image, JSON, and CSV export generation",
    ],
    github: "https://github.com/jburke860/open-cv-detection-dashboard",
    demo: "https://open-cv-detection-dashboard--open-cv-detection-dashboard.us-central1.hosted.app",
  },
  {
    title: "Technical Paper AI Search Assistant",
    icon: "/tech_paper_ass_icon.png",
    type: "Public Demo Project 04",
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
