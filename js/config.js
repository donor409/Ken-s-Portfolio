/**
 * DONOR - PERSONAL PORTFOLIO CONFIGURATION
 * 4th Year Computer Engineering Student at ICCT Colleges Cainta Campus
 * Binangonan, Rizal, Philippines
 */
const PortfolioConfig = {
  profile: {
    brandName: "donor.",
    fullName: "Donor",
    role: "Computer Engineering Student & Developer",
    tagline: "Building practical web applications, software & embedded systems.",
    lead: "4th-year Computer Engineering student at ICCT Colleges Cainta Campus. Building responsive web applications and embedded IoT solutions with clean, straightforward code.",
    location: "14.4644° N, 121.1923° E",
    locationName: "Binangonan, Rizal, Philippines",
    status: "4th Year Computer Engineering • ICCT Colleges Cainta",
    statusAvailable: true,
    email: "donorken6@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#resume-modal",
    avatar: "./assets/donor-photo.jpg"
  },

  about: {
    title: "About Me",
    role: "4th Year Computer Engineering Student",
    school: "ICCT Colleges Cainta Campus",
    location: "Binangonan, Rizal",
    description: "I am a 4th-year Computer Engineering student at ICCT Colleges Cainta Campus, currently residing in Binangonan, Rizal. I have a strong passion for software development, modern web applications, and embedded IoT hardware systems. I enjoy creating practical solutions by writing clean, straightforward code and continuously exploring new technologies.",
    paragraph2: "Throughout my studies, I have gained hands-on experience building web apps with TypeScript, Vite, and Tailwind CSS, mobile applications in Android Studio with Kotlin and Firebase, and programming microcontrollers like the ESP32 and Arduino with various sensors and communication protocols.",
    highlights: [
      { label: "Status", value: "4th Year College Student" },
      { label: "Course", value: "B.S. in Computer Engineering" },
      { label: "Campus", value: "ICCT Colleges Cainta" },
      { label: "Location", value: "Binangonan, Rizal" }
    ]
  },

  toolkit: [
    {
      number: "01",
      category: "software & web",
      skills: [
        "typescript",
        "vite",
        "tailwind css",
        "kotlin",
        "java / oop",
        "c / c++",
        "python",
        "sql",
        "git / github"
      ]
    },
    {
      number: "02",
      category: "mobile, cloud & design",
      skills: [
        "android studio",
        "firebase auth",
        "cloud firestore",
        "firebase cloud messaging",
        "figma ui/ux",
        "agile / scrum",
        "system architecture",
        "uml modeling",
        "docker"
      ]
    },
    {
      number: "03",
      category: "hardware & embedded iot",
      skills: [
        "esp32",
        "arduino",
        "embedded c / c++",
        "vl53l0x tof sensors",
        "max30102 pulse oximeter",
        "i2c / spi / uart",
        "tca9548a multiplexing",
        "oled displays",
        "circuit schematics",
        "digital logic"
      ]
    },
    {
      number: "04",
      category: "ai-assisted development & tools",
      skills: [
        "gemini",
        "chatgpt",
        "google antigravity"
      ]
    }
  ],

  works: [
    {
      id: "featured-app",
      title: "Featured Web Application",
      category: "Full-Stack Web App",
      year: "2024 — 2026",
      summary: "A modern, responsive web application engineered with clean component architecture, fast load times, and intuitive user workflow.",
      description: "This web application was designed and developed to deliver a smooth and practical digital experience. It features responsive layouts, real-time data handling, and clean code principles using modern development toolchains.",
      tags: ["TypeScript", "Vite", "Tailwind CSS", "Firebase", "Web App"],
      stats: [
        { label: "Framework", value: "Vite + TS" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Status", value: "Active Build" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "./assets/donor-photo.jpg" // Placeholder for web app screenshot
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Web Application & IoT Systems Developer",
      organization: "Academic & Personal Projects",
      location: "Binangonan, Rizal",
      description: "Designing and developing responsive web applications using Vite, TypeScript, and Tailwind CSS. Implementing backend services with Firebase and creating connected IoT prototypes using ESP32 microcontrollers."
    },
    {
      period: "2022 — 2024",
      role: "Computer Engineering Student Developer",
      organization: "ICCT Colleges Cainta Campus",
      location: "Cainta, Rizal",
      description: "Built foundational skills in Object-Oriented Programming (Java, C++), database design with SQL, and developed early frontend web interfaces that led to current web application projects."
    }
  ],

  education: [
    {
      period: "2021 — 2025 (Expected Graduation)",
      degree: "Bachelor of Science in Computer Engineering (4th Year)",
      institution: "ICCT Colleges Cainta Campus",
      details: "Comprehensive coursework in Embedded Systems, Logic Circuits, Computer Architecture, Data Structures, and Software Development."
    }
  ]
};

if (typeof window !== "undefined") {
  window.PortfolioConfig = PortfolioConfig;
}
