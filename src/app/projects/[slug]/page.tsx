import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, projects } from '@/data/projects';
import type { Project } from '@/types';

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: '프로젝트를 찾을 수 없습니다 | 강성구' };
  }

  return {
    title: `${project.title} | 강성구 포트폴리오`,
    description: project.description,
    openGraph: {
      title: `${project.title} | 강성구 포트폴리오`,
      description: project.description,
      type: 'article',
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-container px-6 py-16 sm:py-20">
      <BackLink />
      <ProjectHero project={project} />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
        <div className="flex flex-col gap-12">
          <ProblemSection problem={project.problem} />
          <SolutionSection solution={project.solution} />
          {project.troubleshooting && project.troubleshooting.length > 0 ? (
            <TroubleshootingSection items={project.troubleshooting} />
          ) : null}
          {project.retrospective && project.retrospective.length > 0 ? (
            <RetrospectiveSection items={project.retrospective} />
          ) : null}
        </div>

        <ProjectSidebar project={project} />
      </div>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href="/#projects"
      aria-label="프로젝트 목록으로 돌아가기"
      className="inline-flex items-center gap-1.5 text-caption font-medium text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      목록으로
    </Link>
  );
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="mt-8 flex flex-col gap-5 border-b border-border pb-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-display text-text-primary">{project.title}</h1>
        <p className="font-mono text-caption text-accent">{project.period}</p>
        <p className="text-body-lg text-text-secondary">{project.description}</p>
      </div>

      <dl className="flex flex-col gap-3 sm:flex-row sm:gap-10">
        <div className="flex flex-col gap-0.5">
          <dt className="text-mono-xs font-mono uppercase text-text-muted">역할</dt>
          <dd className="text-body text-text-primary">{project.role}</dd>
        </div>
        {project.teamSize ? (
          <div className="flex flex-col gap-0.5">
            <dt className="text-mono-xs font-mono uppercase text-text-muted">
              팀 구성
            </dt>
            <dd className="text-body text-text-primary">{project.teamSize}</dd>
          </div>
        ) : null}
      </dl>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub 저장소 (새 탭에서 열림)`}
          className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface-card px-4 py-2 text-caption font-medium text-text-primary hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        {project.links.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} 라이브 데모 (새 탭에서 열림)`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-caption font-medium text-text-onAccent hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            라이브 데모
          </a>
        ) : null}
      </div>
    </header>
  );
}

function ProblemSection({ problem }: { problem: string }) {
  return (
    <section aria-labelledby="problem-heading" className="flex flex-col gap-4">
      <h2 id="problem-heading" className="text-h2 text-text-primary">
        문제 상황
      </h2>
      <p className="text-body text-text-secondary">{problem}</p>
    </section>
  );
}

function SolutionSection({ solution }: { solution: string }) {
  return (
    <section aria-labelledby="solution-heading" className="flex flex-col gap-4">
      <h2 id="solution-heading" className="text-h2 text-text-primary">
        해결 방법
      </h2>
      <p className="text-body text-text-secondary">{solution}</p>
    </section>
  );
}

function TroubleshootingSection({
  items,
}: {
  items: NonNullable<Project['troubleshooting']>;
}) {
  return (
    <section
      aria-labelledby="troubleshooting-heading"
      className="flex flex-col gap-4"
    >
      <h2 id="troubleshooting-heading" className="text-h2 text-text-primary">
        트러블슈팅
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => {
          const itemId = `troubleshooting-item-${index}`;
          return (
            <li
              key={item.title}
              aria-labelledby={itemId}
              className="rounded-lg border border-border bg-surface-card p-5 shadow-card"
            >
              <h3
                id={itemId}
                className="text-h3 text-text-primary"
              >
                {item.title}
              </h3>
              <p className="mt-2 text-body text-text-secondary">{item.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function RetrospectiveSection({ items }: { items: string[] }) {
  return (
    <section
      aria-labelledby="retrospective-heading"
      className="flex flex-col gap-4"
    >
      <h2 id="retrospective-heading" className="text-h2 text-text-primary">
        회고 / 배운 점
      </h2>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-body text-text-secondary"
          >
            <span aria-hidden="true" className="mt-1 text-accent">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectSidebar({ project }: { project: Project }) {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
      <section
        aria-labelledby="impacts-heading"
        className="rounded-lg border border-border bg-bg-subtle p-5"
      >
        <h2
          id="impacts-heading"
          className="text-mono-sm font-mono uppercase tracking-wide text-text-muted"
        >
          성과
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {project.impacts.map((impact) => (
            <li
              key={`${impact.metric}-${impact.value}`}
              className="flex flex-col gap-0.5"
            >
              <span className="text-body font-semibold text-accent-fg">
                {impact.value}
              </span>
              <span className="text-caption text-text-secondary">
                {impact.metric}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="stack-heading"
        className="rounded-lg border border-border bg-bg-subtle p-5"
      >
        <h2
          id="stack-heading"
          className="text-mono-sm font-mono uppercase tracking-wide text-text-muted"
        >
          기술 스택
        </h2>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech.name}
              className="rounded border border-border bg-surface-card px-2 py-0.5 font-mono text-mono-xs text-text-muted"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
