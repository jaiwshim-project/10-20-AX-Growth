# AX Growth Navigator

## 프로젝트 개요

**AX Growth Navigator**는 AI 기반 경영 성장 전략 수립 및 실행 지원 플랫폼입니다. 이 도구는 기업의 경영진과 전략팀이 **현재 상황을 진단**하고, **성장 전략을 우선순위화**하며, **시나리오 기반 의사결정**을 내릴 수 있도록 지원합니다.

### 핵심 가치

- **AI 기반 의사결정**: 대규모 언어모델(LLM)을 활용한 지능형 분석
- **즉시 실행 가능**: 단계별 액션 플랜과 우선순위 기반 로드맵
- **다양한 시나리오**: 보수적/적극적/혁신적 전략 시뮬레이션
- **프리미엄 리포트**: HTML 기반 시각적 대시보드 및 상세 분석

---

## 핵심 기능 (4대 모듈)

### 1. 진단 모듈 (Diagnosis Engine)
**목적**: 기업의 현재 경영 상태를 다차원적으로 분석

**분석 항목**:
- 시장 지위 및 경쟁력 평가
- 조직 역량 및 리더십 분석
- 재무 건강도 및 자본 효율성
- 고객 만족도 및 브랜드 인식
- 기술 역량 및 디지털 성숙도
- 운영 효율성 및 프로세스 최적화

**출력**: 진단 리포트 (점수, 등급, 강점/약점 분석)

### 2. 우선순위 모듈 (Priority Engine)
**목적**: 도출된 성장 과제의 중요도/긴급도 평가

**평가 기준**:
- 비즈니스 임팩트 (영향도)
- 구현 난이도 (리소스 필요도)
- 기간 (단기/중기/장기)
- 리스크 수준
- 전략적 정렬도

**출력**: 우선순위 매트릭스, 로드맵

### 3. 시나리오 모듈 (Scenario Engine)
**목적**: 다양한 전략 조합에 따른 성장 경로 시뮬레이션

**시나리오 유형**:
- **보수전략**: 현재 강점 강화, 리스크 최소화
- **성장전략**: 새로운 시장/제품 진출, 중간 수준 리스크
- **혁신전략**: 기술/비즈니스모델 혁신, 높은 리스크/기대수익

**출력**: 시나리오별 KPI 예측, 비교 분석

### 4. 리포트 모듈 (Report Engine)
**목적**: 최종 의사결정 자료 생성

**리포트 구성**:
- Executive Summary (경영진 요약)
- 현황 분석 (진단 결과)
- 우선순위 과제 (액션 아이템)
- 성장 시나리오 (3가지 시나리오)
- 실행 로드맵 (분기별 마일스톤)
- 투자 및 ROI 추정

**출력**: HTML/PDF 리포트, 대시보드

---

## 사용 방법

### 빠른 시작 (로컬에서 실행)

#### 1. 프로젝트 설정
```bash
# 저장소 클론 (또는 다운로드)
git clone <repository-url>
cd ax-growth-navigator

# 또는 Python 내장 웹 서버 사용
python -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server
```

#### 2. 웹 브라우저에서 접속
```
http://localhost:8000
```

#### 3. Vercel에 배포 (선택사항)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 또는 GitHub에서 자동 배포
# GitHub Repo → Vercel 연결 → 자동 배포
```

### 단계별 가이드

#### Step 1: 홈 페이지 접속
1. 브라우저에서 `http://localhost:8000` 접속
2. 홈 페이지에서 "지금 진단 시작" 버튼 클릭
3. **사용 매뉴얼**: 우측 상단 "📖 매뉴얼" 링크로 상세 가이드 확인 가능

#### Step 2: AI 검색 진단 수행
1. **진단 페이지** (`diagnosis.html`)로 이동
2. 8개 핵심 항목별로 5점 척도 평가 (약 10분)
3. 실시간 점수 계산 및 5단계 성숙도 등급 확인

#### Step 3: 진단 결과 분석
1. 종합 점수 및 강점/약점 분석 검토
2. 우선순위 추천 항목 확인
3. 데이터는 자동 저장됨 (로컬 스토리지)

#### Step 4: AI 활용 우선순위 설정
1. **우선순위 페이지** (`priority.html`)로 이동
2. 진단 결과 기반 상위 10개 과제 자동 추출
3. TOP 10 우선순위 목록 및 ROI 점수 검토

#### Step 5: 부서별 시나리오 검토
1. **시나리오 페이지** (`scenarios.html`)로 이동
2. 6개 부서별 AI 활용 시나리오 비교 (경영진, 마케팅, 영업, R&D, 재무, 인사)
3. 각 시나리오별 주간 절감 시간 및 기대 효과 확인

#### Step 6: ROI 리포트 생성 및 분석
1. **리포트 페이지** (`report.html`)로 이동
2. 월별 KPI 대시보드 확인 (6개 주요 지표)
3. 부서별 성과 비교 및 전월 대비 추이 분석

#### Step 7: 리포트 다운로드 및 공유
1. 리포트 페이지에서 **"PDF 다운로드"** 버튼 클릭
2. 생성된 PDF를 팀과 공유
3. 실행 계획 수립 및 착수

---

## 디렉토리 구조

```
ax-growth-navigator/
├── README.md                    # 프로젝트 설명서 (본 파일)
├── CLAUDE.md                    # Claude 개발 환경 설정
├── .gitignore                   # Git 무시 파일 목록
├── LICENSE                      # MIT 라이선스
│
├── 📄 HTML 페이지 (루트)
│   ├── index.html              # 홈 페이지 (랜딩 페이지)
│   ├── diagnosis.html          # AX 진단 페이지
│   ├── priority.html           # 우선순위 분석 페이지
│   ├── scenarios.html          # 부서별 시나리오 페이지
│   ├── report.html             # ROI 리포트 페이지
│   └── manual.html             # 사용자 매뉴얼
│
├── css/                        # 스타일시트
│   └── style.css              # 통합 스타일 (반응형 + 프리미엄 테마)
│
├── js/                        # JavaScript 로직
│   └── app.js                 # 전역 상태 관리 (AppState + localStorage)
│
├── data/                      # 데이터 파일
│   ├── scenarios.json         # 6개 부서별 AI 활용 시나리오 데이터
│   ├── kpi-metrics.json       # ROI 리포트 KPI 정의 및 샘플 데이터
│   └── ax-scores.json         # 진단 점수 스키마
│
└── architecture.svg           # 시스템 아키텍처 다이어그램

```

### 주요 파일 설명

| 파일 | 설명 | 라인 수 |
|------|------|--------|
| `index.html` | 랜딩 페이지 + 플로우 가이드 | ~400 |
| `diagnosis.html` | 8개 항목 × 5점 척도 설문 + 실시간 점수 | ~580 |
| `priority.html` | 진단 결과 기반 TOP 10 우선순위 자동 추출 | ~450 |
| `scenarios.html` | 6개 부서별 4가지 AI 활용 시나리오 비교 | ~600 |
| `report.html` | 월별 KPI 대시보드 + 차트 + PDF 다운로드 | ~550 |
| `manual.html` | 상세 사용 가이드 | ~400 |
| `css/style.css` | 반응형 그리드 + 프리미엄 화이트 테마 | ~600 |
| `js/app.js` | AppState (localStorage 기반 상태 관리) | ~90 |

---

## 기술 스택

### 프런트엔드
- **언어**: JavaScript (ES6+)
- **런타임**: Node.js 16+
- **빌드**: Webpack 5
- **UI**: Vanilla JavaScript (프레임워크 비의존)
- **스타일**: CSS3 (SCSS 미지원, 순수 CSS)
- **번들러**: Webpack

### 백엔드 (선택사항)
- **런타임**: Node.js
- **프레임워크**: Express.js 4+
- **데이터베이스**: 
  - 개발: SQLite
  - 프로덕션: PostgreSQL
- **캐싱**: Redis (선택사항)

### AI/ML
- **LLM API**: 
  - OpenAI GPT-4
  - Anthropic Claude 3 (Sonnet/Haiku)
  - 또는 로컬 모델 (Ollama)
- **라이브러리**: 
  - `anthropic` SDK (Claude)
  - `openai` SDK (GPT)

### 개발 도구
- **버전 관리**: Git
- **패키지 관리**: npm
- **테스트**: Jest
- **린팅**: ESLint
- **포매팅**: Prettier
- **문서화**: JSDoc, Markdown

### 배포
- **호스팅**: Vercel / AWS EC2 / Docker
- **CI/CD**: GitHub Actions
- **모니터링**: Sentry (에러 추적)

---

## 브라우저 호환성

| 브라우저 | 지원 버전 | 상태 |
|---------|---------|------|
| Chrome | 90+ | ✅ 완벽 지원 |
| Firefox | 88+ | ✅ 완벽 지원 |
| Safari | 14+ | ✅ 완벽 지원 |
| Edge | 90+ | ✅ 완벽 지원 |
| Internet Explorer | 모든 버전 | ❌ 미지원 |

**필요 기능:**
- HTML5 + CSS3 (Grid, Flexbox, Gradient)
- JavaScript ES6+
- localStorage (데이터 저장용)
- Chart.js (KPI 대시보드용)

---

## 라이선스

이 프로젝트는 **MIT License** 하에 배포됩니다.

```
MIT License

Copyright (c) 2025 AX Growth Navigator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING FROM, OUT OF OR IN CONNECTION WITH
THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

---

## 지원 및 피드백

### 문제 보고 (Issues)
버그 발견 시 [GitHub Issues](https://github.com/yourrepo/issues)에서 보고해주세요.

### 기능 요청 (Feature Requests)
새로운 기능 아이디어는 [GitHub Discussions](https://github.com/yourrepo/discussions)에서 제안해주세요.

### 이메일 지원
- 기술 지원: support@ax-navigator.com
- 비즈니스 문의: info@ax-navigator.com

---

## 주요 업데이트 이력

### v1.0.0 (2025-05)
- 4대 모듈 기초 구현
- 웹 인터페이스 완성
- HTML 리포트 기능 추가

### v0.9.0 (2025-04)
- 프로젝트 초기화
- 아키텍처 설계
- API 설계서 작성

---

## 기여 가이드

이 프로젝트에 기여하고 싶다면:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

자세한 내용은 [CONTRIBUTING.md](./docs/CONTRIBUTING.md)를 참조하세요.

---

**AX Growth Navigator와 함께 성공적인 경영 성장을 기원합니다!**
