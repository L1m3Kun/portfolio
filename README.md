# Portfolio FE

프론트엔드 개발자 포트폴리오 웹사이트. Next.js 14 App Router 기반 정적 사이트(SSG).

## 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 App Router (`output: 'export'`) |
| 언어 | TypeScript strict mode |
| 스타일링 | Tailwind CSS + CSS Variables (semantic 토큰) |
| 다크모드 | next-themes (class 전략) |
| 애니메이션 | Framer Motion |
| 아이콘 | lucide-react |
| 폰트 | next/font — Inter + JetBrains Mono |
| 배포 | Vercel / GitHub Pages |

## 페이지 구조

```
/                    메인 (Hero → About → Skills → Projects → Contact)
/projects/[slug]     프로젝트 상세 (문제→해결→트러블슈팅→회고)
```

## 로컬 개발

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 정적 빌드 → out/
pnpm type-check # tsc --noEmit
pnpm lint       # ESLint
```

## 콘텐츠 수정

| 파일 | 내용 |
|------|------|
| `src/data/profile.ts` | 이름, 직무, 소개, 연락처 |
| `src/data/projects.ts` | 프로젝트 목록, 트러블슈팅, 회고 |
| `src/data/skills.ts` | 기술 스택 목록 |
| `portfolio.config.ts` | 사이트 전역 설정 |

## 디자인 토큰

`src/app/globals.css`에 CSS 변수로 정의. `tailwind.config.ts`에서 semantic 클래스로 매핑.

```
bg-bg-base / bg-bg-subtle              배경
bg-surface-card / bg-surface-nav       카드 / 네비게이션 표면
text-text-primary / secondary / muted  텍스트 계층
text-accent / bg-accent                강조색 (청록)
border-border / border-border-strong   테두리
```

라이트/다크 모드 모두 동일한 클래스명 사용 — CSS 변수만 교체됨.

## 접근성

- WCAG 2.1 AA 준수
- 단일 `<h1>` (Hero), 섹션별 `<h2>`, 카드별 `<h3>`
- 모바일 드로어 focus trap (`role="dialog" aria-modal`)
- 키보드 탐색 + skip-nav ("본문으로 건너뛰기")
- `prefers-reduced-motion` 대응 (Framer Motion `useReducedMotion`)
- 외부 링크 전부 `rel="noopener noreferrer"`

## 프로젝트 추가

`src/data/projects.ts`에 항목 추가:

```typescript
{
  slug: 'my-project',
  title: '프로젝트명',
  description: '한 줄 설명',
  role: '역할',
  period: '기간',
  stack: [{ name: 'React', category: 'framework' }],
  links: { github: 'https://...', live: 'https://...' }, // live 없으면 생략
  impacts: [{ metric: '지표', value: '수치' }],
  problem: '문제 상황',
  solution: '해결 방법',
  troubleshooting: [{ title: '이슈 제목', content: '내용' }],
  retrospective: ['배운 점 1', '배운 점 2'],
  featured: true,
}
```

`ProjectSlug` 타입(`src/types/index.ts`)에도 slug를 추가해야 합니다.

## 브랜치 전략

```
main      배포 기준선 (PR 필수)
develop   통합 브랜치 (PR 필수)
feature/* 기능 브랜치 (머지 후 삭제)
```
