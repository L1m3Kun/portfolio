import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  subtle?: boolean;
  children: ReactNode;
}

export function SectionWrapper({ id, className, subtle, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-16 py-20 md:py-28',
        subtle ? 'bg-bg-subtle' : 'bg-bg-base',
        className,
      )}
    >
      <div className="mx-auto max-w-container px-4 md:px-8">{children}</div>
    </section>
  );
}
