import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { cn } from '@/lib/utils';
import { skillsByCategory } from '@/data/skills';
import type { Skill, SkillCategory } from '@/types';

const CATEGORY_ORDER: SkillCategory[] = [
  'language',
  'framework',
  'styling',
  'tooling',
  'devops',
];

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: 'Language',
  framework: 'Framework',
  styling: 'Styling',
  tooling: 'Tooling',
  devops: 'DevOps',
};

function SkillPill({ skill }: { skill: Skill }) {
  const isPrimary = skill.level === 'primary';

  return (
    <li
      className={cn(
        'text-mono-sm font-mono rounded-full border px-3 py-1',
        isPrimary
          ? 'bg-accent-subtle text-accent-fg border-accent/20'
          : 'bg-surface-card text-text-secondary border-border',
      )}
    >
      {skill.name}
    </li>
  );
}

function SkillCategoryGroup({
  category,
  skills,
}: {
  category: SkillCategory;
  skills: Skill[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-h3 text-text-primary">{CATEGORY_LABELS[category]}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" subtle>
      <div className="flex flex-col gap-3">
        <p className="font-mono text-caption text-accent">// SKILLS</p>
        <h2 className="text-h1 text-text-primary">기술 스택</h2>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_ORDER.map((category) => {
          const skills = skillsByCategory[category];
          if (!skills || skills.length === 0) {
            return null;
          }

          return (
            <SkillCategoryGroup
              key={category}
              category={category}
              skills={skills}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
