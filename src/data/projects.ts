import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'portfolio-fe',
    title: '개발자 포트폴리오',
    description:
      'Claude Code 멀티 에이전트 하네스로 제작한 포트폴리오 사이트. CEO·PM·UX·Designer·FE·TechLead·QA·Tester 서브에이전트 팀이 실제 개발사처럼 협업하여 기획→설계→구현→리뷰→QA 전 과정을 자동화했습니다.',
    role: '기획 · 설계 · 품질 관리 (AI 에이전트 팀 오케스트레이션)',
    period: '2026.06 (약 1주)',
    teamSize: 'AI 에이전트 8인 팀',
    stack: [
      { name: 'Next.js 14', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Tailwind CSS', category: 'styling' },
      { name: 'Framer Motion', category: 'tooling' },
      { name: 'Claude Code', category: 'tooling' },
      { name: 'Vercel', category: 'deploy' },
    ],
    links: {
      live: 'https://l1m3kun.github.io/porfolio-fe',
      github: 'https://github.com/L1m3Kun/porfolio-fe',
    },
    impacts: [
      { metric: 'AI 에이전트 협업 팀', value: '8개 역할 분담' },
      { metric: '자동화된 PR', value: '13건 리뷰·머지' },
      { metric: '기획→배포 리드타임', value: '7일' },
    ],
    problem:
      '개인 포트폴리오를 직접 처음부터 구현하려니, 1인 개발자가 기획·UX·디자인·프론트엔드 구현·코드 리뷰·QA를 혼자 모두 떠안아야 했습니다. 역할을 번갈아 전환하다 보면 디자인 일관성과 코드 품질을 동시에 챙기기 어렵고, 스스로의 코드를 객관적으로 리뷰하기도 힘들어 결과물의 완성도가 들쑥날쑥해지는 구조적 한계가 있었습니다.',
    solution:
      'Claude Code의 멀티 에이전트 하네스를 활용해 CEO·PM·UX·Designer·FE·TechLead·QA·Tester 각 역할을 전담 서브에이전트에게 분배했습니다. CEO가 작업을 DAG로 분해해 할당하고, UX/Designer가 스펙 문서로 계약을 고정한 뒤 FE가 구현하면 TechLead가 SOLID·접근성 기준으로 리뷰하고 QA·Tester가 검증하는 흐름을 Phase 기반 체크포인트로 관리해, 1인 개발에서 빠지기 쉬운 품질 게이트를 구조적으로 강제했습니다.',
    troubleshooting: [
      {
        title: 'next-themes 버전 미존재로 설치 실패',
        content:
          'package.json에 next-themes를 ^0.3.3으로 지정했으나 레지스트리에 존재하지 않는 버전이라 의존성 설치 단계에서 실패했습니다. npm에 실제 배포된 버전을 확인해 ^0.4.6으로 정정하고 lockfile을 재생성해, 테마 전환 의존성이 정상적으로 설치되도록 해결했습니다. AI가 생성한 버전 명세도 실제 레지스트리와 대조 검증이 필요하다는 점을 확인한 사례였습니다.',
      },
      {
        title: 'ThemeToggle가 system 테마를 감지하지 못함',
        content:
          'ThemeToggle에서 현재 테마를 theme === "dark"로 판별했더니, 사용자가 테마를 "system"으로 둔 경우 OS가 다크 모드여도 toggle 상태가 라이트로 표시되는 버그가 있었습니다. next-themes의 theme는 사용자가 선택한 설정값(light/dark/system)일 뿐 실제 적용된 테마가 아니므로, 시스템 설정까지 반영된 resolvedTheme를 기준으로 판별하도록 수정해 OS 다크 모드가 정확히 감지되도록 고쳤습니다.',
      },
    ],
    retrospective: [
      'AI 에이전트에게 역할과 입출력 계약(스펙 문서)을 명확히 줄수록 결과물 품질이 일관되게 높아졌습니다. 모호한 지시는 곧 모호한 산출물로 이어져, 프롬프트 자체가 설계의 일부라는 점을 체감했습니다.',
      'TechLead 리뷰가 자동화되어도 사람이 최종적으로 확인하는 구조가 중요했습니다. next-themes 버전 오류처럼 AI가 자신 있게 만들어낸 결과에도 실제 환경 검증이 필요한 빈틈이 존재했습니다.',
      'Phase 기반 체크포인트로 작업을 분할하니 한 단계의 실수가 다음 단계로 번지기 전에 끊을 수 있었고, 1인 개발에서 놓치기 쉬운 품질 게이트를 협업 구조로 강제할 수 있다는 가능성을 확인했습니다.',
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
        title: 'PDF 한글 폰트 깨짐',
        content:
          'react-pdf의 기본 폰트는 한글 글리프를 포함하지 않아 신청서에 입력한 한글이 모두 빈 사각형(□)으로 출력됐습니다. 외부 한글 웹폰트(.ttf)를 Font.register로 등록하고 fontFamily를 명시적으로 지정해, 미리보기와 다운로드 결과가 동일한 한글 글꼴로 렌더링되도록 해결했습니다.',
      },
      {
        title: '미리보기와 다운로드 레이아웃 불일치',
        content:
          '브라우저 미리보기는 정상인데 다운로드한 PDF는 텍스트 위치와 줄바꿈이 어긋났습니다. CSS 기반 레이아웃과 PDF 좌표 기반 렌더링의 단위 차이가 원인이었습니다. 신청서 양식을 PDF의 절대 좌표(pt) 기준으로 재계산하고 폰트 크기·여백을 고정값 상수로 분리해, 화면 미리보기와 실제 출력물의 레이아웃을 일치시켰습니다.',
      },
    ],
    retrospective: [
      'MVC로 책임을 분리하니 검증 로직과 PDF 생성 로직이 화면과 결합되지 않아, 양식이 바뀔 때 Controller만 수정하면 되는 구조의 이점을 체감했습니다.',
      '상태를 Context 단일 소스로 둔 결정이 입력·검증·미리보기 간 데이터 동기화 버그를 원천적으로 줄여줬습니다.',
      'PDF처럼 좌표 기반으로 렌더링되는 출력물은 화면 레이아웃과 단위 체계가 다르므로, 처음부터 출력 매체 기준으로 설계해야 재작업이 적다는 점을 배웠습니다.',
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
        title: '쿼리 키 설계 미흡으로 캐시가 공유되지 않음',
        content:
          '초기에는 같은 데이터를 다루는 화면들이 서로 다른 쿼리 키를 사용해, 반응형 전환 시 캐시 히트가 일어나지 않고 동일 요청이 반복됐습니다. 쿼리 키를 [도메인, 파라미터] 형태의 배열로 표준화하고 키 생성 규칙을 팀 내에서 합의·문서화해, 같은 리소스는 항상 동일 키로 묶이도록 정리했습니다.',
      },
      {
        title: 'staleTime 미설정으로 과도한 refetch 발생',
        content:
          'staleTime 기본값(0)으로 인해 포커스 전환·리마운트마다 데이터가 즉시 stale로 간주되어 불필요한 refetch가 잦았습니다. 데이터 갱신 주기에 맞춰 staleTime을 조정하고 자주 바뀌지 않는 목록에는 긴 staleTime을, 실시간성이 필요한 데이터에는 짧은 값을 적용해 요청 빈도를 5초당 1회 수준으로 낮췄습니다.',
      },
    ],
    retrospective: [
      'FE 6인 협업에서 쿼리 키 규칙처럼 공유 자원의 컨벤션을 먼저 합의하지 않으면, 각자 다른 키를 만들어 캐시 전략 자체가 무력화된다는 것을 배웠습니다.',
      '서버 상태와 클라이언트 상태를 분리하니 컴포넌트가 데이터 패칭 로직에서 자유로워져, 공용 컴포넌트 재사용성이 크게 올라갔습니다.',
      'staleTime·gcTime 같은 캐시 파라미터는 데이터의 성격(갱신 주기)에 따라 명시적으로 정해야 하며, 기본값에 의존하면 성능 문제가 숨는다는 점을 체감했습니다.',
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
        title: 'React Strict Mode 이중 실행으로 인한 중복 호출 혼동',
        content:
          '개발 환경에서 useEffect가 두 번 실행되어 API가 2회 호출되는 것처럼 보였지만, 이는 Strict Mode가 부수 효과를 의도적으로 두 번 호출해 정리(cleanup) 누락을 검출하는 동작이었습니다. 운영 빌드에서는 1회만 실행됨을 확인해 "개발 환경 한정 동작"과 "실제 버그"를 분리했고, 진짜 중복 호출은 BE 로그를 기준으로 별도 추적했습니다.',
      },
      {
        title: 'FE·BE 환경 변수 불일치로 잘못된 엔드포인트 호출',
        content:
          'FE가 바라보는 API 베이스 URL과 BE가 기동된 서버 환경이 어긋나, 개발 중인 변경이 반영되지 않거나 운영 데이터에 요청이 가는 혼선이 있었습니다. 개발/운영 환경 변수를 명시적으로 분리하고 .env 기준 값을 FE·BE가 함께 합의해, 환경별로 정확한 엔드포인트를 바라보도록 기준을 수립했습니다.',
      },
    ],
    retrospective: [
      'FE 2인 + BE 4인 크로스팀 환경에서, 증상만 보고 원인을 단정하지 않고 양쪽 로그를 함께 대조하는 디버깅 프로세스의 중요성을 배웠습니다.',
      'Strict Mode처럼 프레임워크가 개발 단계에서만 보이는 동작을 정확히 이해해야, 존재하지 않는 버그를 쫓는 시간을 줄일 수 있다는 점을 체감했습니다.',
      '환경 변수와 엔드포인트 기준은 FE·BE가 같은 문서를 보고 합의해야 하며, 환경 분리 기준이 없으면 협업 비용이 급격히 커진다는 것을 배웠습니다.',
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
