import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import type { ProjectSlug } from '@/types';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | 강성구 포트폴리오`,
    description: project.description,
  };
}

const CHIP =
  'text-mono-xs font-mono px-2.5 py-1 rounded-full border';

const SECTION_HEADING =
  'text-h3 font-semibold text-text-primary mb-4';

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: ProjectSlug };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-bg-base pt-20">
      {/* 상단 네비게이션 */}
      <div className="mx-auto max-w-container px-4 py-8 md:px-8">
        <Link
          href="/#projects"
          className={cn(
            'inline-flex items-center gap-2 text-caption text-text-secondary',
            'hover:text-accent transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm',
          )}
        >
          <ArrowLeft size={16} aria-hidden />
          목록으로
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-container px-4 pb-12 md:px-8">
        <p className="font-mono text-caption text-accent mb-3">
          {project.period}
        </p>
        <h1 className="text-h1 font-bold text-text-primary mb-4">
          {project.title}
        </h1>
        <p className="text-body-lg text-text-secondary max-w-2xl mb-6">
          {project.description}
        </p>

        {/* 메타 정보 */}
        <dl className="flex flex-wrap gap-6 text-caption mb-8">
          <div>
            <dt className="text-text-muted mb-1">역할</dt>
            <dd className="text-text-primary font-medium">{project.role}</dd>
          </div>
          {project.teamSize && (
            <div>
              <dt className="text-text-muted mb-1">팀 구성</dt>
              <dd className="text-text-primary font-medium">{project.teamSize}</dd>
            </div>
          )}
        </dl>

        {/* 링크 */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-md text-caption font-medium',
              'border border-border-strong text-text-primary',
              'hover:border-accent hover:text-accent transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
            )}
          >
            <Github size={15} aria-hidden />
            GitHub
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-md text-caption font-medium',
                'bg-accent text-text-onAccent hover:bg-accent-hover transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
              )}
            >
              <ExternalLink size={15} aria-hidden />
              라이브 데모
            </a>
          )}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* 본문 */}
      <div className="mx-auto max-w-container px-4 py-12 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* 왼쪽: 상세 내용 */}
          <div className="flex flex-col gap-12">
            {/* 문제 상황 */}
            <section aria-labelledby="problem-heading">
              <h2 id="problem-heading" className={SECTION_HEADING}>
                문제 상황
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 해결 방법 */}
            <section aria-labelledby="solution-heading">
              <h2 id="solution-heading" className={SECTION_HEADING}>
                해결 방법
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* 트러블슈팅 */}
            {project.troubleshooting && project.troubleshooting.length > 0 && (
              <section aria-labelledby="troubleshooting-heading">
                <h2 id="troubleshooting-heading" className={SECTION_HEADING}>
                  트러블슈팅
                </h2>
                <div className="flex flex-col gap-6">
                  {project.troubleshooting.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-surface-card p-5"
                    >
                      <h3 className="text-body font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body text-text-secondary leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 회고 */}
            {project.retrospective && project.retrospective.length > 0 && (
              <section aria-labelledby="retrospective-heading">
                <h2 id="retrospective-heading" className={SECTION_HEADING}>
                  회고 / 배운 점
                </h2>
                <ul className="flex flex-col gap-3">
                  {project.retrospective.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-body text-text-secondary leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* 오른쪽: 사이드바 */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            {/* 성과 */}
            <section aria-labelledby="impact-heading">
              <h2 id="impact-heading" className="text-caption font-semibold text-text-muted uppercase tracking-wider mb-3">
                성과
              </h2>
              <ul className="flex flex-col gap-2">
                {project.impacts.map((impact) => (
                  <li
                    key={`${impact.metric}-${impact.value}`}
                    className="flex items-center justify-between rounded-md bg-bg-subtle px-3 py-2"
                  >
                    <span className="text-caption text-text-secondary">{impact.metric}</span>
                    <span className="text-caption font-semibold text-accent">{impact.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 기술 스택 */}
            <section aria-labelledby="stack-heading">
              <h2 id="stack-heading" className="text-caption font-semibold text-text-muted uppercase tracking-wider mb-3">
                기술 스택
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech.name}
                    className={cn(CHIP, 'bg-surface-card text-text-secondary border-border')}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
