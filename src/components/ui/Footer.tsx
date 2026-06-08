import { Github } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-subtle py-8" role="contentinfo">
      <div className="mx-auto flex max-w-container flex-col items-center gap-3 px-4 md:flex-row md:justify-between md:px-8">
        <p className="text-caption text-text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-caption text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm"
          aria-label="GitHub 프로필 방문 (새 탭)"
        >
          <Github size={14} aria-hidden />
          GitHub
        </a>
      </div>
    </footer>
  );
}
