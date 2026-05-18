/**
 * ============================================
 * AX Navigator - 전역 상태 관리 및 유틸리티
 * ============================================
 */

const AppState = {
    diagnosisData: null,
    priorityData: null,
    scenariosData: null,
    reportData: null,

    load() {
        const saved = localStorage.getItem('axNavigatorState');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.diagnosisData = parsed.diagnosisData || null;
                this.priorityData = parsed.priorityData || null;
                this.scenariosData = parsed.scenariosData || null;
                this.reportData = parsed.reportData || null;
            } catch (e) {
                console.error('Failed to load state:', e);
            }
        }
    },

    save() {
        const data = {
            diagnosisData: this.diagnosisData,
            priorityData: this.priorityData,
            scenariosData: this.scenariosData,
            reportData: this.reportData
        };
        localStorage.setItem('axNavigatorState', JSON.stringify(data));
    },

    setDiagnosisData(data) {
        this.diagnosisData = data;
        this.save();
    },

    setPriorityData(data) {
        this.priorityData = data;
        this.save();
    },

    setScenariosData(data) {
        this.scenariosData = data;
        this.save();
    },

    setReportData(data) {
        this.reportData = data;
        this.save();
    }
};

// 페이지 로드 시 상태 복원
document.addEventListener('DOMContentLoaded', () => {
    AppState.load();

    // 네비게이션 바 토글 (모바일)
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('open');
        });

        // 메뉴 항목 클릭 시 메뉴 닫기
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarNav.classList.remove('open');
            });
        });
    }
});

// 모듈 간 데이터 패싱 인터페이스
window.updateDiagnosisResults = function(data) {
    AppState.setDiagnosisData(data);
};

window.updatePriorityResults = function(data) {
    AppState.setPriorityData(data);
};

window.updateScenariosResults = function(data) {
    AppState.setScenariosData(data);
};

window.updateReportResults = function(data) {
    AppState.setReportData(data);
};
