import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { profile } from '@/data/profile';

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '3', label: 'Projects' },
  { value: 'React + TypeScript', label: '전문 스택' },
  { value: 'WCAG 2.1 AA', label: '접근성 준수' },
];

function StatItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-h3 text-text-primary">{value}</dt>
      <dd className="text-caption text-text-muted">{label}</dd>
    </div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-caption text-accent">// ABOUT</p>
        <h2 className="text-h1 text-text-primary">About Me</h2>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {profile.bio.map((paragraph) => (
          <p key={paragraph} className="text-body-lg text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-12 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:gap-16">
        {STATS.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </dl>
    </SectionWrapper>
  );
}
