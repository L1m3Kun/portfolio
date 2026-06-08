// Portfolio configuration — edit this file to customize your portfolio
const portfolioConfig = {
  owner: {
    name: '강성구',
    nameEn: 'Kang Sung-Gu',
    role: 'Frontend Developer',
    tagline: '사용자 경험을 설계하는 프론트엔드 개발자',
    email: 'sungku2757@gmail.com',
    github: 'https://github.com/L1m3Kun',
    linkedin: undefined as string | undefined,
    resumeUrl: undefined as string | undefined,
    bio: [
      '문제의 구조를 파악하고 해결 방향을 설계하는 것을 좋아합니다.',
      'React와 TypeScript를 주력으로 사용하며, 사용자 중심의 인터페이스를 구축합니다.',
      '팀과의 협업을 통해 더 나은 결과를 만들어가는 과정을 중요하게 생각합니다.',
    ],
  },
  site: {
    title: '강성구 | Frontend Developer',
    description: 'React/Next.js 기반 프론트엔드 개발자 강성구의 포트폴리오',
    url: 'https://porfolio-fe.vercel.app',
    ogImage: '/og-image.png',
    locale: 'ko',
  },
  theme: {
    default: 'system' as 'light' | 'dark' | 'system',
    accentColor: '#0891B2',
  },
  projects: [
    {
      slug: 'vacation-form',
      featured: true,
      order: 1,
    },
    {
      slug: 'openmind-knock',
      featured: true,
      order: 2,
    },
    {
      slug: 'checkchaek',
      featured: true,
      order: 3,
    },
  ],
} as const;

export default portfolioConfig;
export type PortfolioConfig = typeof portfolioConfig;
