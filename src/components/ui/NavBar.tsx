'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

const SCROLL_THRESHOLD = 16;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-text-onAccent focus:no-underline"
      >
        본문으로 건너뛰기
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface-nav/90 backdrop-blur-md border-b border-border shadow-nav'
            : 'bg-transparent',
        )}
      >
        <nav
          className="mx-auto flex max-w-container items-center justify-between px-4 py-3 md:px-8"
          aria-label="주요 내비게이션"
        >
          <Link
            href="/"
            className="font-mono text-caption font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm"
          >
            강성구
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-caption text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className={cn(
                'md:hidden flex h-9 w-9 items-center justify-center rounded-md',
                'text-text-secondary hover:text-text-primary hover:bg-surface-card transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
              )}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 내비게이션"
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          menuOpen ? 'visible' : 'invisible',
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-bg-base/80 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
        <nav
          className={cn(
            'absolute right-0 top-0 h-full w-64 bg-surface-nav border-l border-border p-6 pt-20',
            'transition-transform duration-300',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <ul className="flex flex-col gap-4" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-h3 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
