import { Palette, Database, Smartphone, Zap } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: any;
  description: string;
  skills: string[];
}

export interface TechnologyLogo {
  [key: string]: string | { svg: string; emoji: string };
}

// Technology logos mapping with SVG and emoji fallbacks
export const technologyLogos: TechnologyLogo = {
  React: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    emoji: "⚛️",
  },
  TypeScript: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    emoji: "🔷",
  },
  "Next.js": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    emoji: "⚡",
  },
  "Tailwind CSS": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    emoji: "🎨",
  },
  "HTML/CSS": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    emoji: "🌐",
  },
  "Node.js": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    emoji: "🟢",
  },
  "Express.js": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    emoji: "🚀",
  },
  Laravel: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    emoji: "🐘",
  },
  GraphQL: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    emoji: "🔮",
  },
  MySQL: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    emoji: "🐬",
  },
  "React Native": {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    emoji: "📱",
  },
  Git: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    emoji: "📝",
  },
  Docker: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    emoji: "🐳",
  },
  Figma: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    emoji: "🎨",
  },
  Jira: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    emoji: "🔄",
  },
  GitHub: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    emoji: "🐙",
  },
  JavaScript: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    emoji: "🟡",
  },
  Bootstrap: {
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    emoji: "🎯",
  },
  // "Agile/Scrum": "🔄",
  // "Mobile UI/UX": "📱",
};

// Skills organized by categories
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Palette,
    description: "Modern web development with React, TypeScript, and responsive design",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Server-side development with Node.js, databases, and APIs",
    skills: ["Node.js", "Express.js", "Laravel", "GraphQL", "MySQL"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile development with React Native and Flutter",
    skills: ["React Native"],
  },
  {
    title: "Tools & DevOps",
    icon: Zap,
    description: "DevOps, cloud services, and development tools",
    skills: ["Git", "GitHub", "Docker", "Figma", "Jira"],
  },
];

// Helper functions
export const getAllSkills = (): string[] => {
  const allSkills: string[] = [];
  skillCategories.forEach((category) => {
    allSkills.push(...category.skills);
  });
  return allSkills;
};

export const getSkillsByCategory = (categoryTitle: string): string[] => {
  const category = skillCategories.find((cat) => cat.title === categoryTitle);
  return category ? category.skills : [];
};

export const getSkillLogo = (skillName: string): { svg?: string; emoji: string } => {
  const logo = technologyLogos[skillName];

  if (typeof logo === "string") {
    return { emoji: logo };
  }

  if (logo && typeof logo === "object" && "svg" in logo && "emoji" in logo) {
    return { svg: logo.svg, emoji: logo.emoji };
  }

  return { emoji: "💻" };
};
