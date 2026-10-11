export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "github" | "mobile-github" | "details";
  primary?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterCategories: ("Web" | "Mobile" | "AI" | "IoT" | "Developer Tools")[];
  shortDescription: string;
  detailedDescription: string;
  role?: string;
  responsibilities?: string[];
  technologies: string[];
  features?: string[];
  problem?: string;
  solution?: string;
  process?: string[];
  links: ProjectLink[];
  featured?: boolean;
  accentColor: string;
  gradient: string;
  image: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "vendly-lk",
    slug: "vendly-lk",
    title: "Vendly.lk – Online Business Management System",
    category: "Web & Mobile Application",
    filterCategories: ["Web", "Mobile", "AI"],
    shortDescription:
      "A centralized business management system designed for SMEs to manage online orders, customers, inventory, courier services, and sales while providing business insights for smarter decision-making.",
    detailedDescription:
      "Vendly.lk is a unified business management platform engineered for small and medium enterprises (SMEs) and informal sellers. Buyers can browse products, interact with an AI-powered chatbot to ask questions, and create orders directly through the chatbot. As Team Leader, I guided the end-to-end delivery of the project over 9 weeks, architecting the UI/UX in Figma, developing the React web frontend, integrating Flask backend APIs on AWS, and wiring Firebase real-time databases.",
    role: "Team Leader",
    responsibilities: [
      "Led the cross-functional engineering team and coordinated sprint activities in Notion and GitHub.",
      "Designed comprehensive wireframes, user flows, and design systems in Figma.",
      "Developed modular, responsive web frontend interfaces using React & JavaScript.",
      "Contributed to the AI chatbot and automated order-taking workflow to reduce sellers' repetitive messaging workload.",
      "Integrated backend endpoints in Flask and managed real-time data persistence in Firestore & Firebase Realtime Database.",
      "Managed deployment pipelines: frontend on Vercel and backend on AWS.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "React Native",
      "Flask",
      "Python",
      "Firebase Firestore",
      "Firebase Realtime DB",
      "Cloudinary",
      "Brevo",
      "Figma",
      "AWS",
      "Vercel",
      "GitHub",
      "Notion",
    ],
    features: [
      "Centralized order management and automated status pipelines",
      "AI-powered chatbot assisting buyers and processing direct orders",
      "Real-time inventory synchronization across multi-channel sales",
      "Low stock and dead stock automated business analytics",
      "Automated delivery calculations and customer blacklist tracking",
      "Mobile companion app built with React Native for on-the-go order fulfillment",
    ],
    problem:
      "Many local SMEs and informal sellers manage orders manually through WhatsApp and Facebook messages, leading to inventory errors, missed customer chats, delivery miscalculations, and dead stock.",
    solution:
      "A structured digital ecosystem combining an AI-assisted storefront, automated inventory tracking, and unified merchant dashboard accessible across web and mobile.",
    process: [
      "Problem discovery & SME merchant journey mapping in Figma",
      "UI/UX wireframing and atomic component design system creation",
      "React web frontend and React Native mobile companion development",
      "Flask API backend structuring with AWS cloud hosting and Firebase integration",
      "AI chatbot order workflow implementation and 9-week Demo Day presentation",
    ],
    links: [
      {
        label: "Live Web App",
        url: "https://vendly-lk.vercel.app",
        type: "live",
        primary: true,
      },
      {
        label: "Web GitHub",
        url: "https://github.com/venujatech-byte/Vendly.lk.git",
        type: "github",
      },
      {
        label: "Mobile GitHub",
        url: "https://github.com/venujatech-byte/Vendly.lk-app.git",
        type: "mobile-github",
      },
    ],
    featured: true,
    accentColor: "from-blue-500 to-indigo-600",
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    image: "/images/vendly-preview.png",
    badge: "Featured Leadership Project",
  },
  {
    id: "entrepreneur-profile",
    slug: "entrepreneur-profile",
    title: "Entrepreneur Profile – Assessment Platform",
    category: "Web Application / Analytics",
    filterCategories: ["Web"],
    shortDescription:
      "Next.js-based entrepreneurial assessment platform with personalized competency analysis and development insights, deployed on Vercel with trilingual support.",
    detailedDescription:
      "Entrepreneur Profile is a comprehensive digital assessment platform built with Next.js, engineered to evaluate entrepreneurial competencies and provide personalized development recommendations. Contributed to frontend performance optimization, modular UI architecture, responsive design enhancements, and seamless trilingual localization.",
    role: "Frontend Engineer / Contributor",
    responsibilities: [
      "Contributed to UI optimization and responsive layouts across desktop and mobile viewports.",
      "Implemented trilingual internationalization (i18n) support for inclusive multi-language accessibility.",
      "Structured competency evaluation forms with real-time state validation.",
      "Assisted with testing and deployment pipelines on Vercel.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "i18n Localization",
      "Vercel",
    ],
    features: [
      "Personalized entrepreneurial competency scoring and radar assessments",
      "Actionable growth insights and structured development pathways",
      "Full trilingual language support (English, Sinhala, Tamil)",
      "High-performance responsive interface optimized with Next.js",
      "Seamless client-side questionnaire flows with persistent evaluation state",
    ],
    problem:
      "Aspiring entrepreneurs often lack accessible, structured diagnostic tools to evaluate their business competencies, especially with localized language options in Sri Lanka.",
    solution:
      "A fast, modern Next.js web application offering personalized competency assessment with tailored development roadmaps and full trilingual accessibility.",
    process: [
      "Competency assessment workflow analysis and rubric structuring",
      "Component architecture design with Next.js and Tailwind CSS",
      "Trilingual localization engine implementation",
      "Performance optimization and cloud deployment on Vercel",
    ],
    links: [
      {
        label: "Live Platform",
        url: "https://neda-test.vercel.app",
        type: "live",
        primary: true,
      },
    ],
    featured: false,
    accentColor: "from-blue-500 to-indigo-600",
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    image: "/images/vendly-preview.png",
    badge: "Assessment Platform",
  },
  {
    id: "arduino-esp32-iot",
    slug: "arduino-esp32-iot",
    title: "Arduino & ESP32 IoT Hardware Projects",
    category: "IoT / Embedded Systems",
    filterCategories: ["IoT"],
    shortDescription:
      "Hardware-based projects developed using Arduino and ESP32 involving sensor arrays, Wi-Fi connectivity, automation, notifications, and real-time monitoring.",
    detailedDescription:
      "A series of standalone embedded hardware projects utilizing Arduino and ESP32 microcontrollers. These systems integrate physical sensor arrays (environmental, motion, infrared), wireless network communication, cloud webhook triggers, and automated actuators to solve practical automation challenges.",
    role: "Solo Hardware Developer",
    responsibilities: [
      "Designed circuit schematics and power regulation setups on breadboards and breakout PCBs.",
      "Programmed low-level C++ firmware routines for sensor data acquisition and filtering.",
      "Implemented Wi-Fi connection managers with auto-reconnect logic and state recovery.",
      "Configured automated notification hooks and telemetry dispatches to cloud services.",
    ],
    technologies: [
      "Arduino",
      "ESP32",
      "ESP8266",
      "Embedded C/C++",
      "Sensors & Actuators",
      "Wi-Fi",
      "IoT Protocols",
    ],
    features: [
      "Multi-sensor hardware interfacing (rain, temperature, humidity, light, motion)",
      "Resilient Wi-Fi networking with automatic reconnection and watchdog timers",
      "Live telemetry transmission to cloud endpoints and webhooks",
      "Hardware relay and actuator control based on custom threshold conditions",
      "Power-efficient deep sleep scheduling for battery-powered sensor nodes",
    ],
    problem:
      "Connecting real-world sensors reliably requires addressing electrical noise, intermittent Wi-Fi coverage, and firmware memory constraints on microcontrollers.",
    solution:
      "Engineered modular C/C++ firmware pipelines featuring debounced polling loops, encrypted outbound telemetry, and fail-safe reconnect logic.",
    process: [
      "Circuit breadboarding, pin mapping, and voltage regulation",
      "Low-level C/C++ firmware development and sensor calibration",
      "Wireless payload testing and automated cloud event triggers",
      "Enclosure fitting and long-duration stability testing",
    ],
    links: [
      {
        label: "View Details",
        url: "#project-details",
        type: "details",
        primary: true,
      },
    ],
    featured: false,
    accentColor: "from-emerald-500 to-teal-600",
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    image: "/images/iot-preview.svg",
    badge: "Hardware & Systems (Solo)",
  },
  {
    id: "developer-server-launcher",
    slug: "developer-server-launcher",
    title: "Developer Server Launcher",
    category: "Developer Tool",
    filterCategories: ["Developer Tools"],
    shortDescription:
      "A Tkinter-based launcher to start, stop, and monitor dev servers with custom paths, optional ports, live log streaming, and one-click port termination.",
    detailedDescription:
      "A desktop productivity utility built with Python and Tkinter to streamline multi-server local development. Add custom servers with directory path and start commands, configure optional ports and environment variables, stream live console logs in real time, inspect every process actively listening on your machine, and kill orphaned port processes with a single click.",
    role: "Solo Developer",
    responsibilities: [
      "Engineered asynchronous subprocess management in Python to stream live stdout/stderr logs.",
      "Built socket-level network scanning utilities to detect and free occupied developer ports.",
      "Designed an intuitive, thread-safe desktop user interface using Tkinter.",
      "Implemented graceful process shutdown signaling (SIGINT/SIGTERM) with fallbacks.",
    ],
    technologies: [
      "Python",
      "Tkinter",
      "Subprocess API",
      "OS & Sockets",
      "Process Management",
    ],
    features: [
      "Start, stop, and monitor multiple local development servers from one window",
      "Add custom server profiles (path, start command, optional ports, environment variables)",
      "Live console output streaming directly within the desktop UI",
      "Port scanner to inspect processes currently listening on your PC",
      "One-click process termination to resolve 'port already in use' errors effortlessly",
    ],
    problem:
      "Developers running multiple microservices frequently encounter orphaned processes locking developer ports (EADDRINUSE), requiring tedious manual PID hunting in terminal commands.",
    solution:
      "A clean desktop dashboard that visualizes active server states, displays real-time logs, and provides instant one-click port termination.",
    process: [
      "Developer workflow analysis and desktop GUI wireframing",
      "Python threading and non-blocking subprocess stream pipes",
      "Cross-platform port detection via socket interrogation",
      "Tkinter UI packaging and GitHub open-source release",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/venujatech-byte/Server_Launcher.git",
        type: "github",
        primary: true,
      },
    ],
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    image: "/images/server-launcher-preview.png",
    badge: "Desktop Utility (Solo)",
  },
  {
    id: "esp32-cam-monitoring",
    slug: "esp32-cam-monitoring",
    title: "ESP32-CAM Smart Monitoring System",
    category: "IoT / Computer Vision / Security",
    filterCategories: ["IoT", "AI"],
    shortDescription:
      "A camera-based monitoring system built on ESP32-CAM featuring motion detection, image and video capture, web controls, and remote push alerts.",
    detailedDescription:
      "A compact smart security and visual monitoring system built on the ESP32-CAM module. Integrates OV2640 camera sensor controls, frame-differential motion detection algorithms, local network MJPEG video streaming, and automated instant notifications.",
    role: "Solo Hardware Developer",
    responsibilities: [
      "Configured camera sensor registers and dynamic resolution controls in C++.",
      "Implemented frame-difference motion detection algorithm in microcontroller memory.",
      "Created an embedded web server for live streaming and device configuration.",
      "Engineered automated webhook push notifications upon motion event triggers.",
    ],
    technologies: [
      "ESP32-CAM",
      "Embedded C/C++",
      "OV2640 Camera Sensor",
      "Motion Detection",
      "Wi-Fi Web Server",
      "HTTP / WebSockets",
    ],
    features: [
      "Dynamic resolution and camera sensor parameter adjustment",
      "Motion-triggered image and video buffer capture",
      "Local web server with browser-based controls and live stream",
      "Instant remote alert notifications sent upon motion detection",
      "Self-contained edge computing node with no monthly cloud subscription",
    ],
    problem:
      "Standard security camera solutions are subscription-locked, privacy-invasive, and lack open programmatic webhook access.",
    solution:
      "A lightweight, self-hosted hardware monitoring node running locally on an ESP32-CAM with instant remote alerts and open browser streaming.",
    process: [
      "OV2640 sensor timing configuration and PSRAM memory allocation",
      "Frame differential motion calculation in firmware loops",
      "Asynchronous web server implementation for local browser access",
      "Webhook trigger integration for mobile push notifications",
    ],
    links: [
      {
        label: "View Details",
        url: "#project-details",
        type: "details",
        primary: true,
      },
    ],
    featured: false,
    accentColor: "from-violet-500 to-purple-600",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    image: "/images/esp32cam-preview.svg",
    badge: "Computer Vision & IoT (Solo)",
  },
  {
    id: "esp-weather-monitoring",
    slug: "esp-weather-monitoring",
    title: "ESP Weather Monitoring & Alert System (ESP_Weather_BOT)",
    category: "IoT / Weather Monitoring",
    filterCategories: ["IoT"],
    shortDescription:
      "An IoT-based system that collects weather data using sensors and external APIs and provides real-time Telegram alerts for conditions such as rainfall.",
    detailedDescription:
      "An intelligent weather monitoring station engineered to safeguard outdoor equipment and notify users of imminent rainfall. Combines physical rain and environmental sensors connected to an ESP32 with meteorological REST APIs to correlate real-time atmospheric conditions and push automated alerts via Telegram.",
    role: "Solo IoT Developer",
    responsibilities: [
      "Calibrated analog rain sensors and digital environmental probes.",
      "Developed C++ and MicroPython firmware routines with HTTPS long-polling.",
      "Integrated OpenWeatherMap REST endpoints with on-board sensor data.",
      "Programmed Telegram Bot API integration for real-time alert dispatch.",
    ],
    technologies: [
      "ESP32",
      "Rain & Environmental Sensors",
      "Embedded C/C++",
      "Weather REST APIs",
      "Telegram Bot API",
      "Wi-Fi",
    ],
    features: [
      "Real-time sensor telemetry acquisition (rain level, temperature, atmospheric data)",
      "Correlation with external meteorological REST forecast APIs",
      "Automated instant rainfall warning notifications via Telegram Bot",
      "Configurable notification cooldowns to prevent spamming",
      "Robust auto-reconnection loop for uninterrupted 24/7 monitoring",
    ],
    problem:
      "General weather apps give broad regional forecasts that frequently miss localized sudden rainfall, causing unexpected damage to clothes, outdoor equipment, and sensitive areas.",
    solution:
      "A hyper-local IoT station combining physical rain sensors on an ESP32 with predictive meteorological APIs, instantly dispatching Telegram alerts.",
    process: [
      "Analog sensor moisture threshold calibration",
      "Firmware HTTP client integration for weather API sync",
      "Telegram Bot token authentication and chat dispatch setup",
      "Reliability stress-testing under intermittent network conditions",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/venujatech-byte/ESP_Weather_BOT.git",
        type: "github",
        primary: true,
      },
    ],
    featured: false,
    accentColor: "from-sky-500 to-cyan-600",
    gradient: "from-sky-600/20 via-cyan-600/10 to-transparent",
    image: "/images/weather-bot-preview.svg",
    badge: "IoT & Alert System (Solo)",
  },
];
