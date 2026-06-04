# Jiho Jung — Personal Portfolio

개인 포트폴리오 웹사이트. 레쥬메가 못 하는 일 — 어떻게 생각하고, 왜 그 선택을 했고, 무엇을 만들어왔는지를 보여주는 곳.

**대상:** 리크루터 · 강연 요청자 · 미래의 파트너 · 멘토링을 원하는 사람
**한 줄:** *Building 0-to-1 retail operations and scaling them across APAC.*

---

## 디자인 방향
흑백/모노톤, 산세리프(Hanken Grotesk), 비대칭 에디토리얼, 사진 중심. 포인트 컬러 테라코타(`--accent: #A8512E`) 한 점.

## 파일 구조
```
jiho-portfolio/
├── index.html              ← 콘텐츠 + 구조
├── css/style.css           ← 디자인 전부 (색·폰트·레이아웃·반응형)
├── js/main.js              ← 스크롤 등장 애니메이션
├── assets/
│   ├── portrait.jpg        ← hero 정면 사진
│   └── portrait-round.jpg  ← about 원형 (강연 컷)
└── README.md
```

## 실행
VS Code에서 폴더 열기 → **Live Server** 확장 → `index.html` 우클릭 → *Open with Live Server*.
모바일/데스크톱 둘 다 대응(반응형).

## 자주 건드릴 곳
| 바꿀 것 | 위치 |
|---|---|
| 헤드라인/태그라인 | `index.html` → `.hero-title`, `.hero-tag` |
| 통계 숫자 | `.statbar` |
| About 본문 | `#about .prose` |
| 키워드/facts/education | `.tags`, `.facts` |
| Work 케이스 | `#work` 안 `<article class="case">` |
| 문의 버튼 | `.inquiry` (mailto 링크) |
| 색/폰트/여백 | `css/style.css` 상단 `:root` |

## 사진 교체
`assets/`의 파일을 같은 이름으로 덮어쓰기. hero=세로, 원형=정사각형 권장.

## 문의 버튼 (Contact)
`.inquiry` 버튼은 제목이 채워진 메일을 여는 `mailto:` 링크(백엔드 불필요).
이름·메시지를 받는 진짜 폼이 필요하면 Formspree나 Netlify Forms를 붙이면 됨.

## 방문자 분석
`index.html` `<head>`에 **GA4** 스니펫이 주석으로 있음.
1. analytics.google.com에서 GA4 속성 생성 → Measurement ID(G-XXXXXXXXXX) 발급
2. `index.html`에서 ID 교체 후 `<!-- -->` 주석 제거 → 활성화
방문자 수·유입경로·체류시간·지역을 GA4에서 확인. (Vercel/Netlify 배포 시 각 플랫폼 Analytics를 토글로 켤 수도 있음.)

## 프레이밍 규칙 (유지)
- 10대 일탈: 추상적 대비로만
- 수산업: 위기·청산 디테일 생략, 결정·배움만
- ADO: "real MBA"로, 분쟁 생략
- 톤: 영웅화 금지, 여백 유지, 구두점(— : ;) 최소화

## 배포
GitHub Pages / Netlify / Vercel (커스텀 도메인 + Analytics 연결 가능)

---
*© 2026 Jiho Jung*
