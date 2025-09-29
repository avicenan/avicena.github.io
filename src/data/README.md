# Data Directory

This directory contains all the data files for the portfolio website.

## Files

### `projects.ts`

Contains all project data with the following structure:

```typescript
interface Project {
  id: string; // Unique identifier
  title: string; // Project title
  description: string; // Short description
  longDescription?: string; // Detailed description
  image: string; // Image path
  technologies: string[]; // Technologies used
  category: "web" | "mobile" | "fullstack" | "other";
  liveUrl?: string; // Live demo URL
  githubUrl?: string; // GitHub repository URL
  featured: boolean; // Whether to feature this project
  year: number; // Year completed
  tags: string[]; // Searchable tags
}
```

**Helper Functions:**

- `getFeaturedProjects()` - Get all featured projects
- `getProjectsByCategory(category)` - Filter by category
- `getProjectsByTechnology(technology)` - Filter by technology
- `getProjectsByYear(year)` - Filter by year
- `getAllTechnologies()` - Get all unique technologies
- `getAllTags()` - Get all unique tags

### `skills.ts`

Contains skills and technology data with the following structure:

```typescript
interface SkillCategory {
  title: string; // Category title
  icon: any; // Lucide React icon
  description: string; // Category description
  skills: string[]; // Skills in this category
}

interface TechnologyLogo {
  [key: string]: string; // Technology name to emoji mapping
}
```

**Helper Functions:**

- `getAllSkills()` - Get all skills across categories
- `getSkillsByCategory(categoryTitle)` - Get skills for a specific category
- `getSkillLogo(skillName)` - Get emoji logo for a skill

### `personal.ts`

Contains personal information with the following structure:

```typescript
interface PersonalInfo {
  name: string; // Full name
  title: string; // Professional title
  email: string; // Contact email
  location: string; // Current location
  birthYear: number; // Birth year
  experience: string; // Experience description
  education: string; // Education background
  bio: string; // Short bio
  longBio: string; // Detailed bio
  profileImage: string; // Profile image path
  resumeUrl?: string; // Resume/CV URL
  githubUrl: string; // GitHub profile URL
  linkedinUrl?: string; // LinkedIn profile URL
  twitterUrl?: string; // Twitter profile URL
}
```

**Helper Functions:**

- `getAge()` - Calculate current age from birth year
- `getExperienceYears()` - Get experience description

## Usage

### Importing Projects

```typescript
import { projects, getFeaturedProjects, getProjectsByCategory } from "../data/projects";

// Get all projects
const allProjects = projects;

// Get featured projects
const featuredProjects = getFeaturedProjects();

// Get web projects
const webProjects = getProjectsByCategory("web");
```

### Importing Skills

```typescript
import { skillCategories, technologyLogos, getAllSkills } from "../data/skills";

// Get all skill categories
const categories = skillCategories;

// Get all skills
const allSkills = getAllSkills();

// Get logo for a technology
const reactLogo = technologyLogos["React"]; // Returns "⚛️"
```

### Importing Personal Info

```typescript
import { personalInfo, getAge } from "../data/personal";

// Get personal information
const name = personalInfo.name;
const email = personalInfo.email;

// Get calculated age
const age = getAge();
```

## Adding New Data

### Adding a New Project

1. Add a new object to the `projects` array in `projects.ts`
2. Include all required fields
3. Add project image to `public/images/projects/`
4. Update the image path in the project data

### Adding a New Skill

1. Add the skill to the appropriate category in `skillCategories`
2. Add the technology logo mapping in `technologyLogos`
3. Update the Skills component if needed

### Updating Personal Information

1. Modify the `personalInfo` object in `personal.ts`
2. Update profile image in `public/images/` if needed
3. Add resume file to `public/` if needed

## Image Requirements

- Project images should be placed in `public/images/projects/`
- Profile image should be placed in `public/images/`
- Recommended size: 800x600px or 16:9 aspect ratio for projects
- Profile image: 400x400px or 1:1 aspect ratio
- Format: JPG, PNG, or WebP
- File names should be descriptive and lowercase with hyphens

## Categories

### Project Categories

- `web` - Frontend web applications
- `mobile` - Mobile applications
- `fullstack` - Full-stack applications
- `other` - Other types of projects

### Skill Categories

- Frontend Development
- Backend Development
- Mobile Development
- Tools & DevOps
