/**
 * ============================================
 * AX Navigator - SPA 라우팅 및 모듈 관리
 * ============================================
 *
 * 기능:
 * - hash 기반 SPA 라우팅
 * - 페이지 간 네비게이션
 * - localStorage 연결
 * - 모듈 간 데이터 패싱
 * - 사이드바 메뉴 관리
 */

// ===== 전역 애플리케이션 상태 =====
const AppState = {
    currentPage: '/',
    diagnosisData: null,
    priorityData: null,
    scenariosData: null,
    reportData: null,

    // localStorage에서 데이터 복원
    load() {
        const saved = localStorage.getItem('axNavigatorState');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.diagnosisData = parsed.diagnosisData || null;
            this.priorityData = parsed.priorityData || null;
            this.scenariosData = parsed.scenariosData || null;
            this.reportData = parsed.reportData || null;
        }
    },

    // localStorage에 데이터 저장
    save() {
        const data = {
            diagnosisData: this.diagnosisData,
            priorityData: this.priorityData,
            scenariosData: this.scenariosData,
            reportData: this.reportData
        };
        localStorage.setItem('axNavigatorState', JSON.stringify(data));
    },

    // 진단 데이터 업데이트
    setDiagnosisData(data) {
        this.diagnosisData = data;
        this.save();
    },

    // 우선순위 데이터 업데이트
    setPriorityData(data) {
        this.priorityData = data;
        this.save();
    },

    // 시나리오 데이터 업데이트
    setScenariosData(data) {
        this.scenariosData = data;
        this.save();
    },

    // 리포트 데이터 업데이트
    setReportData(data) {
        this.reportData = data;
        this.save();
    }
};

// ===== 라우팅 시스템 =====
const Router = {
    // 현재 페이지 설정
    setCurrentPage(page) {
        AppState.currentPage = page;
    },

    // 현재 페이지 반환
    getCurrentPage() {
        return AppState.currentPage;
    },

    // 라우트 정의
    routes: {
        '/': {
            title: '홈 - AX Growth Navigator',
            load: () => loadHomePage()
        },
        '/diagnosis': {
            title: 'AX 진단 - AX Growth Navigator',
            load: () => loadPage('diagnosis.html')
        },
        '/priority': {
            title: '우선순위 설정 - AX Growth Navigator',
            load: () => loadPage('priority.html')
        },
        '/scenarios': {
            title: '부서별 시나리오 - AX Growth Navigator',
            load: () => loadPage('scenarios.html')
        },
        '/report': {
            title: 'ROI 리포트 - AX Growth Navigator',
            load: () => loadPage('report.html')
        }
    },

    // 라우트 핸들러
    async navigate(route) {
        const routeConfig = this.routes[route];

        if (!routeConfig) {
            console.warn(`Route ${route} not found, redirecting to home`);
            window.location.hash = '/';
            return;
        }

        // 문서 제목 업데이트
        document.title = routeConfig.title;

        // 현재 페이지 설정
        this.setCurrentPage(route);

        // 사이드바 메뉴 업데이트
        updateActiveMenu(route);

        // 페이지 로드
        await routeConfig.load();
    }
};

// ===== 페이지 로딩 함수 =====

/**
 * 홈 페이지 로드 (index.html 콘텐츠 표시)
 */
function loadHomePage() {
    // 홈 페이지는 이미 index.html에 포함되어 있으므로 추가 작업 불필요
    // 메인 섹션들을 표시하고 페이지 콘테이너는 숨김
    const mainContent = document.querySelector('.main-content');
    const pageContainer = document.getElementById('page-container');

    if (mainContent) {
        mainContent.style.display = 'flex';
    }
    if (pageContainer) {
        pageContainer.style.display = 'none';
    }

    // 현재 진단 상태 업데이트
    updateStatusCard();
}

/**
 * 외부 HTML 페이지 로드 (Alpha, Bravo 모듈)
 * @param {string} filename - 로드할 HTML 파일명
 */
async function loadPage(filename) {
    try {
        const response = await fetch(filename);

        if (!response.ok) {
            throw new Error(`Failed to load ${filename}`);
        }

        const html = await response.text();

        // 메인 콘텐츠 숨기기
        const mainContent = document.querySelector('.main-content');
        const pageContainer = document.getElementById('page-container');

        if (mainContent) {
            mainContent.style.display = 'none';
        }

        if (pageContainer) {
            pageContainer.innerHTML = html;
            pageContainer.style.display = 'block';
            pageContainer.classList.add('page-enter');

            // 동적으로 로드된 스크립트 실행
            const scripts = pageContainer.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src) {
                    // 외부 스크립트는 src를 통해 로드
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                } else {
                    // 인라인 스크립트 실행
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                }
            });
        }

        // 페이지 상단으로 스크롤
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading page:', error);
        const pageContainer = document.getElementById('page-container');
        if (pageContainer) {
            pageContainer.innerHTML = `
                <div class="section-container" style="padding: 60px 20px; text-align: center;">
                    <h2 style="color: #d32f2f;">페이지를 로드할 수 없습니다</h2>
                    <p style="color: #666; margin: 20px 0;">죄송합니다. 요청한 페이지를 로드할 수 없었습니다.</p>
                    <button class="btn btn-primary" onclick="navigateTo('/')">홈으로 돌아가기</button>
                </div>
            `;
            pageContainer.style.display = 'block';
        }
    }
}

// ===== 네비게이션 함수 =====

/**
 * 프로그래매틱 네비게이션
 * @param {string} path - 이동할 경로
 */
function navigateTo(path) {
    window.location.hash = path;
}

/**
 * 현재 진단 상태 업데이트
 */
function updateStatusCard() {
    const statusCard = document.getElementById('statusCard');

    if (!statusCard) return;

    const diagnosisData = AppState.diagnosisData;

    if (diagnosisData && diagnosisData.completed) {
        const score = diagnosisData.score || 0;
        const status = getStatusText(score);

        statusCard.innerHTML = `
            <div class="status-content">
                <div class="status-icon">✓</div>
                <div class="status-text">
                    <h3>진단 완료</h3>
                    <p>최종 점수: <strong>${score}점</strong> / 100점 (${status})</p>
                </div>
            </div>
            <button class="btn btn-primary" onclick="navigateTo('/priority')">다음 단계로</button>
        `;
    } else if (diagnosisData && diagnosisData.inProgress) {
        statusCard.innerHTML = `
            <div class="status-content">
                <div class="status-icon">⏳</div>
                <div class="status-text">
                    <h3>진단 진행 중</h3>
                    <p>${diagnosisData.progress || '진단을 진행하고 있습니다...'}%</p>
                </div>
            </div>
            <button class="btn btn-primary" onclick="navigateTo('/diagnosis')">계속하기</button>
        `;
    } else {
        statusCard.innerHTML = `
            <div class="status-content">
                <div class="status-icon">📋</div>
                <div class="status-text">
                    <h3>진단을 아직 시작하지 않았습니다</h3>
                    <p>아래 "지금 진단 시작" 버튼을 클릭하여 AX 진단을 시작하세요.</p>
                </div>
            </div>
            <button class="btn btn-primary" onclick="navigateTo('/diagnosis')">진단 시작</button>
        `;
    }
}

/**
 * 점수에 따른 상태 텍스트 반환
 * @param {number} score - 점수
 * @returns {string} - 상태 텍스트
 */
function getStatusText(score) {
    if (score >= 90) return '탁월함 (A+)';
    if (score >= 80) return '우수 (A)';
    if (score >= 70) return '양호 (B)';
    if (score >= 60) return '기본 (C)';
    return '개선 필요 (D)';
}

// ===== 메뉴 관리 함수 =====

/**
 * 활성 메뉴 업데이트
 * @param {string} route - 현재 라우트
 */
function updateActiveMenu(route) {
    // 모든 메뉴 항목에서 active 클래스 제거
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 현재 라우트에 해당하는 메뉴 항목에 active 클래스 추가
    const activeLink = document.querySelector(`.nav-link[data-route="${route}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * 사이드바 토글 (모바일)
 */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// ===== 이벤트 리스너 설정 =====

document.addEventListener('DOMContentLoaded', () => {
    // 애플리케이션 상태 복원
    AppState.load();

    // 사이드바 토글 버튼
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // 메뉴 링크 클릭 이벤트
    const navLinks = document.querySelectorAll('.nav-link[data-route]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            navigateTo(route);
        });
    });

    // 홈 페이지 버튼 이벤트
    const startDiagnosisBtn = document.getElementById('startDiagnosisBtn');
    if (startDiagnosisBtn) {
        startDiagnosisBtn.addEventListener('click', () => navigateTo('/diagnosis'));
    }

    const viewResultsBtn = document.getElementById('viewResultsBtn');
    if (viewResultsBtn) {
        viewResultsBtn.addEventListener('click', () => {
            if (AppState.diagnosisData && AppState.diagnosisData.completed) {
                navigateTo('/priority');
            } else {
                navigateTo('/diagnosis');
            }
        });
    }

    // 초기 라우트 처리
    handleRouteChange();
});

/**
 * hash 변경 감시 및 라우팅
 */
window.addEventListener('hashchange', handleRouteChange);

/**
 * 라우트 변경 처리
 */
function handleRouteChange() {
    let hash = window.location.hash.slice(1); // '#' 제거

    // 빈 해시는 '/'로 처리
    if (!hash) {
        hash = '/';
    }

    // 라우팅
    Router.navigate(hash);
}

// ===== 모듈 간 데이터 패싱 유틸리티 =====

/**
 * 진단 결과를 받아 상태 업데이트
 * Alpha 모듈 (diagnosis.html)에서 호출
 * @param {Object} data - 진단 데이터
 */
window.updateDiagnosisResults = function(data) {
    AppState.setDiagnosisData({
        ...data,
        completed: true,
        inProgress: false
    });
    console.log('Diagnosis results saved:', data);
};

/**
 * 진단 진행률 업데이트
 * Alpha 모듈 (diagnosis.html)에서 호출
 * @param {number} progress - 진행률 (0-100)
 */
window.updateDiagnosisProgress = function(progress) {
    AppState.diagnosisData = AppState.diagnosisData || {};
    AppState.diagnosisData.inProgress = true;
    AppState.diagnosisData.progress = progress;
    AppState.save();
    updateStatusCard();
};

/**
 * 우선순위 결과를 받아 상태 업데이트
 * Alpha 모듈 (priority.html)에서 호출
 * @param {Object} data - 우선순위 데이터
 */
window.updatePriorityResults = function(data) {
    AppState.setPriorityData(data);
    console.log('Priority results saved:', data);
};

/**
 * 시나리오 결과를 받아 상태 업데이트
 * Bravo 모듈 (scenarios.html)에서 호출
 * @param {Object} data - 시나리오 데이터
 */
window.updateScenariosResults = function(data) {
    AppState.setScenariosData(data);
    console.log('Scenarios results saved:', data);
};

/**
 * 리포트 결과를 받아 상태 업데이트
 * Bravo 모듈 (report.html)에서 호출
 * @param {Object} data - 리포트 데이터
 */
window.updateReportResults = function(data) {
    AppState.setReportData(data);
    console.log('Report results saved:', data);
};

/**
 * 진단 데이터 반환 (다른 모듈에서 사용)
 * @returns {Object} - 진단 데이터
 */
window.getDiagnosisData = function() {
    return AppState.diagnosisData;
};

/**
 * 우선순위 데이터 반환 (다른 모듈에서 사용)
 * @returns {Object} - 우선순위 데이터
 */
window.getPriorityData = function() {
    return AppState.priorityData;
};

/**
 * 시나리오 데이터 반환 (다른 모듈에서 사용)
 * @returns {Object} - 시나리오 데이터
 */
window.getScenariosData = function() {
    return AppState.scenariosData;
};

/**
 * 리포트 데이터 반환 (다른 모듈에서 사용)
 * @returns {Object} - 리포트 데이터
 */
window.getReportData = function() {
    return AppState.reportData;
};

// ===== 유틸리티 함수 =====

/**
 * 로컬스토리지 전체 삭제 (디버깅용)
 */
window.clearAllData = function() {
    if (confirm('모든 데이터를 삭제하시겠습니까?')) {
        localStorage.removeItem('axNavigatorState');
        AppState.diagnosisData = null;
        AppState.priorityData = null;
        AppState.scenariosData = null;
        AppState.reportData = null;
        updateStatusCard();
        console.log('All data cleared');
    }
};

/**
 * 현재 상태 로그 출력 (디버깅용)
 */
window.debugState = function() {
    console.log('Current App State:', AppState);
};

// 애플리케이션 초기화 완료 로그
console.log('AX Navigator App initialized successfully');
