import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', "'Courier New'", 'monospace'],
      },
      colors: {
        bg: {
          base: 'hsl(var(--bg-base) / <alpha-value>)',
          subtle: 'hsl(var(--bg-subtle) / <alpha-value>)',
        },
        surface: {
          card: 'hsl(var(--surface-card) / <alpha-value>)',
          nav: 'hsl(var(--surface-nav) / <alpha-value>)',
          overlay: 'hsl(var(--surface-overlay) / <alpha-value>)',
        },
        text: {
          primary: 'hsl(var(--text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
          muted: 'hsl(var(--text-muted) / <alpha-value>)',
          onAccent: 'hsl(var(--text-on-accent) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          hover: 'hsl(var(--accent-hover) / <alpha-value>)',
          active: 'hsl(var(--accent-active) / <alpha-value>)',
          subtle: 'hsl(var(--accent-subtle) / <alpha-value>)',
          fg: 'hsl(var(--accent-fg) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--border) / <alpha-value>)',
          strong: 'hsl(var(--border-strong) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'hsl(var(--success) / <alpha-value>)',
          subtle: 'hsl(var(--success-subtle) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'hsl(var(--error) / <alpha-value>)',
          subtle: 'hsl(var(--error-subtle) / <alpha-value>)',
        },
      },
      ringColor: {
        focus: 'hsl(var(--focus) / <alpha-value>)',
      },
      ringOffsetColor: {
        'bg-base': 'hsl(var(--bg-base) / <alpha-value>)',
      },
      fontSize: {
        display: ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['2rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['1.625rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        caption: ['0.8125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'mono-sm': ['0.75rem', { lineHeight: '1.3', fontWeight: '500' }],
        'mono-xs': ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.04em', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgb(15 23 42 / 0.08), 0 1px 2px rgb(15 23 42 / 0.04)',
        'card-hover': '0 12px 24px -8px rgb(15 23 42 / 0.18)',
        nav: '0 1px 0 rgb(15 23 42 / 0.06), 0 4px 16px rgb(15 23 42 / 0.06)',
        focus: '0 0 0 3px hsl(var(--focus) / 0.45)',
        'card-dark': '0 1px 3px rgb(0 0 0 / 0.4)',
        'card-hover-dark': '0 12px 28px -8px rgb(0 0 0 / 0.6)',
        'nav-dark': '0 1px 0 rgb(255 255 255 / 0.04), 0 4px 16px rgb(0 0 0 / 0.4)',
      },
      maxWidth: {
        container: '1200px',
      },
      screens: {
        md: '768px',
        lg: '1024px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
