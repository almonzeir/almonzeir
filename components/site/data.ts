export const profile = {
  name: "Almonzer Hamid",
  nameAr: "المنذر حامد",
  role: "Machine Learning Engineer",
  focus: "Arabic NLP & LLMs",
  email: "monzeer2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/almonzer-hamid-aa8693249",
  github: "https://github.com/almonzeir",
  cv: "/Almonzer_Hamid_CV.pdf",
  location: "Malaysia",
};

export type Metric = { label: string; value: string; note: string };

export const heroMetrics: Metric[] = [
  { label: "arabic_rx_ocr.accuracy", value: "97.9%", note: "handwritten prescriptions, 15 MB INT8" },
  { label: "iris_screening.roc_auc", value: "0.946", note: "56 held-out patients" },
  { label: "lenvra.ocr_cost", value: "$0.05", note: "per 120-page scanned book" },
  { label: "mihna.review_time", value: "-68%", note: "spoken-interview scoring" },
];

export type Project = {
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  stack: string[];
  stat?: { value: string; label: string };
  links?: { label: string; href: string }[];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Offline OCR for handwritten Arabic prescriptions",
    kicker: "Afia Healthcare · 2026",
    summary:
      "A recognition model that reads handwritten Arabic prescriptions on cheap Android phones, with no internet connection.",
    points: [
      "CRNN: ResNet encoder, BiGRU sequence model, CTC loss",
      "Quantised to INT8 and exported to TFLite and ONNX",
      "Runs on low-end phone CPUs used by pharmacies in Sudan",
    ],
    stack: ["PyTorch", "CTC", "INT8", "TFLite", "ONNX"],
    stat: { value: "97.9%", label: "accuracy at 15 MB" },
    featured: true,
  },
  {
    title: "Diabetes screening from iris images",
    kicker: "Afia Healthcare · preprint",
    summary:
      "A dual-geometry EfficientNet-B3 ensemble that reads both the raw iris image and its polar map to screen for high blood glucose without a needle.",
    points: [
      "Patient-level train/test splits across 196 subjects to stop data leakage",
      "92.86% accuracy on 56 held-out patients",
      "Images anonymised with SHA-256 before training",
    ],
    stack: ["PyTorch", "EfficientNet-B3", "Medical imaging"],
    stat: { value: "0.946", label: "ROC-AUC" },
    links: [{ label: "Preprint", href: "https://zenodo.org/records/19321167" }],
    featured: true,
  },
  {
    title: "Lenvra Read",
    kicker: "Founder · live pilot",
    summary:
      "Turns a nonfiction PDF into guided reading sections that follow the author's argument, with every point linked back to the page it came from. Full English and Arabic (right-to-left).",
    points: [
      "Three-step LLM pipeline: write, fact-check, repair",
      "Structured JSON output with automatic checks that every cited page exists",
      "Models picked through a 14-section evaluation of accuracy, cost and speed",
    ],
    stack: ["LLMs", "Hybrid OCR", "TypeScript", "RTL"],
    stat: { value: "$0.05", label: "OCR cost per book" },
    links: [{ label: "Live app", href: "https://lenvra-read-app.vercel.app" }],
    featured: true,
  },
  {
    title: "Mihna AI",
    kicker: "Lead AI engineer · 2025",
    summary:
      "Voice-first candidate evaluation. Whisper transcribes spoken interview answers and an LLM scores them against 10 competencies.",
    points: [
      "Cut reviewer time by 68%",
      "Fallback routing across Llama 3.1, Qwen and Llama 3.3 keeps screening up through provider outages",
    ],
    stack: ["Whisper", "Llama", "Qwen", "LLM evaluation"],
    stat: { value: "-68%", label: "review time" },
  },
  {
    title: "SaySimple",
    kicker: "Google AI Hackathon APAC · finalist",
    summary:
      "Simplifies dense text and translates it into 50+ languages, including 22 regional Arabic dialects.",
    points: ["Dialect-aware prompting for Arabic varieties"],
    stack: ["Gemini", "Next.js"],
    links: [{ label: "Code", href: "https://github.com/almonzeir/GeminiSimplify" }],
    image: "/Images/say-simple.png",
  },
  {
    title: "Mamba-3 MIMO in PyTorch",
    kicker: "Open source",
    summary:
      "A readable PyTorch implementation of the Mamba-3 multi-input, multi-output state-space layer, written to study how it works.",
    points: ["Plain PyTorch, no custom kernels"],
    stack: ["PyTorch", "State-space models"],
    links: [{ label: "Code", href: "https://github.com/almonzeir/Mamba3-MIMO-PyTorch" }],
  },
  {
    title: "MaiKedah",
    kicker: "Final year project · grade A",
    summary:
      "Tourist app and analytics dashboard for Majlis Bandaraya Alor Setar, on a shared Supabase backend. Shown at a regional government technology summit.",
    points: ["Flutter app plus TourStat admin dashboard"],
    stack: ["Flutter", "Supabase", "PostgreSQL"],
    image: "/Images/maikedah.png",
  },
  {
    title: "UltraFolio",
    kicker: "Co-founder",
    summary: "Turns a CV into an interactive portfolio site. 100+ active users.",
    points: ["LLM-based CV parsing"],
    stack: ["Next.js", "Supabase", "LLMs"],
    links: [{ label: "Try it", href: "https://ultrafilo.vercel.app" }],
  },
];

export const research = {
  title: "Measuring and closing the Sudanese Arabic gap in large language models",
  blurb:
    "Sudanese Arabic is spoken by tens of millions of people, yet it is missing from the main dialect benchmarks. Recent work shows GPT-4.1 and Gemini 2.5 Flash score under 11 BLEU translating into Sudanese. I want to measure how well LLMs understand it, and adapt small open models to close the gap without losing Modern Standard Arabic.",
  questions: [
    "How large is the gap between Sudanese Arabic, MSA and Egyptian for current LLMs?",
    "Can LoRA or QLoRA on a model of 8B parameters or fewer close it on one GPU?",
    "How much MSA ability does the adapted model lose, and what reduces that forgetting?",
  ],
};

export type Publication = { authors: string; title: string; venue: string; href: string; linkLabel: string };

export const publications: Publication[] = [
  {
    authors: "Z. Zainol, B. Gibba, A. A. B. Abdelgadir, A. Abdallah, M. S. Nabi, B. Riskhan",
    title: "Smartphone Use, Study Habits, and Academic Outcomes: Machine Learning Approaches to GPA Prediction",
    venue: "Smart, Inclusive, and Sustainable Digital Societies, Chapter 15. Routledge, 2026",
    href: "https://doi.org/10.1201/9781042012725-15",
    linkLabel: "DOI",
  },
  {
    authors: "M. M. Ahmed, A. H. S. Abdallah",
    title: "Detecting Diabetes Mellitus from Iris Imagery using Dual-Geometry CNN Ensembles",
    venue: "Preprint, Zenodo, 2026",
    href: "https://zenodo.org/records/19321167",
    linkLabel: "Zenodo",
  },
];

export type Role = { org: string; title: string; when: string; where: string; points: string[] };

export const experience: Role[] = [
  {
    org: "Afia Healthcare",
    title: "Junior Machine Learning Engineer (industrial training)",
    when: "Mar 2026 – Sep 2026",
    where: "Remote · Khartoum",
    points: [
      "Built the offline Arabic prescription OCR model (97.9% accuracy, 15 MB)",
      "Built the iris-based diabetes screening pipeline and co-authored the preprint",
    ],
  },
  {
    org: "Appen (Malaysia)",
    title: "AI Trainer",
    when: "May 2026 – Aug 2026",
    where: "Remote",
    points: [
      "Trained 40+ multilingual annotators on data quality, sampling and LLM safety evaluation",
      "Wrote evaluation SOPs for prompt alignment and risk queries; annotation ran about 25% faster",
    ],
  },
  {
    org: "Weekly Diplomatic Majlis, Kuala Lumpur",
    title: "Invited speaker",
    when: "Jul 2026",
    where: "Hosted by the ambassadors of Oman, Iraq, Qatar and Libya",
    points: ["Talked about the Transformer, what current models can do, and why the Arab world needs its own Arabic AI capacity"],
  },
  {
    org: "Malaysia Madani STEM Programme",
    title: "Workshop facilitator",
    when: "Dec 2025",
    where: "Kedah",
    points: ["Taught 3D modelling to 70+ secondary students from rural, low-income communities"],
  },
  {
    org: "Sudanese Students Association, AIU",
    title: "Head of Academic Affairs",
    when: "2023 – 2024",
    where: "Alor Setar",
    points: ["Ran ML and NLP bootcamps for 50+ students and set up peer mentoring"],
  },
];

export const education = {
  school: "Albukhary International University",
  degree: "BSc Computer Science (Honours), Data Science",
  when: "2022 – 2026",
  detail: "CGPA 3.37 · full Albukhary Foundation scholarship",
  grades: ["Artificial Intelligence A", "Probability & Statistics A", "Machine Learning A-", "Discrete Maths A", "Final Year Project A / A"],
};

export const awards = [
  "Google AI Hackathon APAC 2025, finalist",
  "National CTF 2024, 1st in round 1, 4th in finals",
  "Albukhary Foundation full scholarship, 2022 – 2026",
];

export const skills: { group: string; items: string[] }[] = [
  { group: "ML & NLP", items: ["PyTorch", "Transformers", "LoRA / QLoRA", "CRNN / CTC", "Whisper", "LLM evaluation"] },
  { group: "Deployment", items: ["INT8 quantisation", "ONNX", "TFLite", "FastAPI", "Docker"] },
  { group: "Software", items: ["Python", "TypeScript", "Next.js", "Flutter", "PostgreSQL", "Supabase"] },
  { group: "Languages", items: ["Arabic (native, Sudanese)", "English (fluent)", "Malay (basic)"] },
];
