# CLAUDE.md - AX Growth Navigator Development Guide

## 프로젝트 개요

**AX Growth Navigator**는 AI 기반 경영 성장 전략 수립 및 실행 지원 플랫폼입니다. 

- **목표**: 기업의 경영진이 현재 상황을 진단하고, 성장 전략을 우선순위화하며, 데이터 기반 의사결정을 내릴 수 있도록 지원
- **유형**: 풀스택 웹 애플리케이션 (프런트엔드 + 선택적 백엔드)
- **핵심 기술**: JavaScript, LLM API (Claude/GPT), 데이터 분석
- **개발 언어**: 한글 명령어 및 코멘트 지원

---

## 개발 환경 설정

### 1. 필수 요구사항

```bash
# Node.js 버전 확인
node --version  # v16.0.0 이상 필요

# npm 버전 확인
npm --version   # v7.0.0 이상 필요
```

### 2. 초기 설정

```bash
# 저장소 클론
git clone <repository-url>
cd ax-growth-navigator

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
```

### 3. 환경 변수 (.env)

```env
# API Keys
CLAUDE_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

# 서버 설정
NODE_ENV=development
PORT=3000
HOST=localhost

# 데이터베이스 (선택사항)
DATABASE_URL=sqlite:./data/ax-navigator.db

# 로깅
LOG_LEVEL=debug

# 프리미엄 기능
ENABLE_PDF_EXPORT=true
ENABLE_EMAIL_REPORTS=false
```

---

## 모델 선택 가이드

### 기본 모델: Claude 3.5 Sonnet

**용도**: 핵심 분석, 리포트 생성, 의사결정 지원

```javascript
// src/js/config.js
export const AI_CONFIG = {
  defaultModel: 'claude-3-5-sonnet-20241022',
  apiProvider: 'anthropic',
  temperature: 0.7,  // 창의성과 일관성 균형
  maxTokens: 4096
};
```

**특징**:
- 높은 품질의 분석 및 텍스트 생성
- 복잡한 비즈니스 로직 이해
- 프리미엤 HTML 리포트 생성
- 한글 처리 최적화

### 빠른 분석용: Claude 3 Haiku

**용도**: 빠른 진단, 설문 검증, 보조 분석

```javascript
// 빠른 응답이 필요한 경우
if (isQuickMode) {
  model = 'claude-3-5-haiku-20241022';  // 1/3 비용, 빠른 응답
}
```

**특징**:
- 매우 빠른 응답 (200ms 이내)
- 낮은 비용
- 간단한 검증 작업에 최적화

### 대안: OpenAI GPT-4

**용도**: 특정 분석 작업, 토큰 사용량 최적화

```javascript
// GPT 사용 시
export const AI_CONFIG_ALT = {
  defaultModel: 'gpt-4-turbo',
  apiProvider: 'openai',
  temperature: 0.7
};
```

---

## 훅 설정 (Hooks)

### Pre-commit Hook

**목적**: 커밋 전 코드 품질 검사

```bash
# .git/hooks/pre-commit
#!/bin/bash
npm run lint
npm run format:check
npm run test:quick
```

**설정**:
```json
// .claude/settings.local.json
{
  "hooks": {
    "pre-commit": {
      "enabled": true,
      "commands": ["npm run lint", "npm run format:check"]
    }
  }
}
```

### Post-merge Hook

**목적**: 병합 후 의존성 업데이트 확인

```bash
# .git/hooks/post-merge
#!/bin/bash
if git diff-tree -r --name-only HEAD@{1} HEAD | grep -q 'package.json'; then
  npm install
fi
```

---

## 메모리 설정

### 1. 사용자 프로필 메모리

```markdown
# User Profile
- **Role**: Full-stack Developer / Product Owner
- **Expertise**: JavaScript, AI/LLM Integration, UI/UX
- **Timezone**: KST (UTC+9)
- **Preferred Language**: Korean with English technical terms
```

### 2. 프로젝트 피드백 메모리

```markdown
# Project Feedback
- **Code Style**: 
  - JavaScript ES6+ (no TypeScript for now)
  - 한글 변수명 사용 가능 (예: 진단_결과, 우선순위_점수)
  - JSDoc 주석 필수

- **Architecture**:
  - 4개 모듈 분리: diagnosis, priority, scenarios, report
  - 이벤트 기반 모듈 통신 (Observer Pattern)
  - 동기/비동기 혼합 지원

- **Testing**:
  - Jest 사용
  - 유닛 테스트 필수
  - 각 엔진별 테스트 케이스 작성

- **Documentation**:
  - 한글 주석 권장
  - API 문서는 영문
  - README 한글/영문 병행
```

### 3. 참고사항 메모리

```markdown
# Technical Notes
- **LLM Integration**: 
  - Prompt Engineering: 명확한 지시문 + 예시 포함
  - Token 최적화: 프롬프트 재사용, 캐싱 활용
  - Error Handling: API 실패 시 폴백 로직

- **Data Flow**:
  - Survey Input → Diagnosis Engine → Priority Matrix → Scenarios → Report

- **Performance**:
  - Lazy loading for heavy components
  - Caching for API responses
  - Async operations for file I/O

- **Security**:
  - API key 환경변수 관리
  - CORS 설정 확인
  - 입력값 검증 필수
```

---

## 작업 흐름 (Workflow)

### 1. 분대 편성 (Platoon Formation)

AX Growth Navigator 개발팀은 **소대 편제** 방식으로 구성됩니다.

#### 구조
```
소대 (Platoon)
├── 소대장 (Platoon Leader)
│   └── 역할: 전체 조율, 일정 관리, 코드 리뷰
│
├── 연락병 (Runner)
│   └── 역할: 문서화, 테스트, 배포
│
└── 3개 분대 (Squads)
    ├── Alpha Squad (Diagnosis + Priority Engines)
    ├── Bravo Squad (Scenario + Report Engines)
    └── Charlie Squad (UI Components + API Integration)
```

#### 작업 할당

| 분대 | 담당 | 모듈 |
|------|------|------|
| Alpha | 진단/우선순위 | `diagnosis.js`, `priority.js` |
| Bravo | 시나리오/리포트 | `scenarios.js`, `report.js` |
| Charlie | UI/API | `components/`, `api.js` |
| Runner | 문서/테스트 | `tests/`, `docs/` |

### 2. 병렬 작업

각 분대는 **독립적으로 작업**하되, **공유 인터페이스**로 통합됩니다.

```javascript
// 분대 간 통신 예시
// src/js/engines/index.js
import DiagnosisEngine from './diagnosis.js';
import PriorityEngine from './priority.js';
import ScenarioEngine from './scenarios.js';
import ReportEngine from './report.js';

// 모듈 통신: 이벤트 기반
const eventBus = {
  on: (event, callback) => { /* ... */ },
  emit: (event, data) => { /* ... */ }
};

// Alpha 분대 결과 → Bravo 분대
eventBus.emit('diagnosis-complete', diagnosisResult);
eventBus.on('diagnosis-complete', (result) => {
  priorityEngine.process(result);
});
```

### 3. 개발 주기 (Sprint)

```
Week 1: 설계 & 프로토타입
  └─ 각 분대: 담당 모듈 설계서 작성

Week 2-3: 구현
  └─ 각 분대: 병렬 코드 작성

Week 4: 통합 & 테스트
  └─ 분대 간 통합, 시스템 테스트

Week 5: 리뷰 & 배포
  └─ 코드 리뷰, 버그 수정, 릴리스
```

---

## 권장 Claude 에이전트 설정

### 1. 개발 에이전트 (Development Agent)

**역할**: 코드 작성, 버그 수정, 리팩토링

```json
{
  "name": "dev-agent",
  "model": "claude-3-5-sonnet-20241022",
  "instructions": "당신은 JavaScript 풀스택 개발자입니다. AX Growth Navigator의 src/ 디렉토리의 코드를 작성하고 개선합니다. 한글 주석 사용, ES6+ 문법, 모듈 패턴 준수.",
  "scope": ["src/js/**/*.js", "src/data/**/*.json"],
  "tools": ["code_editor", "file_search", "testing"]
}
```

### 2. 문서화 에이전트 (Documentation Agent)

**역할**: README, API 문서, 기술 가이드 작성

```json
{
  "name": "docs-agent",
  "model": "claude-3-5-sonnet-20241022",
  "instructions": "당신은 기술 문서 작성자입니다. Markdown으로 명확하고 완전한 문서를 작성합니다. 한글/영문 병행.",
  "scope": ["*.md", "docs/**"],
  "tools": ["file_editor", "code_search"]
}
```

### 3. 테스트 에이전트 (Testing Agent)

**역할**: 테스트 코드 작성, 품질 검증

```json
{
  "name": "test-agent",
  "model": "claude-3-5-haiku-20241022",
  "instructions": "당신은 Jest 테스트 전문가입니다. 단위/통합/E2E 테스트를 작성합니다. 100% 커버리지 목표.",
  "scope": ["tests/**/*.test.js"],
  "tools": ["code_editor", "testing"]
}
```

### 4. 리뷰 에이전트 (Review Agent)

**역할**: 코드 리뷰, 품질 검사, 보안 검토

```json
{
  "name": "review-agent",
  "model": "claude-3-5-sonnet-20241022",
  "instructions": "당신은 코드 리뷰어입니다. 품질, 성능, 보안, 스타일을 검사하고 개선 제안을 합니다.",
  "scope": ["src/**", "tests/**"],
  "tools": ["code_search", "git"]
}
```

---

## 명령어 참조

### 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# 린팅 & 포매팅
npm run lint
npm run format

# 특정 모듈 테스트
npm test -- src/js/engines/diagnosis.test.js
```

### Git 워크플로우

```bash
# 기능 브랜치 생성
git checkout -b feature/engine-name

# 커밋 메시지 포맷
# 형식: [분대-이니셜][타입]: 설명
# 예: [A-DX][feat]: 진단 엔진 구현

# 예시 커밋
git add .
git commit -m "[A-DX][feat]: 진단 엔진 데이터 검증 로직 추가"

# PR 생성 후 리뷰
git push origin feature/engine-name
```

---

## 주의사항

### 보안
- API 키는 절대 코드에 커밋하지 말 것
- `.env` 파일은 `.gitignore`에 추가됨
- 환경변수로만 관리

### 성능
- LLM 호출은 비용이 발생하므로 최소화
- 응답 캐싱 활용
- 토큰 사용량 모니터링

### 호환성
- Node.js 16+ 지원
- 최신 브라우저 (Chrome, Firefox, Safari)
- IE11 미지원

---

## 트러블슈팅

### 문제: API 연결 실패

```javascript
// 해결: 환경변수 확인
console.log(process.env.CLAUDE_API_KEY);  // undefined면 .env 파일 확인

// API 재시도 로직
async function callAPI(prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await anthropic.messages.create({ /* ... */ });
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

### 문제: 메모리 부족

```bash
# Node.js 힙 메모리 증가
NODE_OPTIONS=--max-old-space-size=4096 npm start
```

### 문제: 포트 충돌

```bash
# 다른 포트로 실행
PORT=3001 npm start
```

---

## 리소스

- **Claude 문서**: https://docs.anthropic.com
- **Node.js 문서**: https://nodejs.org/docs
- **JavaScript 가이드**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **프로젝트 저장소**: https://github.com/yourrepo

---

**최종 업데이트**: 2025-05-18
**담당**: AX Navigator Team
