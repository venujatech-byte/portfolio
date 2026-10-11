export interface SkillItem {
  name: string;
  level?: "Proficient" | "Working Knowledge" | "Core Competency";
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    description: "Core languages for software, system scripting, web, and microcontrollers.",
    icon: "Code2",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++ (Arduino & Embedded)", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
    ],
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Development",
    description: "Building responsive web platforms and cross-platform mobile applications.",
    icon: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "React Native (Mobile)", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS", highlight: true },
      { name: "REST APIs" },
    ],
  },
  {
    id: "backend-cloud",
    name: "Backend, Cloud & Database",
    description: "Server architectures, real-time cloud data stores, and third-party services.",
    icon: "Server",
    skills: [
      { name: "Flask (Python)", highlight: true },
      { name: "Firebase (Realtime & Firestore)", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Amazon Web Services (AWS)", highlight: true },
      { name: "Cloudinary (Media CDN)" },
      { name: "Brevo (Email Services)" },
    ],
  },
  {
    id: "iot-embedded",
    name: "Embedded Systems & IoT",
    description: "Microcontroller firmware, edge sensing, computer vision, and wireless protocols.",
    icon: "Cpu",
    skills: [
      { name: "ESP32", highlight: true },
      { name: "ESP32-CAM (Smart Vision)", highlight: true },
      { name: "ESP8266" },
      { name: "Arduino Uno/Nano", highlight: true },
      { name: "Sensors & Actuators" },
      { name: "Wi-Fi & Telegram Bot API" },
    ],
  },
  {
    id: "systems-devops",
    name: "Systems, DevOps & Tools",
    description: "Command line administration, version control, and development environments.",
    icon: "Terminal",
    skills: [
      { name: "Linux OS & Command Line", highlight: true },
      { name: "Linux Containers" },
      { name: "Git & GitHub", highlight: true },
      { name: "Visual Studio Code" },
      { name: "Android Studio" },
    ],
  },
  {
    id: "leadership-management",
    name: "Leadership & Management",
    description: "Team direction, UI/UX architecture, Agile sprints, and strategic coordination.",
    icon: "Users",
    skills: [
      { name: "Team Leadership", highlight: true },
      { name: "Project Management (Notion)", highlight: true },
      { name: "Figma UI/UX Prototyping", highlight: true },
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Decision Making" },
    ],
  },
];
