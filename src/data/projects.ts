import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'vacation-form',
    title: '휴가 신청서',
    description:
      '수강생 휴가 신청서를 디지털화하여 입력 오류율을 80% 이상 개선한 웹 애플리케이션. MVC 패턴으로 책임을 분리하고 PDF 미리보기 기능을 추가했습니다.',
    role: '단독 개발 (Full-Stack FE)',
    period: '2024.11.29 – 2024.12.20 (약 1개월)',
    teamSize: '1인 (Solo)',
    stack: [
      { name: 'React', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Tailwind CSS', category: 'styling' },
      { name: 'react-pdf', category: 'tooling' },
      { name: 'Vercel', category: 'deploy' },
    ],
    links: {
      live: 'https://oz-vacation-form.vercel.app',
      github: 'https://github.com/L1m3Kun/oz_vacation_for',
    },
    impacts: [
      { metric: '오작성률 개선', value: '80%↓' },
      { metric: '운영 안내 리소스', value: '주 3시간 절감' },
      { metric: 'PDF 매핑 오류', value: '50%↓ 감소' },
    ],
    problem:
      '수강생이 휴가 신청서를 수기로 작성하면서 서명·날짜 오류 등 입력 실수가 빈번했고, 운영진이 매주 3시간 이상을 오탈자 안내에 소비했습니다. 검증이 제출 이후에만 이루어지는 구조적 문제가 오작성률을 높였습니다.',
    solution:
      '입력·검증·결과 확인을 하나의 흐름으로 재설계하고, MVC 패턴을 적용해 Model(Context)에 상태를 단일 소스로 두고 Controller에서 검증과 PDF 생성을 통제했습니다. PDF 미리보기로 사용자가 제출 전 최종 확인할 수 있게 했습니다.',
    featured: true,
  },
  {
    slug: 'openmind-knock',
    title: 'OpenMind (Knock)',
    description:
      'TanStack React Query를 도입해 반응형 전환 시 API 중복 호출 문제를 해결한 SNS 플랫폼. 3G 환경 렌더링 지연을 2초에서 100ms로 개선했습니다.',
    role: '레이아웃 설계, 공용 컴포넌트 개발, API 상태 관리',
    period: '2024.07.08 – 2024.07.24 (2주)',
    teamSize: 'FE 6인',
    stack: [
      { name: 'React', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'SASS/SCSS', category: 'styling' },
      { name: 'TanStack Query', category: 'tooling' },
      { name: 'Netlify', category: 'deploy' },
    ],
    links: {
      live: 'https://codeit-knock.netlify.app',
      github: 'https://github.com/Sprint-8-2/KNOC',
    },
    impacts: [
      { metric: '렌더링 지연 (3G)', value: '2초 → 100ms' },
      { metric: '렌더링 지연 (4G)', value: '300ms → 100ms' },
      { metric: 'API 호출 빈도', value: '5초당 1회로 감소' },
    ],
    problem:
      '반응형 전환 시 리스트 조건이 변경되면서 동일 데이터 요청이 반복 실행됐습니다. API 응답을 컴포넌트 상태로 직접 관리하는 구조라 캐싱이 없어 네트워크 지연이 그대로 렌더링 지연으로 이어졌습니다.',
    solution:
      'TanStack React Query를 도입해 서버 상태 관리를 전담하는 계층을 분리했습니다. 쿼리 키 기반으로 요청을 제어해 반응형 전환 시 불필요한 재요청을 구조적으로 줄이고, 캐싱 전략으로 네트워크 지연의 클라이언트 영향을 최소화했습니다.',
    featured: true,
  },
  {
    slug: 'checkchaek',
    title: 'CheckChaek (체크채크)',
    description:
      'AI 예측(RES-NET) 결과를 Chart.js로 시각화하는 학습 플랫폼. 중복 API 호출 문제를 백엔드와 협업하여 디버깅하고 개발/운영 환경 분리 기준을 수립했습니다.',
    role: 'FE 개발 — AI 예측 연동, Chart 데이터 시각화, 공통 컴포넌트',
    period: '2023.08.23 – 2023.10.06 (6주)',
    teamSize: 'FE 2인 + BE 4인',
    stack: [
      { name: 'React', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Tailwind CSS', category: 'styling' },
      { name: 'Redux', category: 'tooling' },
      { name: 'Chart.js', category: 'tooling' },
      { name: 'AWS', category: 'deploy' },
    ],
    links: {
      github: 'https://github.com/CheckChaek/CheckChae',
    },
    impacts: [
      { metric: 'API 중복 호출', value: '원인 명확화 및 제거' },
      { metric: '환경 분리', value: '개발/운영 기준 수립' },
      { metric: '협업', value: 'BE와 e2e 테스트 프로세스 정비' },
    ],
    problem:
      'React Strict Mode 환경에서 useEffect가 2번 실행되는 특성을 인지하지 못해 API 요청이 2회씩 실행되는 현상이 발생했고, 백엔드 로그에서 중복 호출이 확인됐습니다.',
    solution:
      'e2e 테스트 및 백엔드 로그 기반으로 문제를 추적하고, Strict Mode 이중 실행과 실제 중복 호출을 구분했습니다. 개발/운영 서버를 분리 운영하고 BE와 협업 기반 디버깅 프로세스를 정비했습니다.',
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
