/**
 * KEN'S PORTFOLIO - CENTRAL DATA CONFIGURATION
 * Edit your details, projects, services, and experience here.
 */
const PortfolioConfig = {
  profile: {
    brandName: "ken.",
    brandSuffix: "portfolio",
    fullName: "Ken",
    title: "Software Engineer & Digital Craftsman",
    lead: "Building resilient web applications, systems, and digital interfaces. Hand-crafted code, architectural clarity, zero page-builder bloat.",
    location: "14.5995° N, 120.9842° E",
    locationCity: "Manila, Philippines / Worldwide Remote",
    status: "Available for Q3/Q4 Projects & Systems Consulting",
    statusAvailable: true,
    email: "ken.developer.pro@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#contact"
  },

  metrics: [
    { value: "05+", label: "Years Engineering", note: "From systems to frontend" },
    { value: "<60ms", label: "Edge Latency", note: "Optimized serverless delivery" },
    { value: "100%", label: "Lighthouse Score", note: "Zero bloat, pure speed" },
    { value: "30+", label: "Completed Projects", note: "Deployed to production" }
  ],

  principles: [
    {
      number: "01",
      title: "No site builder.",
      description: "No generic templates or bloated plugins. Every line of markup and logic is tailored directly to your product's performance and branding."
    },
    {
      number: "02",
      title: "Code by hand.",
      description: "Lean, readable, and strictly audited source code. That is why pages load in milliseconds and maintain 100/100 Core Web Vitals."
    },
    {
      number: "03",
      title: "Built for longevity.",
      description: "No fleeting design gimmicks that feel outdated in two seasons. Systems and interfaces designed to stand firm for the next chapter."
    },
    {
      number: "04",
      title: "One engineer, direct contact.",
      description: "You work directly with the builder who designs and writes the code. Clear communication from system architecture to production launch."
    }
  ],

  buildStages: [
    {
      step: "01",
      total: "08",
      title: "A line & grid.",
      description: "Every robust system starts with alignment rules. Where elements rest is measured mathematically, never estimated.",
      tag: "Rule & Grid Scaffolding",
      previewType: "grid"
    },
    {
      step: "02",
      total: "08",
      title: "A wireframe.",
      description: "Wireframes define flow and spatial ergonomics. Information hierarchy takes precedence before aesthetic polish.",
      tag: "Spatial Hierarchy",
      previewType: "wireframe"
    },
    {
      step: "03",
      total: "08",
      title: "The typography.",
      description: "Type is voice. Font proportions, optical weights, and measure lines are calibrated to readable line lengths.",
      tag: "Typographic Harmony",
      previewType: "typography"
    },
    {
      step: "04",
      total: "08",
      title: "The palette.",
      description: "Architectural paper, deep ink, and a vivid electric accent. A distinct identity requires deliberate discipline.",
      tag: "Color Mathematics",
      previewType: "palette"
    },
    {
      step: "05",
      total: "08",
      title: "The architecture.",
      description: "Data schemas, API contracts, state management, and edge caching strategies designed before writing UI code.",
      tag: "Systems & Backend",
      previewType: "architecture"
    },
    {
      step: "06",
      total: "08",
      title: "Hand-crafted code.",
      description: "Accessible semantic HTML, performant CSS styling, and strict TypeScript/JavaScript. No runtime baggage.",
      tag: "Clean Source",
      previewType: "code"
    },
    {
      step: "07",
      total: "08",
      title: "Global edge deploy.",
      description: "Pushed to Cloudflare Pages edge network. Assets cached across 300+ global cities with automated CI/CD pipelines.",
      tag: "CDN & Edge Routing",
      previewType: "deploy"
    },
    {
      step: "08",
      total: "08",
      title: "Your turn.",
      description: "Everything you see here is ready for your project. Reach out, and let's craft something exceptional together.",
      tag: "Production Ready",
      previewType: "launch"
    }
  ],

  projects: [
    {
      id: "aetheria",
      title: "Aetheria Engine",
      category: "Creative Engineering",
      year: "2026",
      summary: "High-performance WebGL & GPU-accelerated spatial data visualization engine.",
      description: "Engineered an in-browser spatial geometry renderer supporting 50,000+ interactive nodes with 60 FPS animation loop, zero memory leakage, and WebAssembly computation pipelines.",
      tags: ["WebGL", "Three.js", "TypeScript", "Wasm", "GLSL Shaders"],
      stats: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Data Nodes", value: "50,000+" },
        { label: "Bundle Size", value: "<48 KB" }
      ],
      link: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "omnipay",
      title: "OmniPay Microservices",
      category: "Backend & Systems",
      year: "2025",
      summary: "Multi-tenant payment orchestration engine with idempotent transaction queues.",
      description: "Designed a fault-tolerant payment gateway aggregation service connecting Stripe, PayPal, and regional e-wallets with automatic failover, real-time webhook reconciliation, and AES-256 encryption.",
      tags: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker", "Stripe API"],
      stats: [
        { label: "API Latency", value: "38ms" },
        { label: "Uptime SLA", value: "99.98%" },
        { label: "Volume Handled", value: "$4.2M+" }
      ],
      link: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "krypton",
      title: "Krypton Design System",
      category: "Frontend Architecture",
      year: "2025",
      summary: "Accessible headless design token compiler and unified UI component library.",
      description: "Built a WCAG AAA compliant design system featuring multi-brand token transformation (Style Dictionary), zero-runtime CSS, keyboard navigation state machines, and Figma sync automation.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Figma API", "Storybook", "WCAG AAA"],
      stats: [
        { label: "Components", value: "48+" },
        { label: "Accessibility", value: "100%" },
        { label: "Test Coverage", value: "96%" }
      ],
      link: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "cloudpulse",
      title: "CloudPulse Telemetry",
      category: "Full-Stack Web",
      year: "2024",
      summary: "Real-time distributed server health monitoring & anomaly detection dashboard.",
      description: "Constructed an edge-native analytics dashboard featuring WebSocket live metric streaming, time-series aggregation, automated alert webhooks, and dark/light adaptive visualization.",
      tags: ["Next.js", "WebSockets", "TimescaleDB", "Tailwind CSS", "Cloudflare Workers"],
      stats: [
        { label: "Event Stream", value: "10K/sec" },
        { label: "Chart Render", value: "<12ms" },
        { label: "Lighthouse", value: "100/100" }
      ],
      link: "https://github.com",
      demoUrl: "https://github.com",
      featured: true
    },
    {
      id: "hyperlog",
      title: "HyperLog CLI & SDK",
      category: "Developer Tools",
      year: "2024",
      summary: "Blazing fast structured log parser and developer diagnostics toolchain.",
      description: "Created an open-source terminal utility for streaming, filtering, and masking sensitive PII in gigabyte-sized log archives with color-coded interactive TUI.",
      tags: ["Rust", "CLI", "Cross-Platform", "Open Source", "Regex Engine"],
      stats: [
        { label: "Throughput", value: "2.4 GB/s" },
        { label: "Memory Footprint", value: "<18 MB" },
        { label: "GitHub Stars", value: "850+" }
      ],
      link: "https://github.com",
      demoUrl: "https://github.com",
      featured: false
    }
  ],

  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Custom Web Applications",
      subtitle: "Fast, responsive, hand-crafted.",
      description: "Full-cycle web application engineering. From database architecture and backend APIs to polished, tactile frontends that convert visitors.",
      deliverables: ["Single Page Apps (SPA)", "Progressive Web Apps", "Performance Audits & Optimization", "API & Third-party Integrations"]
    },
    {
      id: "systems",
      number: "02",
      title: "Backend & Cloud Architecture",
      subtitle: "Scalable, resilient, secure.",
      description: "Constructing robust serverless backends, RESTful and GraphQL endpoints, relational database design, and edge function delivery.",
      deliverables: ["Microservices & Cloudflare Workers", "Database Modeling & Queries", "Authentication & Security Audits", "Automated CI/CD Pipelines"]
    },
    {
      id: "design-systems",
      number: "03",
      title: "Design Systems & UI Engineering",
      subtitle: "Systematic, accessible, bespoke.",
      description: "Bridging the gap between design and production code. Token-driven component libraries with strict accessibility and fluid motion.",
      deliverables: ["Figma to Code Pipeline", "Accessible WCAG Compliant UI", "Interactive Prototypes", "Micro-interaction Choreography"]
    },
    {
      id: "advisory",
      number: "04",
      title: "Technical Consulting & Strategy",
      subtitle: "Audited, verified, future-proof.",
      description: "Deep dive code reviews, architectural advice for startups, tech stack selection, and modern migration strategies.",
      deliverables: ["Codebase Refactoring Roadmap", "Hosting & Cloud Cost Reduction", "Security & Speed Optimization", "Developer Mentorship"]
    }
  ],

  techStack: [
    { name: "TypeScript / JavaScript", level: "Primary", category: "Languages", note: "ESNext, strict type safety, asynchronous patterns" },
    { name: "React / Next.js / Vue", level: "Primary", category: "Frontend", note: "Component lifecycle, state machines, SSR/SSG" },
    { name: "HTML5 & Modern CSS3 / Tailwind", level: "Primary", category: "Frontend", note: "CSS Grid, fluid typography, CSS custom properties" },
    { name: "Node.js / Express / Bun", level: "Primary", category: "Backend", note: "Event-driven runtime, RESTful APIs, WebSockets" },
    { name: "PostgreSQL / SQLite / Redis", level: "Primary", category: "Databases", note: "Relational modeling, indexing, in-memory caching" },
    { name: "Cloudflare Pages & Workers", level: "Primary", category: "Cloud & Edge", note: "Global edge CDN, serverless functions, KV storage" },
    { name: "Git, GitHub Actions, Docker", level: "Advanced", category: "DevOps", note: "Automated testing, containerization, deployments" },
    { name: "REST / GraphQL / WebSockets", level: "Advanced", category: "APIs", note: "Real-time communication, contract testing" }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Lead Full-Stack Systems Engineer",
      company: "Independent / Digital Studio",
      location: "Remote",
      highlight: "Architecting bespoke web applications and edge-native platforms for international clients with zero-bloat standards."
    },
    {
      period: "2022 — 2024",
      role: "Senior Frontend & UI Engineer",
      company: "Tech Systems Solutions",
      location: "Manila / Hybrid",
      highlight: "Spearheaded the redesign and token architecture of the core enterprise dashboard, cutting bundle payload by 42%."
    },
    {
      period: "2020 — 2022",
      role: "Full-Stack Web Developer",
      company: "Creative Cloud Labs",
      location: "Manila",
      highlight: "Engineered scalable REST microservices, client portals, and real-time payment reconciliation systems."
    }
  ]
};

// Make config globally accessible
if (typeof window !== "undefined") {
  window.PortfolioConfig = PortfolioConfig;
}
