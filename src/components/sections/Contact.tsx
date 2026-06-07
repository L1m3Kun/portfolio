import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { profile } from '@/data/profile';

const LINK_BASE =
  'inline-flex items-center gap-2 text-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base';

const PRIMARY_BUTTON =
  'bg-accent text-text-onAccent hover:bg-accent-hover rounded-md px-6 py-3';

const OUTLINE_BUTTON =
  'border border-border-strong text-text-secondary hover:text-accent hover:border-accent rounded-md px-6 py-3';

export function Contact() {
  return (
    <SectionWrapper id="contact" subtle>
      <div className="flex flex-col items-center text-center">
        <p className="font-mono text-caption text-accent">// CONTACT</p>
        <h2 className="mt-4 text-h1 text-text-primary">연락하기</h2>
        <p className="mt-4 text-body-lg text-text-secondary">
          함께 일할 기회를 기다립니다.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <a
            href={`mailto:${profile.email}`}
            aria-label="이메일로 연락하기"
            className={`${LINK_BASE} ${PRIMARY_BUTTON}`}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono">{profile.email}</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 프로필 방문 (새 탭)"
            className={`${LINK_BASE} ${OUTLINE_BUTTON}`}
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn 프로필 방문 (새 탭)"
              className={`${LINK_BASE} ${OUTLINE_BUTTON}`}
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
}
