import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const headingId = `project-${project.slug}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className="relative group bg-surface-card border border-border rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250 p-6 flex flex-col gap-4"
    >
      <header className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 id={headingId} className="text-h3 font-semibold text-text-primary">
            {project.title}
          </h3>
          {project.teamSize ? (
            <span className="shrink-0 text-mono-xs font-mono bg-bg-subtle text-text-muted px-2 py-0.5 rounded border border-border">
              {project.teamSize}
            </span>
          ) : null}
        </div>
        <p className="text-mono-xs font-mono text-text-muted">{project.period}</p>
        <p className="text-caption text-text-secondary">{project.role}</p>
      </header>

      <p className="text-body text-text-secondary line-clamp-3">
        {project.description}
      </p>

      {project.impacts.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.impacts.map((impact) => (
            <li
              key={`${impact.metric}-${impact.value}`}
              className="bg-accent-subtle text-accent-fg text-mono-xs font-mono px-2 py-0.5 rounded-full border border-accent/20"
            >
              {impact.metric} {impact.value}
            </li>
          ))}
        </ul>
      ) : null}

      {project.stack.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech.name}
              className="text-mono-xs font-mono bg-bg-subtle text-text-muted px-2 py-0.5 rounded border border-border"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="flex-1" />

      <div className="flex flex-wrap items-center gap-4">
        {project.links.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} 라이브 데모 (새 탭에서 열림)`}
            className="inline-flex items-center gap-1.5 text-caption text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            라이브 데모
          </a>
        ) : null}
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub 저장소 (새 탭에서 열림)`}
          className="inline-flex items-center gap-1.5 text-caption text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </article>
  );
}
