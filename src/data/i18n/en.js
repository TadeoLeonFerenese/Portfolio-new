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
  badge: '— Software & Applied AI Engineer | Data Science (75%)',
  title: "Hi, I'm Tadeo Leon",
  subtitle:
    'Software Engineer at the National Judicial Branch of Argentina and creator of Local-First cross-platform applications powered by Artificial Intelligence (LLMs & Vision). Combining academic background in Programming and Data Science with 10+ years of solid experience in critical infrastructure.',
  ctas: {
    primary: { label: 'View Systems & Demos', href: '#proyectos' },
    secondary: { label: 'Download CV (PDF)', href: undefined },
  },
  photo: '/images/profile.png',
  photoPlaceholder: 'PROFESSIONAL PROFILE PHOTO OR MAIN COMPOSITION',

  pillars: [
    { id: 'ai', label: 'AI / Gemini API', description: 'LLM & OCR Integration' },
    { id: 'data', label: 'Python & Data', description: 'Pandas, NumPy, SQL' },
    { id: 'local-first', label: 'React & Local-First', description: 'Web, Android, Sync' },
    { id: 'backend', label: 'PHP / Laravel & Linux', description: 'Backend & Infrastructure' },
  ],
}

export const enSpecialties = [
  {
    id: 'applied-ai',
    title: 'Applied AI & Automation',
    description:
      'Integration of multimodal models (gemini-3.5-flash) via API for computer vision (intelligent item extraction from delivery notes and invoices) and contextual production assistants.',
  },
  {
    id: 'data-science',
    title: 'Data Science & SQL Engines',
    description:
      'Statistical analysis with Python (Pandas, NumPy, Matplotlib) and relational database design in PostgreSQL, MySQL, and SQLite (managed with DBeaver and TablePlus).',
  },
  {
    id: 'local-first',
    title: 'Local-First & Web/Mobile Architecture',
    description:
      'Development in PHP, Laravel, Node.js, and React.js. Building custom Wi-Fi Direct synchronization engines via local sockets/ports between Windows and Android without cloud dependencies.',
  },
  {
    id: 'infrastructure',
    title: 'Critical Infrastructure & Hardware Domain',
    description:
      '10 years of real-world mastery in Linux administration, Docker, virtualized environments (Oracle VirtualBox), Apache/Nginx, and advanced server and network diagnostics.',
  },
]

export const enDifferential = {
  title: 'From Hardware to Code? My Edge in Your Team',
  body: 'Unlike standard profiles that only interact with surface-level code, I bring 10 years of keeping critical systems running under pressure (Pentacom S.A. and the Judicial Branch IT Directorate), paired with an outstanding academic foundation at UNaB (Graduated in Programming with an 8.50 GPA and 75% completed in Data Science with an 8.33 GPA).',
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
        label: 'DEMO VIDEO: Real-time synchronization between Windows PC and Android + AI Invoice Reading',
        aspect: '16/9',
      },
      {
        type: 'device-desktop',
        label: 'WINDOWS SCREENSHOT 1: Profile & Sync Panel showing Active SQLite, Gemini 3.5 Flash setup and Wi-Fi Server with QR',
        aspect: '16/10',
      },
      {
        type: 'device-desktop',
        label: 'WINDOWS SCREENSHOT 2: Clean desktop catalog view',
        aspect: '16/10',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 1: Catalog with prices and stock',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 2: Movement History (Stock In / Stock Out)',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'ANDROID SCREENSHOT 3: AI Invoice Entry',
        aspect: '9/19.5',
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
        label: 'DEMO VIDEO: Smooth walkthrough of Bunker Notas, theme switcher, unlocking secure notes and using the floating AI button',
        aspect: '16/9',
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
      'Systems involved: Judicial Training School, Internal Audit Management (UAI), and Judicial Vehicle Fleet Registry.',
      'Local environment and isolated test staging using virtual machines in Oracle VirtualBox.',
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
