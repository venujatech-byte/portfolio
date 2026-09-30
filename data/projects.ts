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
    filterCategories: ["Web", "Mobile"],
    shortDescription:
      "A complete web and mobile platform engineered to help small online sellers manage products, customer orders, inventory, and end-to-end business operations in one unified workspace.",
    detailedDescription:
      "Vendly.lk is a comprehensive business management system tailored specifically for small e-commerce merchants and social commerce sellers. As Team Leader, I spearheaded the frontend architecture, UX design, and team coordination to deliver a cohesive experience spanning web and mobile clients backed by scalable cloud services.",
    role: "Team Leader",
    responsibilities: [
      "Led the design and architecture of the user interface using Figma and modern design systems.",
      "Developed key responsive web application interfaces using React and modern component libraries.",
      "Architected real-time inventory and order processing workflows connected with Firebase.",
      "Coordinated cross-functional tasks across frontend and mobile engineering streams using Notion and GitHub.",
      "Conducted sprint planning, task delegation, and pull request reviews across repositories.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Flask",
      "Firebase",
      "Firestore",
      "Figma",
      "GitHub",
      "Notion",
    ],
    features: [
      "Centralized order management with automated status pipelines",
      "Real-time inventory synchronization across multi-channel sales",
      "Comprehensive product catalog and pricing matrix control",
      "Responsive merchant dashboard with key sales and operational metrics",
      "Mobile companion app designed for on-the-go order fulfillment and notifications",
    ],
    problem:
      "Small online sellers frequently juggle multiple social media channels, spreadsheets, and messaging apps to track orders and stock. This leads to overselling, misplaced orders, and manual calculation errors.",
    solution:
      "Vendly.lk unifies catalog management, customer records, and order tracking into a single streamlined web and mobile application with real-time Firebase sync.",
    process: [
      "Requirement discovery & merchant journey mapping in Figma",
      "High-fidelity UI prototyping and design system tokens creation",
      "React frontend component development with stateful modular architecture",
      "Backend API endpoints structuring with Flask and Firebase Firestore integration",
      "Continuous team collaboration, PR reviews, and Vercel cloud deployment",
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
    badge: "Primary Featured Project",
  },
  {
    id: "arduino-esp32-iot",
    slug: "arduino-esp32-iot",
    title: "Arduino & ESP32 IoT Projects",
    category: "IoT / Embedded Systems",
    filterCategories: ["IoT"],
    shortDescription:
      "A curated collection of hardware-driven embedded solutions developed with Arduino and ESP32 microcontrollers, combining environmental telemetry, Wi-Fi connectivity, and automated control.",
    detailedDescription:
      "An evolving series of embedded computing projects exploring microcontroller programming, wireless network protocols, peripheral sensor integration, and real-time telemetry processing. The projects demonstrate practical interfacing between physical hardware and network-connected digital services.",
    technologies: [
      "Arduino",
      "ESP32",
      "Embedded C/C++",
      "Sensors",
      "Wi-Fi",
      "IoT Protocols",
      "Automation",
    ],
    features: [
      "Multi-sensor hardware interfacing (temperature, humidity, motion, light)",
      "Wi-Fi network connection management with auto-reconnect logic",
      "Live telemetry transmission to cloud endpoints and webhooks",
      "Physical relay and actuator triggering based on threshold conditions",
      "Power-efficient deep sleep scheduling for battery-powered operation",
    ],
    problem:
      "Bridging the physical world with cloud ecosystems requires robust low-level firmware that handles network jitter, power constraints, and noisy sensor telemetry reliably.",
    solution:
      "Designed and flashed modular embedded C/C++ firmware pipelines featuring sensor debouncing, Wi-Fi state recovery, and lightweight communication mechanisms.",
    process: [
      "Circuit breadboarding and schematic verification",
      "Firmware logic development and hardware register programming in C/C++",
      "Sensor calibration and signal filtering algorithms",
      "Wireless payload transmission testing and edge automation triggers",
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
    badge: "Hardware & Systems",
  },
  {
    id: "developer-server-launcher",
    slug: "developer-server-launcher",
    title: "Developer Server Launcher",
    category: "Developer Tool",
    filterCategories: ["Developer Tools"],
    shortDescription:
      "A fast, native Tkinter desktop utility engineered to simplify local development server management, process monitoring, live log streaming, and one-click port termination.",
    detailedDescription:
      "A productivity desktop tool built in Python to solve a common engineering pain point: managing multiple backend, frontend, and database microservices across different terminal tabs. It provides an intuitive GUI to configure, launch, monitor, inspect open ports, stream output logs, and kill rogue background processes.",
    technologies: [
      "Python",
      "Tkinter",
      "Subprocess API",
      "OS & Process Management",
      "Desktop GUI",
    ],
    features: [
      "Start and stop multiple development servers from a single dashboard",
      "Monitor running process status and resource state in real time",
      "Add custom server configurations with directory paths and start scripts",
      "Configure custom ports, environment variables, and graceful stop commands",
      "Stream live server console output and error logs inside the window",
      "Scan and inspect system processes actively listening on network ports",
      "One-click process kill action to free occupied developer ports effortlessly",
    ],
    problem:
      "Developers running microservices, local APIs, and frontend servers often have orphaned processes holding ports (e.g., EADDRINUSE) and have to manually hunt PID numbers via command-line utilities.",
    solution:
      "A clean desktop interface that maps configured projects, monitors process handles, streams logs directly, and provides single-click port freeing.",
    process: [
      "CLI pain-point analysis and GUI wireframing",
      "Python multiprocessing & asynchronous subprocess stdout streaming",
      "Network socket interrogation to detect occupied ports",
      "Tkinter interface styling and thread-safe UI updates",
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
    badge: "Desktop Utility",
  },
  {
    id: "esp32-cam-monitoring",
    slug: "esp32-cam-monitoring",
    title: "ESP32-CAM Smart Monitoring System",
    category: "IoT / Computer Vision / Security",
    filterCategories: ["IoT", "AI"],
    shortDescription:
      "An intelligent vision and monitoring system powered by ESP32-CAM featuring motion detection, frame capture, live web controls, and remote push alerts.",
    detailedDescription:
      "A compact smart security and visual monitoring node built around the ESP32-CAM module. It combines low-level camera sensor initialization with frame-difference motion detection, web streaming capabilities, and automated instant notifications.",
    technologies: [
      "ESP32-CAM",
      "Embedded C/C++",
      "Camera Sensor (OV2640)",
      "Motion Detection",
      "Wi-Fi Web Server",
      "HTTP/WebSockets",
    ],
    features: [
      "Hardware camera initialization and dynamic resolution configuration",
      "Motion-triggered image and video buffer capture",
      "Embedded web server hosting an interactive browser dashboard",
      "Live MJPEG video stream with minimal latency over local network",
      "Remote trigger notifications dispatched upon security alerts",
      "Configurable detection zones and sensor sensitivity controls",
    ],
    problem:
      "Commercial smart cameras are expensive, privacy-invasive, and locked into proprietary subscriptions with high power requirements.",
    solution:
      "An open, self-hosted hardware monitoring solution running locally on an accessible ESP32-CAM with zero cloud dependencies and immediate notification delivery.",
    process: [
      "OV2640 sensor timing tuning and PSRAM memory buffer management",
      "Frame differential motion calculation in firmware",
      "Lightweight asynchronous web server implementation on ESP32",
      "Notification webhook integration for instant intrusion dispatch",
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
    badge: "Computer Vision & IoT",
  },
  {
    id: "esp-weather-monitoring",
    slug: "esp-weather-monitoring",
    title: "ESP Weather Monitoring & Alert System",
    category: "IoT / Weather Monitoring",
    filterCategories: ["IoT"],
    shortDescription:
      "An environmental telemetry system combining real-world physical sensors with external meteorological APIs to deliver proactive rainfall and threshold alerts via Telegram.",
    detailedDescription:
      "An intelligent weather station designed to protect equipment and notify users of imminent weather events. By combining on-site physical sensors (rain detector, temperature, humidity) with third-party meteorological API data, it calculates hyper-local weather conditions and pushes actionable Telegram warnings in real time.",
    technologies: [
      "ESP32",
      "Environmental Sensors",
      "Python / MicroPython",
      "Weather APIs",
      "Telegram Bot API",
      "Wi-Fi",
    ],
    features: [
      "Real-time sensor telemetry acquisition (rain level, temperature, atmospheric metrics)",
      "Third-party weather forecasting API synchronization",
      "Instant push notifications via Telegram Bot upon rainfall detection",
      "Configurable notification cooldowns to prevent message flooding",
      "Resilient network reconnection loop with offline data buffer",
    ],
    problem:
      "General weather apps give broad regional forecasts that frequently miss localized sudden downpours, causing unexpected damage to clothes, outdoor equipment, and sensitive areas.",
    solution:
      "A dual-source alert system combining hyper-local real-time rain sensors on an ESP32 with predictive meteorological APIs, instantly alerting users on Telegram.",
    process: [
      "Sensor analog/digital calibration and moisture threshold testing",
      "ESP32 firmware integration with HTTP REST client libraries",
      "Telegram Bot setup with bot token authentication and chat dispatch",
      "Reliability stress-testing under intermittent network connectivity",
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
    badge: "Environmental Telemetry",
  },
  {
    id: "telegram-bot-esp32",
    slug: "telegram-bot-esp32",
    title: "Telegram Bot Using ESP32",
    category: "IoT / Automation",
    filterCategories: ["IoT"],
    shortDescription:
      "A bidirectional communication interface enabling secure remote microcontroller commanding, telemetry polling, and automated device actuation directly through Telegram chats.",
    detailedDescription:
      "This project transforms an ESP32 microcontroller into a smart automated node reachable from anywhere via the Telegram messaging app. It listens for incoming bot commands, validates user permissions, replies with sensor readings, and allows users to trigger GPIO outputs remotely without opening port forwards on their home router.",
    technologies: [
      "ESP32",
      "Telegram Bot API",
      "Wi-Fi",
      "Embedded C/C++",
      "GPIO Automation",
      "HTTPS Polling",
    ],
    features: [
      "Bidirectional chat-based command interface (e.g., `/status`, `/toggle`, `/readings`)",
      "End-to-end HTTPS encrypted communication with Telegram API servers",
      "Direct hardware GPIO pin actuation via natural chat commands",
      "Immediate automated event alerts sent directly into a personal chat or channel",
      "Built-in user authorization checking to reject unauthorized commands",
    ],
    problem:
      "Controlling home hardware remotely typically requires dynamic DNS setups, router port forwarding, or vulnerable public endpoints.",
    solution:
      "By leveraging outgoing HTTPS long-polling to the official Telegram Bot API, the ESP32 remains securely behind any NAT or firewall while being globally accessible.",
    process: [
      "Telegram bot token generation and secure key storage configuration",
      "Implementation of JSON response parser on the microcontroller",
      "Command dispatcher architecture mapping chat strings to GPIO routines",
      "Watchdog timer integration to guarantee continuous 24/7 uptime",
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
    accentColor: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    image: "/images/telegram-bot-preview.svg",
    badge: "Remote Automation",
  },
];
