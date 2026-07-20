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
      "A hosted computer vision dashboard where users upload an image, capture a webcam frame, or batch-process multiple images through live object detection. Features seven selectable models spanning three YOLO generations (v8–v12), the RT-DETR transformer detector, and open-vocabulary YOLO-World, which detects free-form text-prompted classes. Includes an interactive dark/light workspace with bounding-box viewer, original/annotated comparison, detection analytics, and annotated image, JSON, and CSV exports. Built with a Next.js/TypeScript frontend, Firebase Authentication, Storage, and Firestore for upload/job tracking, and a token-verified Cloud Run FastAPI inference service.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Cloud Run",
      "Fast API",
      "YOLO",
      "RT-DETR",
      "OpenCV",
      "Computer Vision",
    ],
    focus: [
      "Live upload, webcam, and batch-queue inference workflows",
      "7 models across YOLO v8–v12 and RT-DETR with confidence/IoU tuning",
      "Open-vocabulary detection via text-prompted classes (YOLO-World)",
      "Secure token-verified Cloud Run FastAPI backend",
      "Interactive detection analytics + bounding-box viewer",
      "Annotated image, JSON, and CSV export generation",
    ],
    github: "https://github.com/jburke860/open-cv-detection-dashboard",
    demo: "https://open-cv-detection-dashboard--open-cv-detection-dashboard.us-central1.hosted.app",
  },
  {
    title: "Technical Paper AI Search Assistant",
    icon: "/tech_paper_ass_icon.png",
    type: "Public Demo Project 04",
    status: "Live Public Demo",
    description:
      "A source-grounded research assistant deployed on Cloudflare's free tier. Hybrid semantic + BM25 retrieval with reciprocal-rank fusion over a 10-paper aerospace corpus streams cited answers, highlights the exact passage on the real PDF page, and lets visitors search their own PDFs entirely in-browser, protected by a fail-closed daily quota so the demo can never generate a bill.",
    stack: [
      "Next.js",
      "TypeScript",
      "Cloudflare",
      "D1",
      "Transformers.js",
      "PDF.js",
    ],
    focus: [
      "Hybrid semantic + BM25 retrieval with reciprocal-rank fusion",
      "Exact-passage citation highlighting on the real PDF page",
      "Browser-local PDF search (nothing uploaded, local embeddings)",
      "Fail-closed daily quota breaker so the demo can never bill",
      "Streamed source-grounded answers",
      "97 automated tests, axe-clean accessibility",
    ],
    github: "https://github.com/jburke860/technical-paper-ai-search",
    demo: "https://technical-paper-ai-search.jeremy-burke024.workers.dev",
    demoLabel: "Live Demo",
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
    items: ["Python", "LLM Systems", "RAG", "Transformers.js", "Computer Vision", "YOLO"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Swagger/OpenAPI", "AWS", "Linux", "Git"],
  },
];
