import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <header className="flex flex-col gap-3">
        <span className="font-mono text-caption text-accent">{'// PROJECTS'}</span>
        <h2 className="text-h1 text-text-primary">프로젝트</h2>
        <p className="text-body-lg text-text-secondary">
          직접 만든 것들을 소개합니다.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </SectionWrapper>
  );
}
