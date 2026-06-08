import type { Skill, SkillCategory } from '@/types';

export const skills: Skill[] = [
  // Language
  { name: 'TypeScript', category: 'language', level: 'primary' },
  { name: 'JavaScript', category: 'language', level: 'primary' },
  { name: 'HTML5', category: 'language', level: 'primary' },
  { name: 'CSS3', category: 'language', level: 'primary' },
  // Framework
  { name: 'React', category: 'framework', level: 'primary' },
  { name: 'Next.js', category: 'framework', level: 'primary' },
  // Styling
  { name: 'Tailwind CSS', category: 'styling', level: 'primary' },
  { name: 'SASS/SCSS', category: 'styling', level: 'secondary' },
  // Tooling
  { name: 'TanStack Query', category: 'tooling', level: 'primary' },
  { name: 'Redux', category: 'tooling', level: 'secondary' },
  { name: 'Framer Motion', category: 'tooling', level: 'secondary' },
  { name: 'react-pdf', category: 'tooling', level: 'secondary' },
  { name: 'Chart.js', category: 'tooling', level: 'secondary' },
  { name: 'Git', category: 'tooling', level: 'primary' },
  // DevOps
  { name: 'Vercel', category: 'devops', level: 'primary' },
  { name: 'Netlify', category: 'devops', level: 'secondary' },
  { name: 'AWS', category: 'devops', level: 'secondary' },
];

export type SkillsByCategory = Partial<Record<SkillCategory, Skill[]>>;

export const skillsByCategory: SkillsByCategory = skills.reduce<SkillsByCategory>(
  (acc, skill) => {
    const group = acc[skill.category] ?? [];
    group.push(skill);
    acc[skill.category] = group;
    return acc;
  },
  {},
);
