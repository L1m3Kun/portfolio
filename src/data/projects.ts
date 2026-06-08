import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'portfolio-web',
    title: '포트폴리오 페이지',
    description:
      'Claude Code의 하네스를 이용하여 포트폴리오를 바이브코딩으로 제작하였습니다.',
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
    troubleshooting: [
      {
        title: 'react-pdf 폰트 깨짐',
        content: 'PDF 생성 시 한글이 깨지는 문제가 발생했습니다. react-pdf는 기본적으로 영문 폰트만 번들하기 때문에 NanumGothic 폰트 파일을 직접 등록해 해결했습니다.',
      },
      {
        title: 'PDF 미리보기 레이아웃 불일치',
        content: 'HTML 폼과 PDF 출력 레이아웃이 달라 사용자 혼란이 발생했습니다. PDF 좌표계를 직접 계산하고 미리보기와 출력 결과를 1:1로 맞추는 작업을 진행했습니다.',
      },
    ],
    retrospective: [
      'MVC 패턴을 처음 적용해 상태·로직·뷰의 책임 분리가 유지보수에 얼마나 중요한지 체감했습니다.',
      '검증 로직을 제출 후가 아닌 입력 시점에 배치하는 것이 UX와 데이터 품질 모두에 영향을 준다는 점을 배웠습니다.',
    ],
    featured: true,
  },
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
    troubleshooting: [
      {
        title: 'react-pdf 폰트 깨짐',
        content: 'PDF 생성 시 한글이 깨지는 문제가 발생했습니다. react-pdf는 기본적으로 영문 폰트만 번들하기 때문에 NanumGothic 폰트 파일을 직접 등록해 해결했습니다.',
      },
      {
        title: 'PDF 미리보기 레이아웃 불일치',
        content: 'HTML 폼과 PDF 출력 레이아웃이 달라 사용자 혼란이 발생했습니다. PDF 좌표계를 직접 계산하고 미리보기와 출력 결과를 1:1로 맞추는 작업을 진행했습니다.',
      },
    ],
    retrospective: [
      'MVC 패턴을 처음 적용해 상태·로직·뷰의 책임 분리가 유지보수에 얼마나 중요한지 체감했습니다.',
      '검증 로직을 제출 후가 아닌 입력 시점에 배치하는 것이 UX와 데이터 품질 모두에 영향을 준다는 점을 배웠습니다.',
    ],
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
    troubleshooting: [
      {
        title: '반응형 전환 시 쿼리 키 충돌',
        content: '화면 크기 변경 시 쿼리 키가 동일해도 의존성이 다르게 인식되는 문제가 있었습니다. 쿼리 키를 컴포넌트 상태가 아닌 URL 파라미터 기반으로 설계해 일관성을 확보했습니다.',
      },
      {
        title: 'staleTime 설정 불일치',
        content: '팀원마다 staleTime을 다르게 설정해 같은 데이터가 어떤 컴포넌트에서는 즉시 갱신되고 어떤 컴포넌트에서는 캐시를 유지했습니다. 공통 queryConfig 파일로 분리해 일관성을 맞췄습니다.',
      },
    ],
    retrospective: [
      '6인 팀에서 API 상태 관리 계층을 공유할 때 쿼리 키 네이밍 규칙이 없으면 혼란이 생긴다는 것을 직접 겪었습니다.',
      'React Query 도입 전후 성능을 측정하고 근거 있는 개선 수치를 만들어낸 경험이 기술 도입 의사결정 방식을 바꿔줬습니다.',
    ],
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
    troubleshooting: [
      {
        title: 'Strict Mode와 실제 중복 호출 혼동',
        content: '개발 환경에서 API가 2회씩 호출되는 것을 버그로 인식했지만, 알고 보니 React Strict Mode의 의도된 동작이었습니다. 백엔드 로그와 Chrome DevTools Network 탭을 교차 비교해 실제 중복 호출과 Strict Mode 동작을 구분하는 기준을 세웠습니다.',
      },
      {
        title: 'FE-BE 환경 변수 불일치',
        content: '개발 서버와 운영 서버의 API 엔드포인트가 혼용되어 테스트 결과가 일관되지 않았습니다. .env.development / .env.production 파일을 분리하고 배포 파이프라인에서 환경 변수를 명시적으로 주입하는 구조로 정비했습니다.',
      },
    ],
    retrospective: [
      'FE와 BE가 같은 현상을 다른 레이어에서 보고 있을 때 서로의 로그를 공유하는 것만으로도 디버깅 속도가 크게 달라졌습니다.',
      'React 내부 동작(Strict Mode, useEffect 실행 순서)을 정확히 알고 있어야 불필요한 디버깅 시간을 줄일 수 있다는 것을 배웠습니다.',
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
