export type ProjectSlug =
  | 'portfolio-fe'
  | 'vacation-form'
  | 'openmind-knock'
  | 'checkchaek';

export type TechCategory =
  | 'language'
  | 'framework'
  | 'styling'
  | 'tooling'
  | 'deploy';

export interface TechStack {
  name: string;
  category: TechCategory;
}

export interface ProjectLink {
  live?: string;
  github: string;
}

export interface ProjectImpact {
  metric: string;
  value: string;
}

export interface Troubleshooting {
  title: string;
  content: string;
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  description: string;
  role: string;
  period: string;
  teamSize?: string;
  stack: TechStack[];
  links: ProjectLink;
  impacts: ProjectImpact[];
  problem: string;
  solution: string;
  featured: boolean;
  troubleshooting?: Troubleshooting[];
  retrospective?: string[];
}

export type SkillCategory =
  | 'language'
  | 'framework'
  | 'styling'
  | 'tooling'
  | 'devops';

export type SkillLevel = 'primary' | 'secondary' | 'learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export type SocialPlatform = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  github: string;
  linkedin?: string;
  resumeUrl?: string;
}
