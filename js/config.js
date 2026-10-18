/**
 * DONOR - PERSONAL DEVELOPER PORTFOLIO CONFIGURATION
 * 100% Developer-focused credentials, skills, projects, and career milestones.
 */
const PortfolioConfig = {
  profile: {
    brandName: "donor.",
    fullName: "Donor",
    role: "Software Engineer & Full-Stack Systems Developer",
    tagline: "Engineering clean systems, robust APIs & modern web applications.",
    bio: "Software engineer specializing in full-stack web architecture, distributed systems, and modern frontend interfaces. I write readable, hand-crafted code with zero bloat, high performance, and mathematical precision.",
    location: "14.5995° N, 120.9842° E",
    locationName: "Manila, Philippines / Worldwide Remote",
    status: "Open to Full-Time Engineering Roles, Contracts & Collaborations",
    statusAvailable: true,
    email: "donor.developer.pro@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#resume-modal"
  },

  about: {
    lead: "I build software from the data layer to the user interface, ensuring fast load times, accessible design, and maintainable architecture.",
    paragraphs: [
      "My passion lies at the intersection of systems architecture and tactile user interfaces. I believe software should not only work reliably under heavy load, but also feel responsive and purposeful in the hands of users.",
      "Rather than relying on bloated site builders or heavyweight black-box frameworks, I prefer hand-crafted code, deep understanding of computer engineering principles, and edge-first deployment architectures.",
      "When I am not designing APIs or optimizing database queries, I actively experiment with real-time telemetry, WebGL visual engines, and developer tooling."
    ],
    highlights: [
      { label: "Focus", value: "Full-Stack Web & Systems Engineering" },
      { label: "Education", value: "B.S. in Computer Engineering" },
      { label: "Core Principles", value: "Clean Code, Zero Bloat, WCAG Accessibility" },
      { label: "Deployment", value: "Edge-First (Cloudflare Pages & Workers)" }
    ]
  },

  metrics: [
    { value: "04+", label: "Years Engineering", note: "From systems to frontend" },
    { value: "30+", label: "Repositories & Deploys", note: "Clean, audited codebases" },
    { value: "<50ms", label: "Edge Response", note: "Sub-second serverless execution" },
    { value: "100%", label: "Core Web Vitals", note: "Perfect Lighthouse benchmarks" }
  ],

  principles: [
    {
      number: "01",
      title: "No site builder bloat.",
      description: "No generic templates or hundreds of third-party plugins. Every component is designed and hand-coded to fit performance requirements and clean semantics."
    },
    {
      number: "02",
      title: "Hand-crafted clean code.",
      description: "Lean, readable, and strictly audited source code. That is why applications load in milliseconds, consume minimal memory, and maintain high Lighthouse scores."
    },
    {
      number: "03",
      title: "Systems-first mindset.",
      description: "A beautiful UI is only as good as the architecture underneath. Robust error handling, idempotent APIs, and structured data flow come first."
    },
    {
      number: "04",
      title: "Built for longevity.",
      description: "Avoiding fleeting framework churn in favor of solid web standards (HTML5, modern CSS, strict TypeScript) that stand firm for years."
    }
  ],

  techStack: {
    languages: [
      { name: "TypeScript", level: "Expert", note: "Strict type safety, generics, modern ESNext" },
      { name: "JavaScript", level: "Expert", note: "Asynchronous I/O, event loop, DOM architecture" },
      { name: "Python", level: "Advanced", note: "Backend APIs, scripts, data processing" },
      { name: "C / C++", level: "Intermediate", note: "Data structures, memory management, algorithms" },
      { name: "SQL", level: "Advanced", note: "Schema design, queries, relational joins, indexes" },
      { name: "HTML5 / CSS3", level: "Expert", note: "Semantic layout, fluid clamp, CSS Grid, token systems" }
    ],
    frontend: [
      { name: "React.js", level: "Expert", note: "Hooks, custom architecture, state machines" },
      { name: "Next.js", level: "Advanced", note: "App router, SSR, SSG, edge runtime" },
      { name: "Tailwind CSS", level: "Expert", note: "Utility architecture, responsive tokens" },
      { name: "Vue.js", level: "Intermediate", note: "Component reactivity, Vuex/Pinia" },
      { name: "WebGL / Three.js", level: "Intermediate", note: "GPU rendering, interactive 3D canvas" }
    ],
    backend: [
      { name: "Node.js", level: "Expert", note: "Event-driven architecture, cluster modules" },
      { name: "Express.js", level: "Expert", note: "Middleware pipelines, RESTful routing" },
      { name: "FastAPI / Flask", level: "Advanced", note: "High-speed Python endpoints, Pydantic" },
      { name: "WebSockets", level: "Advanced", note: "Bi-directional real-time event streaming" },
      { name: "REST & GraphQL", level: "Expert", note: "API contracts, schema definition, auth" }
    ],
    databasesCloud: [
      { name: "PostgreSQL", level: "Advanced", note: "ACID compliance, relational architecture" },
      { name: "MongoDB", level: "Advanced", note: "Document store, aggregation pipelines" },
      { name: "Redis", level: "Advanced", note: "In-memory caching, pub/sub, rate limiting" },
      { name: "Cloudflare Pages & Workers", level: "Expert", note: "Global anycast edge, serverless functions" },
      { name: "Docker", level: "Intermediate", note: "Containerization, compose environments" },
      { name: "Git & GitHub Actions", level: "Expert", note: "Automated CI/CD, branch preview builds" }
    ]
  },

  buildStages: [
    {
      step: "01",
      total: "08",
      title: "System Specs & Logic.",
      description: "Every robust project starts with defined problem requirements, user flows, and mathematical constraints.",
      tag: "Logic & Requirements",
      previewType: "grid"
    },
    {
      step: "02",
      total: "08",
      title: "Data Models & Schemas.",
      description: "Designing database tables, entity relationships, and state trees before writing a single line of UI.",
      tag: "Data Architecture",
      previewType: "wireframe"
    },
    {
      step: "03",
      total: "08",
      title: "API Contracts & Routes.",
      description: "Structuring idempotent REST and WebSocket endpoints, auth middleware, and validation schemas.",
      tag: "API Design",
      previewType: "architecture"
    },
    {
      step: "04",
      total: "08",
      title: "Accessible UI Hierarchy.",
      description: "Typography with optical kerning, WCAG AAA contrast ratios, and tactile touch targets.",
      tag: "UI Engineering",
      previewType: "typography"
    },
    {
      step: "05",
      total: "08",
      title: "Color Mathematics.",
      description: "Architectural Paper (#f4f4f2), deep Ink (#111110), and signature vermilion accent (#eb3a22).",
      tag: "Design Tokens",
      previewType: "palette"
    },
    {
      step: "06",
      total: "08",
      title: "Hand-Crafted Code.",
      description: "Strict TypeScript, zero-bloat DOM mutations, and clean modular files that any engineer can maintain.",
      tag: "Clean Source Code",
      previewType: "code"
    },
    {
      step: "07",
      total: "08",
      title: "Edge CI/CD Pipeline.",
      description: "Automated linting, unit testing, Brotli compression, and deployment to Cloudflare Pages edge network.",
      tag: "Automated Deployment",
      previewType: "deploy"
    },
    {
      step: "08",
      total: "08",
      title: "Production Launch.",
      description: "Sub-50ms latency worldwide, 100/100 Core Web Vitals, and resilient uptime under scale.",
      tag: "Production Live",
      previewType: "launch"
    }
  ],

  projects: [
    {
      id: "omniflow",
      title: "OmniFlow Microservices",
      category: "Backend & Systems",
      year: "2026",
      summary: "High-throughput payment orchestration and webhook reconciliation engine.",
      description: "Architected a fault-tolerant payment gateway microservice connecting Stripe, PayPal, and regional e-wallets. Features idempotent request queues with Redis, PostgreSQL transaction isolation, and automated webhook retries.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Stripe API"],
      stats: [
        { label: "Avg Latency", value: "32ms" },
        { label: "Uptime SLA", value: "99.98%" },
        { label: "Volume Handled", value: "$4.8M+" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "nexus-ui",
      title: "Nexus Design System",
      category: "Frontend Architecture",
      year: "2025",
      summary: "Accessible headless token compiler and unified UI component library.",
      description: "Built an enterprise design system adhering to WCAG AAA standards. Includes automated multi-brand token transformation (Style Dictionary), zero-runtime CSS variables, keyboard focus state machines, and Storybook documentation.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "WCAG AAA", "Figma API"],
      stats: [
        { label: "Components", value: "52+" },
        { label: "Accessibility", value: "100%" },
        { label: "Test Coverage", value: "98%" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "aetheria",
      title: "Aetheria Visual Engine",
      category: "Creative Engineering",
      year: "2025",
      summary: "GPU-accelerated spatial data visualizer running inside the browser.",
      description: "Engineered a high-performance WebGL spatial graph renderer capable of simulating 60,000+ interactive network nodes at 60 FPS with zero memory leaks, custom vertex shaders, and WebAssembly math acceleration.",
      tags: ["WebGL", "Three.js", "TypeScript", "GLSL Shaders", "WebAssembly"],
      stats: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Data Nodes", value: "60,000+" },
        { label: "Bundle Size", value: "<46 KB" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "pulselog",
      title: "PulseLog Telemetry",
      category: "Full-Stack Web",
      year: "2024",
      summary: "Real-time distributed server telemetry and latency monitoring dashboard.",
      description: "Constructed an edge-native analytics platform featuring WebSocket metric streaming, time-series aggregation, automated anomaly alerts, and responsive dark/light data visualization.",
      tags: ["Next.js", "WebSockets", "Cloudflare Workers", "Tailwind CSS", "TimescaleDB"],
      stats: [
        { label: "Event Stream", value: "12K/sec" },
        { label: "Query Time", value: "<15ms" },
        { label: "Lighthouse", value: "100/100" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "syntaxflow",
      title: "SyntaxFlow CLI",
      category: "Developer Tools",
      year: "2024",
      summary: "Blazing fast structured log parser and developer diagnostics toolchain.",
      description: "Open-source terminal utility for streaming, filtering, and masking sensitive PII in gigabyte-sized log archives with color-coded interactive TUI and regex pattern matching.",
      tags: ["Rust", "CLI", "Cross-Platform", "Open Source", "Regex Engine"],
      stats: [
        { label: "Throughput", value: "2.8 GB/s" },
        { label: "Memory Footprint", value: "<16 MB" },
        { label: "GitHub Stars", value: "920+" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      featured: false
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Lead Full-Stack Systems Engineer",
      organization: "Independent & Open Source",
      location: "Remote",
      description: "Architecting bespoke web applications, resilient edge APIs, and high-performance frontend interfaces. Providing system audits and code optimization."
    },
    {
      period: "2022 — 2024",
      role: "Full-Stack Software Engineer",
      organization: "Technology Solutions Enterprise",
      location: "Manila / Hybrid",
      description: "Engineered scalable REST microservices, database schemas, and redesigned the core customer portal, reducing bundle size by 42% and API response time by 35%."
    },
    {
      period: "2020 — 2022",
      role: "Junior Software & Systems Developer",
      organization: "Digital Innovations Lab",
      location: "Manila",
      description: "Developed responsive frontend views, integrated payment APIs, and built automated test suites with Jest and Cypress."
    }
  ],

  education: [
    {
      period: "Graduated with Honors",
      degree: "Bachelor of Science in Computer Engineering",
      institution: "College of Engineering & Architecture",
      details: "Focus on Computer Architecture, Microprocessor Systems, Data Structures & Algorithms, Network Security, and Distributed Systems."
    }
  ],

  resume: {
    title: "Donor — Curriculum Vitae / Resume",
    summary: "Software Engineer with expertise in TypeScript, React, Node.js, PostgreSQL, and Edge Architecture.",
    skillsList: "TypeScript, JavaScript, Python, C++, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, Cloudflare Workers, Git, Docker, Linux, REST, WebSockets, WCAG AAA"
  }
};

if (typeof window !== "undefined") {
  window.PortfolioConfig = PortfolioConfig;
}
