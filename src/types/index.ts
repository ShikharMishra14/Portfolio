export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  stack: string[];
}

export interface Award {
  title: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}
