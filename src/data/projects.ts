export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail?: string;
  images?: string[];
  technologies: string[];
  category: "mobile" | "fullstack" | "frontend" | "backend" | "other";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "lconnect",
    title: "LConnect",
    description: "A mobile application to support the management of prepaid smart water meters",
    longDescription:
      "LConnect is an Android mobile application built with React Native and TypeScript to support the management of prepaid smart water meters developed during the Kedaireka industry–university collaboration program. Designed to assist water company officers in the field, the app connects to IoT-enabled meters via Bluetooth Low Energy (BLE), enabling real-time configuration, data retrieval, and device calibration. Developed in close collaboration with stakeholders to meet operational requirements, it includes features such as user authentication, installment request management, usage monitoring, complaint handling, and device calibration. By integrating these functions into a single platform, LConnect streamlines workflows, reduces manual processes, and improves the efficiency of prepaid water meter management.",
    thumbnail: "/images/projects/lconnect.png",
    images: ["/images/projects/lconnect.png"],
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    category: "mobile",
    featured: true,
    year: 2024,
    tags: ["Frontend", "Mobile", "BLE"],
  },
  {
    id: "tvms-web",
    title: "SIMPELANTAS",
    description: "A web-based system to automate the detection, recording, and management of traffic violations",
    longDescription:
      "A web-based system developed as a final-year project to automate the detection, recording, and management of traffic violations. Built with Laravel for the backend and React for the frontend, it integrates computer vision for real-time detection, automated ticket generation, multi-channel notifications, and payment tracking, improving efficiency and transparency in law enforcement.  ",
    thumbnail: "/images/projects/tvms.png",
    images: ["/images/projects/tvms-2.png", "/images/projects/tvms-3.png", "/images/projects/tvms-4.png", "/images/projects/tvms-5.png", "/images/projects/tvms-6.png"],
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    category: "frontend",
    liveUrl: "https://etilang.web.id",
    githubUrl: "https://github.com/avicenan/tvms-frontend",
    featured: true,
    year: 2025,
    tags: ["Frontend", "React"],
  },
  {
    id: "shotlance-web",
    title: "Shotlance",
    description: "A web-based platform that connects photographers, videographers, and clients in an integrated ecosystem",
    longDescription:
      "A web-based platform built with Laravel and Tailwind CSS that connects photographers, videographers, and clients in an integrated ecosystem. Developed as part of a collaborative team using the Scrum methodology, with bi-weekly sprints, sprint planning, daily stand-ups, and sprint reviews to ensure iterative delivery of features. Jira was used for task tracking and backlog management, while GitHub facilitated version control, code reviews, and collaborative development. As a developer, I contributed to key features including: Service management and portfolio galleries for creative professionals. Service booking and price negotiation workflows. Secure payment integration and identity verification for professionals. Performance reporting to help professionals track service engagement.",
    thumbnail: "/images/projects/shotlance.png",
    images: ["/images/projects/shotlance.png"],
    technologies: ["Laravel", "Tailwind CSS", "Scrum", "Jira", "GitHub"],
    category: "fullstack",
    featured: false,
    year: 2024,
    tags: ["Fullstack", "E-commerce", "Payment", "Scrum", "Jira", "GitHub"],
  },
  {
    id: "sporta-pos",
    title: "Sporta Point-of-Sale",
    description: "A Point-of-Sale of sport equipment store",
    longDescription:
      "A Point-of-Sale web application created to fulfill the BNSP Web Developer certification requirements. Developed using Laravel, it offers inventory management, transaction processing, and sales reporting in a single platform, streamlining retail operations and ensuring accurate stock control.",
    thumbnail: "/images/projects/sporta.png",
    images: ["/images/projects/sporta-2.png", "/images/projects/sporta-3.png", "/images/projects/sporta-4.png", "/images/projects/sporta-5.png", "/images/projects/sporta-6.png", "/images/projects/sporta-7.png"],
    technologies: ["PHP", "Laravel", "MySQL"],
    category: "fullstack",
    githubUrl: "https://github.com/avicenan/sporta",
    featured: false,
    year: 2024,
    tags: ["Fullstack", "POS", "PHP", "Laravel", "MySQL"],
  },
  {
    id: "instarent-web",
    title: "Instarent",
    description: "Web for vehicle rental service",
    longDescription:
      "A web application for a vehicle rental service that allows users to rent vehicles for a specific period. Developed using Laravel, it offers a user-friendly interface for vehicle selection, booking, and payment processing. Features include vehicle availability, pricing, and booking management, ensuring a seamless rental experience.",
    thumbnail: "/images/projects/instarent.png",
    images: ["/images/projects/instarent.png"],
    technologies: ["PHP", "Laravel", "MySQL"],
    category: "fullstack",
    githubUrl: "https://github.com/avicenan/web-instarent",
    featured: false,
    year: 2023,
    tags: ["Fullstack", "UI/UX Design", "PHP", "Laravel", "Midtrans Payment Gateway", "MySQL"],
  },
  // {
  //   id: "spk-kelola-sampah",
  //   title: "SPK",
  //   description: "Content management system for bloggers and writers",
  //   longDescription: "A modern blog platform with content management system features. Includes rich text editor, SEO optimization, analytics dashboard, and multi-user support with role-based permissions.",
  //   thumbnail: "/images/projects/blog-platform.jpg",
  //   technologies: ["PHP", "Laravel", "MySQL"],
  //   category: "fullstack",
  //   githubUrl: "https://github.com/avicenan/spk-kelola-sampah",
  //   featured: false,
  //   year: 2023,
  //   tags: ["Fullstack", "DSS", "PHP", "Laravel", "MySQL"],
  // },
  // {
  //   id: "chat-application",
  //   title: "FoodGather",
  //   description: "Real-time messaging application with file sharing",
  //   longDescription: "A real-time chat application with features like instant messaging, file sharing, user presence indicators, and message history. Built with WebSocket technology for real-time communication.",
  //   thumbnail: "/images/projects/chat-app.jpg",
  //   technologies: ["Figma", "UI/UX Design"],
  //   category: "fullstack",
  //   liveUrl: "https://youtu.be/hIvWwuQfqbI",
  //   featured: false,
  //   year: 2022,
  //   tags: ["UI/UX Design", "Figma"],
  // },
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter((project) => project.technologies.some((tech) => tech.toLowerCase().includes(technology.toLowerCase())));
};

export const getProjectsByYear = (year: number): Project[] => {
  return projects.filter((project) => project.year === year);
};

export const getAllTechnologies = (): string[] => {
  const technologies = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => technologies.add(tech));
  });
  return Array.from(technologies).sort();
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
