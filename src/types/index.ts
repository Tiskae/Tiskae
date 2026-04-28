export interface Skill {
  name: string;
  iconId: string;
}

export interface Experience {
  company: string;
  companyWebsite: string;
  role: string;
  duration: string;
  logoSrc: string;
  logoAlt: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  note?: string;
  imageSrc: string; // Main/cover image
  images?: string[]; // Additional images for carousel
  imageAlt: string;
  imageContain?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  iconId: string;
}

export interface NavTab {
  label: string;
  sectionId: string;
}
