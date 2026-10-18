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
    resumeUrl: "#contact",
    avatar: "./assets/donor-photo.jpg"
  },

  about: {
    title: "About Me",
    role: "4th Year Computer Engineering Student",
    school: "ICCT Colleges Cainta Campus",
    location: "Binangonan, Rizal",
    description: "I am a 4th-year Computer Engineering student at ICCT Colleges Cainta Campus, currently residing in Binangonan, Rizal. I have a strong passion for software development, modern web applications, and embedded IoT hardware systems. I enjoy creating practical solutions by writing clean, straightforward code and continuously exploring new technologies.",
    paragraph2: "Throughout my studies, I have gained hands-on experience building web apps with TypeScript, mobile applications in Android Studio with Kotlin and Firebase, and programming microcontrollers like the ESP32 and Arduino with various sensors and communication protocols.",
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
        "firebase cloud messaging",
        "figma ui/ux",
        "system architecture",
        "uml modeling"
      ]
    },
    {
      number: "03",
      category: "hardware & embedded iot",
      skills: [
        "esp32",
        "arduino",
        "embedded c / c++",
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
        "antigravity"
      ]
    }
  ],

  works: [
    {
      id: "tanggapan-ng-kaligtasan",
      title: "Tanggapan ng Kaligtasan",
      subtitle: "Disaster Risk Map — Rizal (Cainta → Binangonan)",
      category: "Disaster Risk & Emergency Mapping Web App",
      year: "2024 — 2026",
      summary: "An interactive disaster risk map web app engineered to guide communities to safety during calamities such as floods, fires, and earthquakes.",
      description: "Ang application na ito ay binuo upang tumulong at magbigay ng mabilisang gabay sa mga mamamayan sa oras ng sakuna. Ipinapakita nito kung saan ang mga ligtas na evacuation centers, safe zones, at mga mapanganib na danger zones sa lalawigan ng Rizal (mula Cainta hanggang Binangonan) gamit ang interactive map at live location tracking.",
      tags: ["TypeScript", "Leaflet Maps", "Geolocation API", "Tailwind CSS", "Firebase"],
      stats: [
        { label: "Coverage", value: "Cainta → Binangonan" },
        { label: "Modes", value: "Flood / Fire / Earthquake" },
        { label: "Live GPS", value: "Location & Follow Me" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "./assets/tanggapan-ng-kaligtasan.png"
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Web App & Disaster Risk Systems Developer",
      organization: "Tanggapan ng Kaligtasan Project • Binangonan, Rizal",
      description: "Architected and built the 'Tanggapan ng Kaligtasan' disaster risk mapping web application for Rizal municipalities (Cainta to Binangonan), integrating interactive geospatial maps, multi-disaster filtering (Flood, Fire, Earthquake), and live location tracking."
    },
    {
      period: "2022 — 2024",
      role: "Computer Engineering Student Developer",
      organization: "ICCT Colleges Cainta Campus • Cainta, Rizal",
      description: "Gained core fundamentals in Object-Oriented Programming (Java, C++), database management with SQL, and building early software and microcontroller systems that led to full-stack web app development."
    }
  ],

  education: [
    {
      period: "2021 — 2025 (Expected Graduation)",
      degree: "Bachelor of Science in Computer Engineering (4th Year)",
      institution: "ICCT Colleges Cainta Campus",
      details: "Comprehensive coursework in Embedded Systems, Logic Circuits, Computer Architecture, Data Structures & Algorithms, and Software Engineering."
    }
  ]
};

if (typeof window !== "undefined") {
  window.PortfolioConfig = PortfolioConfig;
}
