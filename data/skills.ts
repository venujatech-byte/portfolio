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
    id: "frontend",
    name: "Frontend Development",
    description: "Building modern, responsive, and high-performance user interfaces.",
    icon: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "JavaScript" },
      { name: "TypeScript", highlight: true },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS", highlight: true },
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Multi-paradigm languages for web, desktop, and embedded development.",
    icon: "Code2",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
    ],
  },
  {
    id: "backend-cloud",
    name: "Backend, Cloud & Database",
    description: "API backends, serverless architectures, and real-time cloud data stores.",
    icon: "Server",
    skills: [
      { name: "Flask", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Firebase", highlight: true },
      { name: "Firestore" },
      { name: "Vercel" },
    ],
  },
  {
    id: "iot-embedded",
    name: "IoT & Embedded Systems",
    description: "Hardware integration, microcontrollers, sensor arrays, and automation.",
    icon: "Cpu",
    skills: [
      { name: "Arduino", highlight: true },
      { name: "ESP32", highlight: true },
      { name: "ESP32-CAM", highlight: true },
      { name: "Sensors & Telemetry" },
      { name: "Wi-Fi & Protocols" },
      { name: "Automation" },
    ],
  },
  {
    id: "ai-systems",
    name: "AI & Intelligent Systems",
    description: "Area of focus & applied exploration connecting AI models and physical systems.",
    icon: "BrainCircuit",
    skills: [
      { name: "Computer Vision on Embedded (ESP32-CAM)", highlight: true },
      { name: "AI API Integrations" },
      { name: "Intelligent Automation Workflows" },
      { name: "Applied Machine Learning Concepts" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Collaboration",
    description: "Essential workflows for version control, UI design, and agile management.",
    icon: "Wrench",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Figma", highlight: true },
      { name: "Notion", highlight: true },
    ],
  },
];
