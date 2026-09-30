/**
 * Single source of truth for all portfolio content.
 * Every entry below is taken from Abin Joseph's résumé and LinkedIn profile.
 * Edit this file to update the site — no component changes required.
 */

export const profile = {
  name: "Abin Joseph",
  title: "AI/ML & Generative AI Engineer",
  tagline:
    "I build production RAG, agentic and document-intelligence systems that turn dense enterprise documents into grounded, reliable answers.",
  location: "Kozhikode, Kerala, India",
  experienceSummary: "3.8+ years",
  email: "abinjoseph0811@gmail.com",
  // Phone is kept out of the public page by default. Set showPhone to true to display it.
  phone: "+91 8606046252",
  showPhone: false,
  linkedin: "https://www.linkedin.com/in/abinjoseph0811",
  // Add your GitHub profile URL here to show it in the hero and contact sections.
  github: "https://github.com/Abinj0811",
  // Place your résumé in /public and set this to its path (e.g. "/AbinJoseph_AI_Engineer_Resume.pdf") to enable the download button.
  resumeUrl: "/AbinJoseph_AI_Engineer_Resume.pdf",
  // Shows an "Open to work" badge in the hero and contact sections. Set enabled to false to hide it.
  openToWork: {
    enabled: true,
    message: "Open to AI/ML & Generative AI Engineer roles",
  },
};

export const about = {
  paragraphs: [
    "I'm an AI/ML engineer with 3.8+ years at ThinkPalm Technologies, where I design and ship Generative AI systems for enterprise production workflows — most recently RAG assistants and multi-agent LangGraph workflows for regulatory and maritime compliance documents.",
    "My work spans the full pipeline: document ingestion and preprocessing, embeddings and hybrid retrieval, LLM orchestration, evaluation, and observability. I care as much about measuring why a RAG system fails — chunking, retrieval, prompting or generation — as about building it in the first place.",
    "Before GenAI became my focus, I delivered proof-of-concepts in computer vision, predictive analytics and time-series forecasting, several of which advanced toward production development.",
  ],
  focusAreas: [
    "Retrieval-Augmented Generation",
    "Agentic AI & LangGraph",
    "Document Intelligence & OCR",
    "RAG Evaluation & LLM Observability",
    "Computer Vision",
  ],
};

/** Stages of the end-to-end AI pipeline described in the résumé summary. */
export const pipelineStages = [
  { key: "ingest", label: "Ingest", detail: "PDF, text & table extraction" },
  { key: "chunk", label: "Chunk", detail: "Preprocessing & metadata" },
  { key: "embed", label: "Embed", detail: "Vector embeddings & indexing" },
  { key: "retrieve", label: "Retrieve", detail: "Hybrid search & reranking" },
  { key: "orchestrate", label: "Orchestrate", detail: "LangGraph agents & tools" },
  { key: "evaluate", label: "Evaluate", detail: "Relevance & faithfulness" },
  { key: "observe", label: "Observe", detail: "Tracing, latency & tokens" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string[];
  contribution: string;
  outcome: string;
  tech: string[];
  /** Architecture diagram: each lane is a left-to-right flow of steps. */
  architecture: { lanes: ArchitectureLane[]; caption?: string };
  /** Key technical decisions and the reason behind each one. */
  decisions: { decision: string; why: string }[];
  /** Optional — add your own reflections to show them on the case-study page. */
  lessons?: string[];
  /** Optional — public repo / demo / write-up links shown on the case-study page. */
  links?: { label: string; href: string }[];
};

export type ArchitectureLane = {
  name: string;
  steps: { label: string; detail?: string }[];
};

export const projects: Project[] = [
  {
    slug: "compliance-rag",
    name: "Compliance Document RAG Assistant",
    category: "RAG · Agentic AI",
    summary:
      "A RAG chatbot that answers regulatory and compliance questions using relevant, grounded document context.",
    problem:
      "Answers to compliance queries were buried in long regulatory documents, with critical details — approval authorities, financial limits, procedures — locked inside complex tables that standard retrieval misses.",
    solution: [
      "Ingestion pipeline covering PDF, text and table extraction, chunking, embeddings and vector indexing.",
      "Converted complex regulatory tables into structured text before indexing so tabular facts retrieve accurately.",
      "Hybrid retrieval combining keyword and vector search with metadata filtering and reranking.",
      "LangGraph orchestration of retrieval and response workflows, with tracing of latency, retrieval results and LLM outputs.",
    ],
    contribution:
      "Built the ingestion, retrieval and orchestration pipeline end to end, and designed the evaluation framework.",
    outcome:
      "An evaluation framework built on retrieval relevance, context quality and answer faithfulness surfaces RAG failure cases and drives improvements in response quality.",
    tech: ["Python", "LangChain", "LangGraph", "FAISS", "Azure OpenAI", "Vector Embeddings"],
    architecture: {
      lanes: [
        {
          name: "Ingestion",
          steps: [
            { label: "Source documents", detail: "Regulatory PDFs, text & tables" },
            { label: "Extraction", detail: "PDF, text & table extraction" },
            { label: "Table → text", detail: "Complex tables to structured text" },
            { label: "Chunk & embed", detail: "Chunking + vector embeddings" },
            { label: "Vector index", detail: "FAISS + metadata" },
          ],
        },
        {
          name: "Query",
          steps: [
            { label: "User question", detail: "Compliance query" },
            { label: "Hybrid retrieval", detail: "Keyword + vector, metadata filters" },
            { label: "Reranking", detail: "Precision on top results" },
            { label: "LangGraph workflow", detail: "Retrieval & response orchestration" },
            { label: "Grounded answer", detail: "Azure OpenAI with document context" },
          ],
        },
        {
          name: "Quality",
          steps: [
            { label: "Evaluation", detail: "Relevance, context quality, faithfulness" },
            { label: "Tracing", detail: "Latency, retrieval results, LLM outputs" },
            { label: "Failure analysis", detail: "Chunking, retrieval, prompting or generation" },
          ],
        },
      ],
      caption: "Documents are indexed once; every query runs through hybrid retrieval and a LangGraph workflow, with evaluation and tracing closing the loop.",
    },
    decisions: [
      {
        decision: "Convert complex regulatory tables into structured text before indexing.",
        why: "Approval authorities, financial limits and procedures live in tables — flattening them into structured text lets them be retrieved accurately.",
      },
      {
        decision: "Hybrid retrieval: keyword + vector search, with metadata filtering and reranking.",
        why: "Improves retrieval precision for regulatory queries.",
      },
      {
        decision: "Evaluate with retrieval relevance, context quality and answer faithfulness.",
        why: "Identifies RAG failure cases and shows whether quality is lost in chunking, retrieval, prompting or generation.",
      },
      {
        decision: "Orchestrate with LangGraph and trace every pipeline run.",
        why: "Makes latency, retrieval results and LLM outputs observable for debugging and optimization.",
      },
    ],
  },
  {
    slug: "document-intelligence",
    name: "AI-Based Document Intelligence Platform",
    category: "Multimodal LLM · Document AI",
    summary:
      "A multimodal pipeline that classifies uploaded documents, maps them to required checklists and extracts structured data.",
    problem:
      "Uploaded documents had to be identified against predefined checklists and their key information captured as structured data for downstream business workflows.",
    solution: [
      "Multimodal AWS Bedrock model to understand uploaded documents.",
      "Classification and mapping of each upload to the required document it represents on a predefined checklist.",
      "LLM-based extraction combined with rule-based validation for consistent, workflow-ready output.",
      "Document-processing capabilities exposed through FastAPI for backend integration.",
    ],
    contribution:
      "Developed the document-understanding pipeline, the classification and extraction logic, and the FastAPI service layer.",
    outcome:
      "Classified documents are converted into validated, structured data that backend applications consume directly through an API.",
    tech: ["Python", "AWS Bedrock", "LangChain", "LangGraph", "FastAPI"],
    architecture: {
      lanes: [
        {
          name: "Processing",
          steps: [
            { label: "Document upload", detail: "Submitted by a backend application" },
            { label: "Understanding", detail: "Multimodal AWS Bedrock model" },
            { label: "Classification", detail: "Mapped to a predefined checklist" },
            { label: "Extraction", detail: "LLM-based field extraction" },
            { label: "Validation", detail: "Rule-based checks" },
            { label: "Structured data", detail: "Ready for downstream processing" },
          ],
        },
        {
          name: "Integration",
          steps: [
            { label: "Backend applications" },
            { label: "FastAPI service", detail: "Document-processing endpoints" },
            { label: "LangChain / LangGraph pipeline" },
          ],
        },
      ],
      caption: "Each upload is understood, matched to the checklist item it represents, extracted and validated before being returned as structured data.",
    },
    decisions: [
      {
        decision: "Use a multimodal Bedrock model for document understanding.",
        why: "Understands the uploaded documents that classification and extraction build on.",
      },
      {
        decision: "Map every upload to a predefined document checklist.",
        why: "Identifies which required document each upload represents.",
      },
      {
        decision: "Combine LLM-based extraction with rule-based validation.",
        why: "Improves consistency of the extracted data and supports the business workflows that depend on it.",
      },
      {
        decision: "Expose the pipeline through FastAPI.",
        why: "Lets backend applications integrate document processing through a standard API.",
      },
    ],
  },
  {
    slug: "pdf-table-extraction",
    name: "PDF Table Detection & Extraction",
    category: "Computer Vision · OCR",
    summary:
      "A YOLO-powered system that detects and extracts tables of any layout from PDFs into structured rows and columns.",
    problem:
      "Real-world PDFs mix text, images and many table layouts — bordered, borderless, irregular, even vertically oriented text — that generic parsers fail to reconstruct.",
    solution: [
      "Trained a YOLO-based model to detect bordered, borderless and other table types on PDF pages.",
      "Applied extraction techniques chosen by the detected table structure to handle standard and irregular tables.",
      "Combined PDF parsing and OCR to reconstruct table content into structured rows and columns.",
    ],
    contribution:
      "Trained the table-detection model, built the structure-aware extraction logic and the export pipeline.",
    outcome:
      "Handles challenging PDFs with borderless tables, irregular layouts, images and vertical text, exporting results to Excel and structured formats for downstream processing.",
    tech: ["Python", "YOLO", "OpenCV", "Tesseract OCR", "pdfplumber", "Pandas"],
    architecture: {
      lanes: [
        {
          name: "Pipeline",
          steps: [
            { label: "PDF page", detail: "Text, images & tables" },
            { label: "Table detection", detail: "YOLO — bordered, borderless & more" },
            { label: "Strategy selection", detail: "Technique chosen per table structure" },
            { label: "Parse + OCR", detail: "pdfplumber & Tesseract OCR" },
            { label: "Reconstruction", detail: "Rows & columns with Pandas" },
            { label: "Export", detail: "Excel & structured formats" },
          ],
        },
      ],
      caption: "Detection comes first, so each table is extracted with the technique that suits its structure.",
    },
    decisions: [
      {
        decision: "Train a YOLO model to detect tables before extracting them.",
        why: "Pages mix text, images and bordered, borderless and other table types — detection isolates each table and its type.",
      },
      {
        decision: "Apply different extraction techniques based on the detected structure.",
        why: "Handles both standard and irregular tables.",
      },
      {
        decision: "Combine PDF parsing with OCR.",
        why: "Reconstructs content into structured rows and columns even with images and vertically oriented text.",
      },
    ],
  },
  {
    slug: "fire-ppe-detection",
    name: "Fire, Smoke & PPE Detection System",
    category: "Computer Vision · Edge AI (PoC)",
    summary:
      "A computer-vision proof-of-concept detecting fire, smoke, gloves and PPE from images and video, running at the edge.",
    problem:
      "Safety monitoring needs to spot fire, smoke and missing protective equipment from camera feeds — ideally on low-cost hardware close to the source.",
    solution: [
      "Prepared and annotated training data and trained a YOLO-based object detection model.",
      "Evaluated the trained model on test images and video to verify detection performance.",
      "Deployed the model on a Raspberry Pi for edge-based inference.",
    ],
    contribution:
      "Built the PoC end to end: data annotation, model training, evaluation and edge deployment.",
    outcome:
      "A working edge-inference prototype on Raspberry Pi, validated on test images and video.",
    tech: ["Python", "YOLO", "OpenCV", "Raspberry Pi"],
    architecture: {
      lanes: [
        {
          name: "Training",
          steps: [
            { label: "Data preparation", detail: "Images & video" },
            { label: "Annotation", detail: "Fire, smoke, gloves, PPE" },
            { label: "YOLO training", detail: "Object detection model" },
            { label: "Evaluation", detail: "Test images & video" },
          ],
        },
        {
          name: "Edge inference",
          steps: [
            { label: "Image / video input" },
            { label: "Frame processing", detail: "OpenCV" },
            { label: "YOLO on Raspberry Pi", detail: "Edge-based inference" },
            { label: "Detections", detail: "Fire, smoke, gloves & PPE" },
          ],
        },
      ],
    },
    decisions: [
      {
        decision: "Annotate a custom dataset and train a YOLO object detector.",
        why: "Covers the specific classes needed — fire, smoke, gloves and PPE.",
      },
      {
        decision: "Evaluate on both test images and video.",
        why: "Verifies detection performance.",
      },
      {
        decision: "Deploy on a Raspberry Pi.",
        why: "Enables edge-based inference.",
      },
    ],
  },
];

export type Role = {
  title: string;
  period: string;
};

export const experience = {
  company: "ThinkPalm Technologies Pvt. Ltd.",
  location: "Kochi, Kerala, India",
  period: "Sep 2022 — Jul 2026",
  duration: "3 yrs 11 mos",
  headline: "Software Engineer (AI/ML Focus)",
  roles: [
    { title: "Software Engineer", period: "Apr 2023 — Jul 2026" },
    { title: "Software Engineer", period: "Sep 2022 — Mar 2023" },
  ] as Role[],
  highlights: [
    {
      area: "RAG Systems",
      text: "Designed and deployed end-to-end RAG systems (Python, LangChain, FAISS, Azure OpenAI) for regulatory and maritime compliance documents, replacing manual document search with instant, context-grounded answers.",
    },
    {
      area: "Multi-Agent Workflows",
      text: "Built multi-agent LangGraph workflows for document retrieval, validation and reasoning, streamlining query resolution across enterprise knowledge bases.",
    },
    {
      area: "Agent Orchestration",
      text: "Architected agent-based pipelines integrating LLMs, external tools and vector databases to automate document processing and decision-support workflows that previously required manual review.",
    },
    {
      area: "Retrieval Pipelines",
      text: "Built document preprocessing and retrieval pipelines — PDF extraction, chunking, embeddings, metadata filtering and semantic search — improving retrieval quality for document-based QA.",
    },
    {
      area: "RAG Evaluation",
      text: "Implemented evaluation and testing using relevance, faithfulness and retrieval-quality metrics to pinpoint failures in chunking, retrieval, prompting and generation.",
    },
    {
      area: "LLM Observability",
      text: "Implemented tracing to monitor latency, token usage, retrieval results, prompts, responses and pipeline failures, supporting debugging and production optimization.",
    },
    {
      area: "Production Delivery",
      text: "Partnered with product, backend and engineering teams to deploy AI solutions into enterprise production workflows.",
    },
    {
      area: "Applied ML PoCs",
      text: "Delivered proof-of-concepts in predictive analytics, computer vision and time-series forecasting, several of which advanced toward production development.",
    },
  ],
};

export const skillGroups: { name: string; skills: string[] }[] = [
  {
    name: "Generative AI & LLMs",
    skills: ["LLMs", "RAG", "Agentic AI", "Agentic Workflows", "LangChain", "LangGraph", "Prompt Engineering"],
  },
  {
    name: "RAG & Evaluation",
    skills: ["Embeddings", "Vector Search", "Hybrid Search", "Reranking", "RAG Evaluation", "LLM Observability"],
  },
  {
    name: "Vector Databases",
    skills: ["FAISS", "Chroma", "pgvector", "Azure Cosmos DB"],
  },
  {
    name: "Document AI & OCR",
    skills: ["PDF Extraction", "Table Parsing", "OCR", "Document Indexing"],
  },
  {
    name: "Computer Vision",
    skills: ["YOLO", "OpenCV", "MediaPipe"],
  },
  {
    name: "Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "Classification", "Regression", "Time-Series Forecasting"],
  },
  {
    name: "Backend & Cloud",
    skills: ["Azure OpenAI", "AWS Bedrock", "FastAPI", "RESTful APIs", "Docker"],
  },
  {
    name: "Languages, Data & Tools",
    skills: ["Python", "NumPy", "Pandas", "Streamlit", "Git", "GitHub"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Amal Jyothi College of Engineering",
  university: "A.P.J. Abdul Kalam Technological University",
  period: "Aug 2018 — Jun 2022",
};

export const certifications: string[] = [
  "Google IT Automation with Python Specialization",
  "Architecting with Google Compute Engine Specialization",
  "Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
  "Open Source Software Development, Linux and Git Specialization",
  "HTML Essential Training",
];

export const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/notes", label: "Notes" },
  { href: "/#contact", label: "Contact" },
];
