export const enNavigation = [
  { label: 'Home', href: '#inicio' },
  { label: 'Specialties', href: '#especialidades' },
  { label: 'Projects & Demos', href: '#proyectos' },
  { label: 'Experience', href: '#trayectoria' },
]

export const enProfile = {
  name: 'Tadeo Leon',
  brand: 'TADEO.DEV',
  statusLabel: 'System Online',
  badge: '— Applied AI & Software Engineer | Data Science & Backend',
  title: "Hi, I'm Tadeo Leon",
  subtitle:
    'Software Developer at the National Judicial Branch of Argentina and builder of systems powered by Generative Artificial Intelligence (multi-model LLM & Vision orchestration). Combining university degrees in Programming and Data Science with solid proficiency in Python, Laravel, Relational Databases, and Dockerized environments.',
  ctas: {
    primary: { label: 'View Systems & Demos', href: '#proyectos' },
    secondary: { label: 'Download CV (PDF)', href: undefined },
  },
  photo: '/images/profile.png',
  photoPlaceholder: 'PROFESSIONAL PROFILE PHOTO OR MAIN COMPOSITION',

  pillars: [
    { id: 'ai', label: 'AI & Multi-LLMs', description: 'AI Orchestration & Vision' },
    { id: 'data', label: 'Python & Data', description: 'Pandas, NumPy, SQL' },
    { id: 'local-first', label: 'React & Local-First', description: 'Web, Android, Sync' },
    { id: 'backend', label: 'PHP / Laravel & Docker', description: 'Backend & Containers' },
  ],
}

export const enSpecialties = [
  {
    id: 'applied-ai',
    title: 'Generative AI & Multi-Model Orchestration',
    description:
      'Model-agnostic integration of AI engines and LLMs (Gemini, Claude, OpenAI, and local models) via API for computer vision, intelligent document extraction, and production workflow automation.',
  },
  {
    id: 'data-science',
    title: 'Data Science & SQL Databases',
    description:
      'Statistical analysis and data processing with Python (Pandas, NumPy, Matplotlib) paired with relational database design, optimization, and management (MySQL, PostgreSQL, and SQLite).',
  },
  {
    id: 'local-first',
    title: 'Software Development & Local-First Architecture',
    description:
      'Building critical management systems in PHP/Laravel, TypeScript, Node.js, and React, focusing on visual symmetry (UX/UI) and cross-platform Windows/Android synchronization.',
  },
  {
    id: 'infrastructure',
    title: 'Docker, Virtualized Environments & Diagnostics',
    description:
      'Deploying reproducible development environments with Docker and virtual machines, backed by 10+ years of root-cause diagnostics in IT infrastructure and networks.',
  },
]

export const enDifferential = {
  title: 'Software Engineering, Data & Applied AI: My Edge',
  body: 'I combine building critical management systems at the National Judicial Branch of Argentina (Laravel, SQL, and Docker) with a strong academic foundation at UNaB (Programming Graduate with an 8.50 GPA and 75% completed in Data Science with an 8.33 GPA). My 10+ prior years solving IT infrastructure give me a sharp analytical mindset to diagnose root-cause errors and design AI solutions that solve real operational problems.',
}

export const enProjects = [
  {
    id: 'nodo-inventory',
    title: 'NODO INVENTORY',
    subtitle:
      'Cross-platform Inventory System (Windows + Android) with Local-First Synchronization and AI.',
    repo: 'https://github.com/TadeoLeonFerenese/Nodo',
    badges: ['Active SQLite', 'Wi-Fi Direct :4545', 'AI Engine: gemini-3.5-flash'],
    details: [
      'Full evolution of the UNaB university thesis ("Stockeate"). Runs natively and synchronized on Windows (Central Node) and Android.',
      'Cloudless Synchronization: Custom engine (Wi-Fi Direct Local Engine) opening a local server (port 4545) pairing Android phones on the same network via QR code.',
      'AI Vision Module: Google Gemini integration (gemini-3.5-flash) in "Delivery Notes" to capture paper receipts/invoices and automatically extract items to stock.',
      'Core features: barcode camera scanner, minimum stock threshold alerts, movement history (timestamped entries/exits), and local API key management.',
    ],
    pipeline: [
      'Invoice Photo / Android Scan',
      'Gemini 3.5 Flash Processing',
      'Wi-Fi Sync Port 4545',
      'Local SQLite / PostgreSQL DB',
    ],
    media: [
      {
        type: 'video',
        label: 'ANDROID DEMO: Real-time synchronization and AI receipt extraction',
        aspect: '9/19.5',
        src: '/videos/projects/nodo.mp4',
      },
      {
        type: 'device-desktop',
        label: 'Desktop Catalog view with barcode lookup and local status',
        aspect: '16/10',
        src: '/images/projects/nodo/windows-catalogo.jpg',
      },
      {
        type: 'device-desktop',
        label: 'Inventory Movement History (stock in and stock out logs)',
        aspect: '16/10',
        src: '/images/projects/nodo/windows-movimientos.jpg',
      },
      {
        type: 'device-desktop',
        label: 'AI Module for receipt capture and automated stock extraction',
        aspect: '16/10',
        src: '/images/projects/nodo/windows-remito-ia.jpg',
      },
    ],
  },
  {
    id: 'bunker-notas',
    title: 'BUNKER NOTAS',
    subtitle:
      'Local-First Android application for secure notes, advanced customization, and AI assistance.',
    repo: 'https://github.com/TadeoLeonFerenese/bunker-notas',
    badges: ['Android APK', 'Security & Privacy', 'AI Assistant', 'Dogfooding: Daily Use'],
    details: [
      'Built to solve a genuine daily personal organization need without exposing private data to third-party servers.',
      'Key features: tab categorization (All, Pinned, Secure with lock), real-time search, rich markdown editor, reminders, voice notes, and images.',
      'Customization & AI: integrated AI settings menu, backup system, 5 theme palette selector, and custom wallpapers.',
    ],
    media: [
      {
        type: 'video',
        label: 'ANDROID DEMO: Walkthrough of Bunker Notas, biometric security and AI assistant',
        aspect: '9/19.5',
        src: '/videos/projects/bunker-notas.mp4',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 1: Main notes grid with categories and stickers',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 2: Long note editing/reading view',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 3: Dropdown menu showing AI Config, Backup and Themes',
        aspect: '9/19.5',
      },
    ],
  },
  {
    id: 'poder-judicial',
    title: 'NATIONAL JUDICIAL BRANCH',
    subtitle: 'Critical Software Development & Maintenance (Planning Directorate).',
    badges: ['Private Code / Institutional Confidentiality'],
    confidential: true,
    details: [
      'Evolutionary maintenance, bug fixing, and updating frontend views and backend business logic in PHP and Laravel.',
      'Systems involved: EDA, Judicial Training School, Internal Audit Management (UAI), and Judicial Vehicle Fleet Registry.',
      'Relational database management and isolated local development and test environments using Docker and virtual machines in Oracle VirtualBox.',
    ],
    media: [],
  },
  {
    id: 'pedimon',
    title: 'PEDIMON',
    subtitle:
      'My very first web page (Early NUCBA Project). Interactive e-commerce with dynamic catalog and functional shopping cart.',
    demo: 'https://pedimon-juee-60loepjfe-tadeoleonfereneses-projects.vercel.app/',
    stack:
      'JavaScript (ES6+), HTML5, CSS3 / Responsive Web Design, deployed in production on Vercel.',
    badges: ['First Web / Origin Milestone', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vercel'],
    details: [
      'My first web page: the starting point where I took my first steps building layouts and programming browser logic during the Coding Bootcamp (NUCBA).',
      'While simple compared to my current production systems, it delivers 100% on its goal: dynamic catalog, interactive shopping cart, and live deployment on Vercel.',
    ],
    media: [
      {
        type: 'image',
        label: 'LIVE INTERACTIVE VIEW: Browse Pedimon directly inside the viewer or open it in full screen',
        aspect: '16/9',
      },
    ],
  },
]

export const enExperience = [
  {
    role: 'Software Developer (PHP/Laravel)',
    company: 'National Judicial Branch of Argentina (Planning Directorate)',
    period: 'Jun 2025 – Present',
  },
  {
    role: 'Specialized Technical Support Analyst',
    company: 'National Judicial Branch (General IT Directorate)',
    period: 'Nov 2020 – May 2025',
  },
  {
    role: 'Technical Support Analyst',
    company: 'Pentacom S.A. (IT Innovation)',
    period: 'Mar 2015 – Nov 2020',
  },
]

export const enEducation = [
  {
    title: 'University Degree in Data Science',
    institution: 'National University Guillermo Brown (UNaB)',
    period: 'Feb 2025 – Present',
    progress: 75,
    average: 8.33,
    status: '75% Completed',
    notes: 'Focus on Statistics, Python, Pandas, NumPy, Matplotlib.',
  },
  {
    title: 'Associate Degree in Computer Programming',
    institution: 'National University Guillermo Brown (UNaB)',
    period: '2022 – Nov 2025',
    progress: 100,
    average: 8.5,
    status: 'Graduated (100%)',
    notes: 'Approved thesis: "Stockeate" / current "Nodo".',
  },
  {
    title: 'Full Stack Programming (MERN)',
    institution: 'Coding Bootcamp (NUCBA)',
    period: '2020 – 2021',
    progress: 100,
    notes: 'MongoDB, Express, React, Node.js.',
  },
]

export const enContact = {
  location: 'Buenos Aires, Argentina',
  email: 'leonferenesetadeo@gmail.com',
  phone: '(+54) 11 3065 0188',
  linkedin: 'https://www.linkedin.com/in/tadeo-leon-ferenese/',
  github: 'https://github.com/TadeoLeonFerenese',
}

export const enUI = {
  nav: {
    contactCTA: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    spanish: 'Spanish',
    english: 'English',
  },

  specialties: {
    badge: 'Technical Domains & Capabilities',
    heading: 'Specialties & Engineering Edge',
    subtitle: 'From low-level server diagnostics to production multimodal AI models.',
  },
  projects: {
    badge: 'Projects & Systems in Production',
    heading: 'Production Systems & Featured Work',
    subtitle: 'Interactive case studies with architectural breakdowns, media demos, and production code.',
    tabs: {
      video: 'Video Demo',
      captures: 'Screenshot Gallery',
      architecture: 'Architecture & Flow',
    },
    desktopSection: 'Desktop Environment',
    mobileSection: 'Android Application',
    technicalDetails: 'Technical Capabilities & Details',
    pipelineTitle: 'Architecture Pipeline',
    confidentialBadge: 'Restricted Access',
    confidentialTitle: 'Institutional Information & Private Code',
    confidentialBanner:
      'Due to confidentiality agreements and operational criticality with the National Judicial Branch, repositories and screenshots are kept confidential.',
    scopeTitle: 'Scope & Responsibilities',
  },
  timeline: {
    badge: 'Professional Track Record & Education',
    heading: 'Experience & Education',
    subtitle: '+10 years solving critical infrastructure and software engineering, combined with outstanding university degrees in Programming and Data Science.',
    experienceTitle: 'Work Experience',
    educationTitle: 'Education & Academic Metrics',
    academicProgress: 'Academic Progress',
    gpaLabel: 'GPA',
  },
  footer: {
    badge: 'Direct Contact & Social',
    heading: "Let's build robust software together",
    subtitle: 'Available for software engineering challenges, Local-First architectures, and applied Artificial Intelligence solutions.',
    emailTitle: 'Email',
    emailAction: 'Send message',
    whatsappTitle: 'WhatsApp / Direct Phone',
    whatsappAction: 'Start conversation',
    locationTitle: 'Location & Availability',
    timezoneNote: 'Timezone UTC-3 (Remote / Hybrid)',
    copyright: 'All rights reserved.',
  },
}
