import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { NavBar } from '@/components/ui/NavBar';
import { Footer } from '@/components/ui/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: '강성구 | Frontend Developer',
  description: 'React/Next.js 기반 프론트엔드 개발자 강성구의 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-bg-base text-text-primary`}
      >
        <ThemeProvider>
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
