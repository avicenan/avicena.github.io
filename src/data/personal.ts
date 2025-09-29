export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  birthYear: number;
  experience: string;
  education: string;
  bio: string;
  longBio: string;
  profileImage: string;
  resumeUrl?: string;
  githubUrl: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Avicena Naufaldo",
  title: "Full Stack Developer",
  email: "avicena.naufaldo@gmail.com",
  location: "Bekasi, Indonesia",
  birthYear: 2003,
  experience: "Fullstack Development",
  education: "Bachelor of Information Systems",
  bio: "I am a passionate Full Stack Developer with a love for creating innovative digital solutions.",
  longBio:
    "I am a fresh graduate in Information Systems from Telkom University with a focus on full stack web and mobile development. Experienced in academic, research, and industry projects, I enjoy creating user-centered solutions and contributing in both frontend and backend roles. As a BNSP Certified Web Developer, I am passionate about building impactful and innovative technology. I am currently open to work and collaboration opportunities in web and mobile development. I welcome roles or projects where I can apply my skills, grow professionally, and contribute to meaningful digital solutions.",
  profileImage: "/images/profile-photo.png",
  resumeUrl: "/documents/CV_Avicena Naufaldo_English.pdf",
  githubUrl: "https://github.com/avicenan",
  linkedinUrl: "https://linkedin.com/in/avicenanaufaldo",
  instagramUrl: "https://instagram.com/avicenanaufaldo/",
};

export const getAge = (): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - personalInfo.birthYear;
};

export const getExperienceYears = (): string => {
  return personalInfo.experience;
};
