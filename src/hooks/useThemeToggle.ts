'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    isDark: resolvedTheme === 'dark',
    toggle: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    theme,
    setTheme,
  };
}
