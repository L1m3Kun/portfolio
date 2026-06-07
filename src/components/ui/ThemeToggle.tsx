'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn('h-9 w-9 rounded-md', className)} aria-hidden />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-md',
        'text-text-secondary hover:text-text-primary hover:bg-surface-card',
        'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
        className,
      )}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-pressed={isDark}
    >
      {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
