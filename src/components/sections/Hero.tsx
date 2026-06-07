'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

const FADE_DURATION = 0.6;
const STAGGER_DELAY = 0.1;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const createFade = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: FADE_DURATION, delay },
  });

  return (
    <section
      id="hero"
      className="scroll-mt-16 flex min-h-screen items-center bg-bg-base"
    >
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            {...createFade(0)}
            className="font-mono text-body text-accent"
          >
            <span className="text-text-muted">{'> '}</span>
            {profile.role}
          </motion.p>

          <motion.h1
            {...createFade(STAGGER_DELAY)}
            className="mt-4 font-sans text-display text-text-primary"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...createFade(STAGGER_DELAY * 2)}
            className="mt-2 font-mono text-h3 text-text-secondary"
          >
            {profile.nameEn}
          </motion.p>

          <motion.p
            {...createFade(STAGGER_DELAY * 3)}
            className="mt-6 max-w-2xl text-body-lg text-text-secondary"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...createFade(STAGGER_DELAY * 4)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className={cn(
                'inline-flex items-center justify-center rounded-md px-6 py-3',
                'text-body font-medium',
                'bg-accent text-text-onAccent shadow-card',
                'transition-colors hover:bg-accent-hover',
                'focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
              )}
            >
              프로젝트 보기
            </a>

            <a
              href="#contact"
              className={cn(
                'inline-flex items-center justify-center rounded-md px-6 py-3',
                'text-body font-medium',
                'border border-border-strong bg-transparent text-text-primary',
                'transition-colors hover:bg-bg-subtle',
                'focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
              )}
            >
              연락하기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
