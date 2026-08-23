export const personalInfo = {
  name: "Pintu Kumar Gupta",
  shortName: "Pintu",
  initials: "PK",
  role: "Backend Software Engineer",
  tagline: "Real-time backend systems for state-government platforms — Kafka, Flink, Spring Boot, in production.",
  bio: "Backend Software Engineer with 3+ years of experience building scalable microservices, real-time data pipelines, and cloud-native applications. Currently at VassarLabs, building mission-critical government platforms that process millions of data points daily.",
  bioLong: `I'm a backend software engineer currently at VassarLabs IT Solutions, where I build real-time data processing systems for state government platforms across India. My work spans Kafka-based event streaming, Apache Flink pipelines, Apache Storm topologies, and Spring Boot microservices deployed on production Ubuntu servers.

I graduated from IIIT Sonepat in 2023 with a B.Tech in Computer Science (CGPA: 8.34/10). During my internship at VassarLabs I worked on User Management systems — and was converted to a full-time Software Engineer after graduation.

Outside work I'm deeply interested in distributed systems architecture, cloud-native development, and how AI tools are reshaping the way engineers build software. I hold Oracle Cloud certifications in AI Foundations and Generative AI Professional (2025).`,
  location: "Hyderabad, India",
  email: "pintukrgupta7@gmail.com",
  phone: "+91 9060419073",
  github: "https://github.com/pintukrgupta",
  linkedin: "https://linkedin.com/in/pintu-k-gupta-a7a2181b6",
  website: "https://pintukrgupta.dev",
  available: true,
  roles: [
    "Java Backend Engineer",
    "Spring Boot Specialist",
    "Microservices Developer",
    "Streaming Systems Engineer",
    "AI-Enabled Developer",
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "Production Systems", value: "5+" },
    { label: "Certifications", value: "4" },
  ],
};

export const experience = [
  {
    id: "vassarlabs-sde",
    company: "VassarLabs IT Solutions Pvt. Ltd.",
    role: "Software Engineer — Java Backend Developer",
    period: "Aug 2023 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    current: true,
    description:
      "Building production-grade data platforms and microservices for state government systems in India.",
    highlights: [
      "Built Flink-based streaming pipelines integrated with Spring Boot microservices for the WRIMS water resource management platform",
      "Designed and deployed the Heatwave Monitoring System using Apache Storm, Kafka, and Cassandra — processing real-time meteorological events",
      "Developed backend modules (core-platform, rainfall, forecast, reservoir) for the Odisha region government platform",
      "Designed Python-based CPU/memory/thread monitoring tool generating time-series visualizations for APDIMS production servers",
      "Integrated ECMWF/IMD forecast data pipelines using FTP, Python scripts, and Apache Flink jobs",
      "Built and deployed microservices for DIMS & OD-WRIMS using Java, Spring Boot, PostgreSQL, and Cassandra",
      "Orchestrated multi-service deployments (UM Backend, UI Prod/Staging, Keycloak) on Ubuntu servers via SSH/SCP",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Flink",
      "Apache Storm",
      "Kafka",
      "Cassandra",
      "PostgreSQL",
      "Docker",
      "Python",
      "Ubuntu",
    ],
    impact: "Powering real-time climate and disaster management data for Odisha state government",
    color: "blue",
  },
  {
    id: "vassarlabs-intern",
    company: "VassarLabs IT Solutions Pvt. Ltd.",
    role: "Software Development Engineer Intern",
    period: "Jan 2023 – Jul 2023",
    location: "Hyderabad, India",
    type: "Internship",
    current: false,
    description: "Contributed to backend systems for environmental monitoring platforms.",
    highlights: [
      "Implemented User Management backend using Spring Boot, PostgreSQL, MySQL, and Excel export",
      "Explored and contributed to Python and SQL scripts for the Forest Fire Spreading simulation module",
    ],
    technologies: ["Spring Boot", "PostgreSQL", "MySQL", "Python", "SQL"],
    impact: "Contributed to environmental monitoring and forest fire management systems",
    color: "indigo",
  },
  {
    id: "ideadunes-intern",
    company: "Ideadunes Software Services",
    role: "Web Development Intern",
    period: "Jan 2022 – May 2022",
    location: "Remote",
    type: "Internship",
    current: false,
    description:
      "Contributed to CRM platforms and SEO optimization for client web projects.",
    highlights: [
      "Contributed to CRM development and SEO optimization for multiple client web projects",
      "Worked on performance testing, bug fixing, and UI enhancements",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "SEO", "Performance Testing"],
    impact: "Improved web performance and client satisfaction scores",
    color: "violet",
  },
];

export const education = {
  institution: "Indian Institute of Information Technology, Sonepat",
  degree: "B.Tech in Computer Science and Engineering",
  period: "Aug 2019 – Jun 2023",
  cgpa: "8.34 / 10",
  coursework: [
    "Object Oriented Programming",
    "Data Structures & Algorithms",
    "Databases",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Discrete Mathematics",
  ],
};

export const skillCategories = [
  {
    id: "backend",
    category: "Backend",
    description: "Core server-side engineering",
    icon: "Server",
    skills: [
      { name: "Java", level: 90, years: "3+" },
      { name: "Spring Boot", level: 88, years: "2.5+" },
      { name: "Spring Framework", level: 84, years: "2+" },
      { name: "Microservices", level: 85, years: "2+" },
      { name: "REST APIs", level: 90, years: "3+" },
      { name: "Python", level: 74, years: "2+" },
    ],
  },
  {
    id: "streaming",
    category: "Streaming & Data",
    description: "Real-time data processing",
    icon: "Zap",
    skills: [
      { name: "Apache Kafka", level: 80, years: "1.5+" },
      { name: "Apache Flink", level: 78, years: "1+" },
      { name: "Apache Storm", level: 75, years: "1+" },
      { name: "Data Pipelines", level: 80, years: "1.5+" },
    ],
  },
  {
    id: "databases",
    category: "Databases",
    description: "Relational and NoSQL storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 85, years: "2.5+" },
      { name: "MySQL", level: 82, years: "3+" },
      { name: "Cassandra", level: 78, years: "1.5+" },
      { name: "CQL", level: 75, years: "1.5+" },
    ],
  },
  {
    id: "devops",
    category: "DevOps & Tools",
    description: "Infrastructure and automation",
    icon: "Settings",
    skills: [
      { name: "Docker", level: 78, years: "1.5+" },
      { name: "Linux / Ubuntu", level: 82, years: "2+" },
      { name: "Git & GitHub", level: 88, years: "4+" },
      { name: "SSH / SCP", level: 80, years: "2+" },
    ],
  },
  {
    id: "cloud",
    category: "Cloud & AI",
    description: "Cloud platforms and AI tools",
    icon: "Cloud",
    skills: [
      { name: "Oracle Cloud (OCI)", level: 72, years: "1+" },
      { name: "Google Cloud", level: 65, years: "0.5+" },
      { name: "Generative AI", level: 70, years: "1+" },
      { name: "AI-Assisted Dev", level: 85, years: "1+" },
    ],
  },
  {
    id: "languages",
    category: "Languages",
    description: "Programming languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90, years: "3+" },
      { name: "C / C++", level: 78, years: "4+" },
      { name: "Python", level: 74, years: "2+" },
      { name: "JavaScript", level: 70, years: "2+" },
    ],
  },
];

export const projects = [
  {
    id: "wrims",
    title: "Weather Forecasting Platform",
    subtitle: "WRIMS — Water Resource Information Management System",
    description:
      "Real-time weather and water resource data platform serving Odisha state government. Processes ECMWF/IMD forecast data through Flink streaming pipelines integrated with Spring Boot microservices.",
    problem:
      "State government lacked a unified, real-time platform for water resource monitoring and weather forecast data integration.",
    solution:
      "Built a modular Spring Boot microservices architecture with Flink streaming for live data ingestion, covering rainfall forecasting, reservoir levels, and IMD forecast integration.",
    tech: ["Java", "Spring Boot", "Apache Flink", "Python", "PostgreSQL", "FTP"],
    category: "Backend Systems",
    status: "Production",
    featured: true,
    highlight: "Primary",
    github: null,
    demo: null,
  },
  {
    id: "heatwave",
    title: "Heatwave Monitoring System",
    subtitle: "Multi-server real-time event processing",
    description:
      "Distributed heatwave event detection and alerting system processing meteorological data streams in real time using Apache Storm, Kafka, and Cassandra.",
    problem:
      "Need for low-latency detection and alerting of heatwave events across multiple simultaneous data streams.",
    solution:
      "Designed a multi-server Storm topology with Kafka as the event backbone and Cassandra for high-throughput writes. Configured production-grade properties for stable event ingestion.",
    tech: ["Apache Storm", "Kafka", "Cassandra", "Java", "Spring Boot"],
    category: "Streaming Systems",
    status: "Production",
    featured: true,
    highlight: "Featured",
    github: null,
    demo: null,
  },
  {
    id: "dims",
    title: "DIMS & OD-WRIMS Platform",
    subtitle: "Disaster Information Management System",
    description:
      "Microservices suite for disaster management and water resource information management for Odisha. Includes Keycloak-based authentication, PostgreSQL and Cassandra backends.",
    problem:
      "Siloed government systems with no unified data layer for disaster management operations.",
    solution:
      "Developed modular Spring Boot microservices with role-based access via Keycloak, deployed on Ubuntu servers with automated SSH-based orchestration.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Cassandra", "Docker", "Keycloak", "Ubuntu"],
    category: "Microservices",
    status: "Production",
    featured: true,
    highlight: "Featured",
    github: null,
    demo: null,
  },
  {
    id: "cpu-monitor",
    title: "CPU & Memory Monitoring Tool",
    subtitle: "System resource observability for production servers",
    description:
      "Python-based monitoring agent that generates time-series visualizations (PNG) of CPU usage, memory utilization, and thread statistics for production backend services.",
    problem:
      "No existing observability into CPU/memory/thread behavior across APDIMS and DIMS production machines.",
    solution:
      "Built a lightweight monitoring script that samples system metrics, generates CSV logs, and produces graphical reports as PNG files for scheduled reporting.",
    tech: ["Python", "CSV Processing", "Data Visualization", "Linux"],
    category: "DevOps Tools",
    status: "Production",
    featured: false,
    highlight: null,
    github: null,
    demo: null,
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    subtitle: "Web-based music player",
    description:
      "Full-featured music player with playlist management, audio controls, and a Spotify-inspired UI built with vanilla HTML, CSS, and JavaScript.",
    problem: "Hands-on learning project for DOM manipulation and audio APIs.",
    solution: "Built custom audio controls, playlist management, and responsive UI without any frontend frameworks.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Apps",
    status: "Completed",
    featured: false,
    highlight: null,
    github: "https://github.com/pintukrgupta",
    demo: "https://listen-musicplayer.netlify.app/",
  },
  {
    id: "stock-market",
    title: "Stock Market Analysis",
    subtitle: "Nifty-50 financial trend analysis",
    description:
      "Data analysis tool for tracking and visualizing financial trends across multiple Nifty-50 stocks.",
    problem: "Manual stock tracking is time-consuming and lacks visual insight.",
    solution: "Built data processing scripts that aggregate and visualize stock performance patterns.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    category: "Data Analysis",
    status: "Completed",
    featured: false,
    highlight: null,
    github: "https://github.com/pintukrgupta",
    demo: null,
  },
];

export const certifications = [
  {
    id: "oci-ai-foundations",
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    badge: "OCI",
    credentialId: "OCI-AI-2025",
    color: "from-red-500/15 to-orange-500/15",
    borderColor: "border-red-500/25",
    textColor: "text-red-400",
    bgIcon: "from-red-600 to-orange-600",
    skills: ["AI Fundamentals", "Oracle Cloud", "Machine Learning Concepts"],
  },
  {
    id: "oci-gen-ai",
    title: "OCI 2025 Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
    badge: "OCI",
    credentialId: "OCI-GENAI-2025",
    color: "from-orange-500/15 to-amber-500/15",
    borderColor: "border-orange-500/25",
    textColor: "text-orange-400",
    bgIcon: "from-orange-600 to-amber-600",
    skills: ["Generative AI", "LLM APIs", "RAG", "Prompt Engineering"],
  },
  {
    id: "python-coursera",
    title: "Programming for Everybody — Python",
    issuer: "Coursera / University of Michigan",
    year: "2022",
    badge: "Coursera",
    credentialId: "COURSERA-PY-2022",
    color: "from-blue-500/15 to-cyan-500/15",
    borderColor: "border-blue-500/25",
    textColor: "text-blue-400",
    bgIcon: "from-blue-600 to-cyan-600",
    skills: ["Python", "Data Structures", "Web Scraping"],
  },
  {
    id: "google-cloud",
    title: "30 Days of Google Cloud",
    issuer: "Google Cloud",
    year: "2022",
    badge: "Google",
    credentialId: "GCP-30DAYS-2022",
    color: "from-green-500/15 to-teal-500/15",
    borderColor: "border-green-500/25",
    textColor: "text-green-400",
    bgIcon: "from-green-600 to-teal-600",
    skills: ["GCP Fundamentals", "Cloud Storage", "BigQuery"],
  },
];

export const freelancingServices = [
  {
    title: "Backend API Development",
    description:
      "Production-ready REST APIs using Java and Spring Boot with authentication, validation, rate limiting, and Swagger documentation.",
    icon: "Server",
    tags: ["Java", "Spring Boot", "REST"],
  },
  {
    title: "Microservices Architecture",
    description:
      "Design and implement loosely coupled microservices with service discovery, API gateways, and distributed tracing.",
    icon: "Layers",
    tags: ["Microservices", "Docker", "Spring Cloud"],
  },
  {
    title: "Data Processing Pipelines",
    description:
      "Real-time and batch data pipelines using Apache Kafka, Flink, and Storm for high-throughput event processing.",
    icon: "Zap",
    tags: ["Kafka", "Flink", "Storm"],
  },
  {
    title: "Database Design & Optimization",
    description:
      "Schema design, indexing strategy, and query optimization for PostgreSQL, MySQL, and Cassandra.",
    icon: "Database",
    tags: ["PostgreSQL", "MySQL", "Cassandra"],
  },
  {
    title: "Performance Optimization",
    description:
      "Profile and optimize backend services for throughput, latency, memory efficiency, and scalability under load.",
    icon: "TrendingUp",
    tags: ["Profiling", "JVM Tuning", "Caching"],
  },
  {
    title: "Technical Consultation",
    description:
      "Architecture reviews, technology stack selection, and system design sessions for startups and teams.",
    icon: "MessageSquare",
    tags: ["Architecture", "System Design", "Mentoring"],
  },
];

export const blogCategories = [
  {
    name: "Java & Spring Boot",
    slug: "java-spring-boot",
    description: "Deep dives into Java backend patterns and Spring Boot internals",
    icon: "Coffee",
    count: 0,
  },
  {
    name: "System Design",
    slug: "system-design",
    description: "Real-world architecture patterns and scalability strategies",
    icon: "Layout",
    count: 0,
  },
  {
    name: "Streaming Systems",
    slug: "streaming-systems",
    description: "Kafka, Flink, Storm — building real-time data systems",
    icon: "Zap",
    count: 0,
  },
  {
    name: "AI for Developers",
    slug: "ai-developers",
    description: "Using Claude, ChatGPT, and AI tools to build faster",
    icon: "Brain",
    count: 0,
  },
  {
    name: "Career Growth",
    slug: "career-growth",
    description: "Lessons from intern to engineer to consultant",
    icon: "TrendingUp",
    count: 0,
  },
  {
    name: "DevOps & Cloud",
    slug: "devops-cloud",
    description: "Docker, Linux, cloud deployments, and infrastructure",
    icon: "Cloud",
    count: 0,
  },
];

export const aiTools = [
  {
    name: "Claude Code",
    logo: "C",
    logoColor: "from-violet-600 to-purple-600",
    description:
      "My primary AI pair-programmer for architecture discussions, complex debugging, and code review sessions.",
    uses: [
      "System design and architecture planning",
      "Code review and refactoring guidance",
      "Complex debugging root cause analysis",
      "API and library documentation deep dives",
      "Technical writing and documentation",
    ],
  },
  {
    name: "ChatGPT",
    logo: "G",
    logoColor: "from-green-600 to-teal-600",
    description: "Quick lookups, concept explanations, and boilerplate scaffolding for new projects.",
    uses: [
      "Learning new APIs and frameworks quickly",
      "Concept explanations and comparisons",
      "Generating boilerplate and scaffolding",
      "Problem decomposition and planning",
      "SQL query generation and optimization",
    ],
  },
  {
    name: "GitHub Copilot",
    logo: "Gh",
    logoColor: "from-gray-600 to-zinc-700",
    description: "In-editor intelligent autocomplete for faster implementation and test generation.",
    uses: [
      "Intelligent code completion in IDE",
      "Unit and integration test generation",
      "Repetitive boilerplate automation",
      "Refactoring suggestions",
      "Inline documentation comments",
    ],
  },
];

export const journeyMilestones = [
  {
    year: "2019",
    title: "IIIT Sonepat",
    description: "Started B.Tech Computer Science. Discovered a passion for algorithms and backend systems.",
    icon: "GraduationCap",
    color: "blue",
  },
  {
    year: "2022",
    title: "First Industry Role",
    description: "Web Development Intern at Ideadunes — CRM work, performance testing, first exposure to professional code.",
    icon: "Code2",
    color: "indigo",
  },
  {
    year: "Jan 2023",
    title: "Joined VassarLabs",
    description: "SDE Intern — built User Management with Spring Boot and PostgreSQL. First microservices experience.",
    icon: "Briefcase",
    color: "violet",
  },
  {
    year: "Jun 2023",
    title: "B.Tech Graduate",
    description: "Graduated with CGPA 8.34/10. Solid foundation in CS fundamentals and OOP.",
    icon: "Award",
    color: "purple",
  },
  {
    year: "Aug 2023",
    title: "Full-Time Engineer",
    description: "Promoted to Software Engineer at VassarLabs — building Kafka, Flink, and Storm production systems.",
    icon: "Rocket",
    color: "blue",
  },
  {
    year: "2024–25",
    title: "Production Systems at Scale",
    description: "Leading WRIMS, DIMS, and Heatwave platforms. Expanded into Docker, distributed deployments, and system observability.",
    icon: "Server",
    color: "cyan",
  },
  {
    year: "2025",
    title: "OCI AI Certified",
    description: "Oracle Cloud AI Foundations + Generative AI Professional certifications. Integrating AI into development workflow.",
    icon: "Brain",
    color: "green",
  },
  {
    year: "Future",
    title: "Architect & Consultant",
    description: "Growing toward senior architect role and freelance consulting in distributed backend systems.",
    icon: "Target",
    color: "amber",
  },
];
