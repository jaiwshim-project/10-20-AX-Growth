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

### 빠른 시작

#### 1. 프로젝트 설정
```bash
# 저장소 클론
git clone <repository-url>
cd ax-growth-navigator

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에서 API 키 등 설정
```

#### 2. 기본 사용
```bash
# 애플리케이션 시작
npm start

# 개발 모드 (Hot reload)
npm run dev

# 프로덕션 빌드
npm run build
```

#### 3. 웹 인터페이스 접속
```
http://localhost:3000
```

### 단계별 가이드

#### Step 1: 기업 정보 입력
1. 대시보드에서 "새 프로젝트 시작" 클릭
2. 기업 명, 산업, 매출규모, 직원수 입력
3. "다음" 클릭

#### Step 2: 진단 설문 완료
1. 6가지 카테고리별 설문 진행 (약 15분)
2. 각 질문에 5점 척도로 응답
3. 진단 분석 자동 생성 대기

#### Step 3: 진단 결과 검토
1. 전체 점수 및 등급 확인
2. 강점/약점 분석 검토
3. 우선순위 추천 항목 확인

#### Step 4: 우선순위 세팅
1. 자동 추천된 과제 검토
2. 필요시 추가 과제 입력
3. 우선순위 조정

#### Step 5: 시나리오 선택
1. 보수/성장/혁신 3가지 시나리오 비교
2. 각 시나리오별 KPI 예측 검토
3. 선호하는 시나리오 선택

#### Step 6: 실행 로드맵 확인
1. 분기별 마일스톤 확인
2. 각 항목별 담당자/예산 설정
3. 최종 리포트 생성

#### Step 7: 리포트 다운로드
1. HTML 리포트 다운로드 (인터랙티브)
2. PDF 버전 다운로드 (인쇄용)
3. 팀과 공유 및 실행 착수

---

## 디렉토리 구조

```
ax-growth-navigator/
├── README.md                    # 프로젝트 설명서 (본 파일)
├── CLAUDE.md                    # Claude 개발 환경 설정
├── .gitignore                   # Git 무시 파일 목록
├── package.json                 # Node.js 프로젝트 설정
├── package-lock.json            # 의존성 잠금 파일
│
├── src/                         # 소스 코드
│   ├── index.html              # 메인 HTML 파일
│   ├── styles/                 # 스타일시트
│   │   ├── main.css            # 메인 스타일
│   │   ├── theme.css           # 테마 설정
│   │   └── responsive.css      # 반응형 디자인
│   │
│   ├── js/                     # JavaScript 코드
│   │   ├── app.js              # 메인 애플리케이션 로직
│   │   ├── api.js              # API 통신 모듈
│   │   │
│   │   ├── engines/            # 4대 모듈
│   │   │   ├── diagnosis.js    # 진단 엔진
│   │   │   ├── priority.js     # 우선순위 엔진
│   │   │   ├── scenarios.js    # 시나리오 엔진
│   │   │   └── report.js       # 리포트 엔진
│   │   │
│   │   ├── components/         # UI 컴포넌트
│   │   │   ├── dashboard.js    # 대시보드
│   │   │   ├── survey.js       # 진단 설문
│   │   │   ├── results.js      # 결과 표시
│   │   │   ├── scenarios.js    # 시나리오 비교
│   │   │   └── roadmap.js      # 로드맵 표시
│   │   │
│   │   ├── utils/              # 유틸리티
│   │   │   ├── helpers.js      # 도우미 함수
│   │   │   ├── validators.js   # 입력 검증
│   │   │   └── formatters.js   # 데이터 포맷팅
│   │   │
│   │   └── config.js           # 설정 파일
│   │
│   └── data/                   # 데이터 파일
│       ├── surveys.json        # 설문 문항
│       ├── categories.json     # 분석 카테고리
│       ├── scenarios.json      # 시나리오 템플릿
│       └── templates.json      # 리포트 템플릿
│
├── public/                     # 정적 파일
│   ├── favicon.ico            # 파비콘
│   ├── images/                # 이미지 자산
│   │   ├── logo.svg           # 로고
│   │   ├── icons/             # 아이콘 세트
│   │   └── illustrations/     # 일러스트레이션
│   │
│   └── templates/             # HTML 템플릿
│       ├── report.html        # 리포트 템플릿
│       └── email.html         # 이메일 템플릿
│
├── tests/                     # 테스트 코드
│   ├── unit/                  # 단위 테스트
│   │   ├── diagnosis.test.js
│   │   ├── priority.test.js
│   │   ├── scenarios.test.js
│   │   └── report.test.js
│   │
│   ├── integration/           # 통합 테스트
│   │   └── workflow.test.js
│   │
│   └── e2e/                   # E2E 테스트
│       └── user-journey.test.js
│
├── docs/                      # 문서
│   ├── API.md                 # API 문서
│   ├── SETUP.md              # 설치 가이드
│   ├── DEPLOYMENT.md         # 배포 가이드
│   ├── ARCHITECTURE.md       # 아키텍처 문서
│   └── CONTRIBUTING.md       # 기여 가이드
│
├── .env.example              # 환경 변수 예시
├── .claude/                  # Claude 설정
│   └── settings.local.json   # 로컬 설정
│
├── architecture.svg          # 아키텍처 다이어그램
└── LICENSE                   # 라이선스 파일
```

### 주요 디렉토리 설명

| 디렉토리 | 설명 |
|----------|------|
| `src/` | 핵심 소스 코드 |
| `src/js/engines/` | 4대 모듈 구현 |
| `src/js/components/` | 웹 UI 컴포넌트 |
| `src/data/` | 설문, 시나리오 등 데이터 |
| `public/` | 정적 자산 (이미지, 템플릿) |
| `tests/` | 테스트 코드 |
| `docs/` | 기술 문서 |

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
