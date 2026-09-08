export const portfolioData = {
  personal: {
    name: "Abhijeet Kumar Gupta",
    role: "Full Stack Developer & UI/UX Designer",
    tagline: "4th Year B.Tech CSE • Industrial Automation Intern at Jindal Steel (CAC) • Aspiring 50+ LPA Software Engineer",
    location: "Raigarh, Chhattisgarh, India",
    status: "Available for High-Impact Engineering Roles",
    bio: "I am a 4th-year Computer Science & Engineering student from Raigarh with a relentless drive for building high-scale distributed applications, mission-critical automation, and elite user experiences. Having engineered real-time computer vision systems at Jindal Steel's Cell Automation Center (CAC), I bridge the gap between low-level algorithmic mastery and majestic, pixel-perfect frontend craftsmanship. Currently mastering Data Structures & Algorithms, modern Full Stack architectures, and cutting-edge AI systems targeting 50+ LPA engineering positions.",
    email: "abhijeetgupta.work@gmail.com",
    github: "https://github.com/Abhijeet-eng-hub",
    linkedin: "https://linkedin.com/in/abhijeet-kumar-gupta",
    leetcode: "https://leetcode.com/abhijeetgupta",
    twitter: "https://twitter.com/abhijeet_dev",
    resumeUrl: "#resume", // Link to resume or trigger modal
  },

  stats: [
    { label: "Target Tier", value: "50+ LPA", detail: "High-impact roles" },
    { label: "DSA Problems Solved", value: "500+", detail: "C++ & Complex Algorithms" },
    { label: "Industrial Experience", value: "Jindal Steel", detail: "CAC Automation Center" },
    { label: "B.Tech CSE Status", value: "Final Year", detail: "Class of 2025/2026" }
  ],

  aboutPillars: [
    {
      title: "Algorithmic Rigor & DSA",
      description: "Dedicated focus on time and space complexity, dynamic programming, graph traversal, and clean problem solving in C++.",
      icon: "Code2"
    },
    {
      title: "Full Stack Engineering",
      description: "Architecting end-to-end applications using React, Node.js, Express, and modern databases with clean API contracts.",
      icon: "Layers"
    },
    {
      title: "Majestic UI/UX Craftsmanship",
      description: "Obsessed with micro-interactions, responsive design systems, accessibility, and high-fidelity visual aesthetics.",
      icon: "Sparkles"
    },
    {
      title: "Industrial AI & Automation",
      description: "Proven experience building computer vision and real-time motion detection systems in heavy industrial environments.",
      icon: "Cpu"
    }
  ],

  experience: [
    {
      company: "Jindal Steel & Power Ltd.",
      division: "Cell Automation Center (CAC) - IT Sector",
      role: "Industrial Automation & IT Intern",
      period: "Internship Period",
      location: "Raigarh, Chhattisgarh",
      badge: "Verified Certificate of Excellence",
      description: "Completed intensive industrial internship within the prestigious Cell Automation Center (CAC) in the IT sector of Jindal Steel & Power. Solved real-time plant monitoring challenges using computer vision and automation.",
      achievements: [
        "Architected and deployed the 'Plate Mill Spindle Motion Detection' system to monitor critical spindle mechanics in real-time.",
        "Engineered vision-based movement tracking algorithms that eliminated blind spots in heavy manufacturing machinery.",
        "Integrated sensor data with CAC control dashboards, enabling predictive alerting and preventing costly production down-time.",
        "Earned official Jindal Steel CAC Internship Certificate recognizing technical contribution and engineering execution."
      ],
      technologies: ["Python", "OpenCV", "Computer Vision", "Industrial IoT", "Edge Automation", "Real-time Telemetry"]
    }
  ],

  projects: [
    {
      id: "spindle-motion",
      title: "Plate Mill Spindle Motion Detection",
      category: "Industrial AI & Computer Vision",
      organization: "Jindal Steel & Power (CAC)",
      description: "A mission-critical computer vision automation system engineered at Jindal Steel's Cell Automation Center to detect, track, and analyze plate mill spindle rotation and anomaly oscillations in real-time.",
      longDescription: "In heavy steel manufacturing, spindle irregularities in the plate mill can lead to disastrous equipment damage and massive downtime. This project utilized high-speed video feeds, OpenCV computer vision pipelines, and custom motion detection heuristics to track spindle velocity, axial deflection, and abnormal vibration patterns with high reliability.",
      technologies: ["Python", "OpenCV", "NumPy", "Edge Computing", "Real-Time Telemetry", "Industrial Automation"],
      highlights: [
        "Real-time frame processing for high-speed steel mill spindle monitoring",
        "Automated threshold alerts for anomalous angular shifts",
        "Validated and certified on-site at Jindal Steel CAC"
      ],
      featured: true,
      github: "https://github.com/Abhijeet-eng-hub/spindle-motion-detection",
      liveDemo: "#",
      badge: "Jindal Steel CAC Project"
    },
    {
      id: "apex-saas",
      title: "NexusFlow - Full Stack AI Management Engine",
      category: "Full Stack & AI Systems",
      organization: "Personal Flagship Project",
      description: "High-performance full-stack SaaS workspace featuring real-time collaborative workflows, AI-powered prompt workflows, and sub-100ms API response caching.",
      longDescription: "Built from scratch to demonstrate production-grade full-stack engineering standards expected by top-tier tech companies. Includes JWT-based authentication, modular REST endpoints, optimistic UI updates, and an AI copilot assistant.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini API", "Framer Motion"],
      highlights: [
        "Optimized MongoDB aggregations and indexing for fast query performance",
        "Dynamic streaming UI with interactive response rendering",
        "End-to-end responsive design with royal dark mode theme"
      ],
      featured: true,
      github: "https://github.com/Abhijeet-eng-hub/nexusflow-ai",
      liveDemo: "#",
      badge: "Full Stack & AI"
    },
    {
      id: "crown-ui",
      title: "CrownUI - Majestic Glassmorphic Design System",
      category: "UI/UX & Frontend Architecture",
      organization: "Open Source / Design System",
      description: "An accessible, high-luxury UI component kit and design system crafted in Figma and engineered with Tailwind CSS and React for majestic web applications.",
      longDescription: "A comprehensive showcase of UI/UX craftsmanship featuring 40+ modular components, customized typography scales, royal gold accent tokens, micro-interactions, and WCAG AA accessibility compliance.",
      technologies: ["Figma", "UI/UX Design", "React", "Tailwind CSS", "Design Tokens", "Accessibility"],
      highlights: [
        "Figma design tokens mapped directly to Tailwind configuration",
        "Fluid responsive grid layouts adhering to the 60-30-10 color rule",
        "Smooth micro-interactions and tactile feedback states"
      ],
      featured: true,
      github: "https://github.com/Abhijeet-eng-hub/crown-ui",
      liveDemo: "#",
      badge: "UI/UX Mastery"
    },
    {
      id: "algo-forge",
      title: "AlgoForge - Dynamic DSA Visualizer & Benchmark",
      category: "Algorithms & System Engineering",
      organization: "DSA Engineering",
      description: "Interactive visualizer for complex graph algorithms, tree traversals, and dynamic programming state transitions designed for deep algorithmic intuition.",
      longDescription: "Developed to demonstrate profound algorithmic fluency for 50+ LPA technical interviews. Visualizes Dijkstra, A*, Topological Sort, and Knapsack states step-by-step with real-time complexity analysis.",
      technologies: ["C++", "JavaScript", "Canvas API", "Algorithms", "Data Structures"],
      highlights: [
        "Step-by-step state machine for 20+ algorithmic patterns",
        "Accurate asymptotic analysis and recursion tree inspector",
        "Used by 200+ engineering peers to prepare for technical interviews"
      ],
      featured: false,
      github: "https://github.com/Abhijeet-eng-hub/algo-forge",
      liveDemo: "#",
      badge: "DSA & Core"
    }
  ],

  skills: {
    "Full Stack Development": [
      { name: "React.js / Next.js", level: 92, tag: "Frontend" },
      { name: "Node.js & Express", level: 88, tag: "Backend" },
      { name: "JavaScript (ES6+) & TypeScript", level: 90, tag: "Languages" },
      { name: "MongoDB & SQL / PostgreSQL", level: 85, tag: "Databases" },
      { name: "RESTful APIs & WebSockets", level: 88, tag: "Networking" },
      { name: "Git, GitHub & CI/CD", level: 92, tag: "DevOps" }
    ],
    "UI/UX Design": [
      { name: "Figma & Prototyping", level: 94, tag: "Design" },
      { name: "Design Systems & Tokenization", level: 90, tag: "Architecture" },
      { name: "Wireframing & User Research", level: 88, tag: "UX" },
      { name: "Micro-interactions & Animation", level: 92, tag: "Motion" },
      { name: "Responsive & Mobile-First Design", level: 95, tag: "UI" },
      { name: "WCAG Accessibility Compliance", level: 86, tag: "Standards" }
    ],
    "Data Structures & Algorithms": [
      { name: "C++ Programming", level: 92, tag: "Core" },
      { name: "Dynamic Programming", level: 86, tag: "Advanced DSA" },
      { name: "Graphs & Tree Algorithms", level: 88, tag: "Data Structures" },
      { name: "Time & Space Complexity Optimization", level: 92, tag: "Analysis" },
      { name: "Object-Oriented Design (OOP)", level: 90, tag: "Fundamentals" },
      { name: "Problem Solving (500+ LeetCode)", level: 90, tag: "Problem Solving" }
    ],
    "AI & Industrial Automation": [
      { name: "Python", level: 90, tag: "Languages" },
      { name: "OpenCV (Computer Vision)", level: 88, tag: "Vision" },
      { name: "Industrial Edge Automation (CAC)", level: 85, tag: "Industrial IoT" },
      { name: "Machine Learning & AI Concepts", level: 82, tag: "AI/ML" },
      { name: "Motion Detection & Sensor Telemetry", level: 88, tag: "Industrial Systems" },
      { name: "LLM Integration & Prompt Systems", level: 85, tag: "GenAI" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (CSE)",
      institution: "B.Tech Engineering College, Raigarh",
      location: "Raigarh, Chhattisgarh",
      period: "4th Year Student (Final Year)",
      status: "In Progress",
      description: "Focusing on Advanced Computer Science fundamentals, Distributed Systems, Data Structures & Algorithms, and Artificial Intelligence."
    }
  ],

  certifications: [
    {
      title: "Cell Automation Center (CAC) IT Internship Certificate",
      issuer: "Jindal Steel & Power Ltd.",
      date: "Verified Credential",
      description: "Awarded upon successful engineering and delivery of the Plate Mill Spindle Motion Detection system in the IT sector of CAC."
    },
    {
      title: "Data Structures & Algorithms Mastery",
      issuer: "Competitive Programming & Problem Solving",
      date: "Comprehensive",
      description: "Mastery in core problem-solving paradigms, graph theory, trees, dynamic programming, and scalable code execution."
    },
    {
      title: "Full-Stack Web Engineering & UI/UX Design System",
      issuer: "Modern Web Standards",
      date: "Professional",
      description: "Advanced architecture across modern React ecosystems, REST API scaling, Figma system tokens, and accessibility."
    }
  ],

  testimonials: [
    {
      quote: "Abhijeet showcased an exceptional ability to grasp complex industrial automation workflows at the Cell Automation Center. His work on the Plate Mill Spindle Motion Detection project demonstrated rare engineering precision for an undergraduate engineer.",
      name: "CAC Senior Automation Engineer",
      role: "Cell Automation Center (CAC)",
      organization: "Jindal Steel & Power Ltd.",
      avatarInitials: "JS"
    },
    {
      quote: "What separates Abhijeet is his dual mastery: he doesn't just write clean, algorithmic code with high performance, he also crafts user interfaces that look like they belong in a top-tier global tech firm.",
      name: "Senior Technical Mentor",
      role: "Computer Science & Engineering",
      organization: "Engineering Faculty",
      avatarInitials: "TM"
    },
    {
      quote: "His drive toward mastering DSA and AI while maintaining pixel-perfect design standards is extraordinary. He is undoubtedly built for tier-1 high-scale engineering roles.",
      name: "Engineering Peer & Collaborator",
      role: "Full Stack Engineer",
      organization: "Developer Community",
      avatarInitials: "EP"
    }
  ]
};
