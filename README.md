## 🎯 **예매 서비스 개발 + 인프라 프로젝트 (3개월)**

**기간**: 2025.05.05 ~ 2025.07.27 (총 12주, 주 3시간 기준)

---

### ✅ **1~2주차: 설계 및 환경 세팅**

주차기간구분목표

| 1주차 | 05.05 ~ 05.11 | 기획 | o [전체 기능 명세서 작성](https://tyge-ottesen-brahe.tistory.com/30)   o [사용자 플로우 및 화면 흐름도 정의](https://tyge-ottesen-brahe.tistory.com/29)   o [ERD 설계](https://tyge-ottesen-brahe.tistory.com/31)   o [API 명세서 초안 작성](https://tyge-ottesen-brahe.tistory.com/32) |
| --- | --- | --- | --- |
| 2주차 | 05.12 ~ 05.18 | 백엔드 | o DB 초기 테이블 생성   \- 개발 환경 세팅 (Spring Boot, JPA, JWT)   o Node.js 프론트 개발환경 세팅   \- GitHub 초기 세팅 및 readme 구성 |

---

### ✅ **3~4주차: 프론트 화면 개발 (Mock API 기반)**

주차기간구분목표

| 3주차 | 05.19 ~ 05.25 | 프론트 | \- 로그인 / 회원가입 화면   \- 공연 목록 / 상세 화면 구성   \- 좌석 선택 기본 UI 구성   \- mock API 구조 설계 및 데이터 작성 |
| --- | --- | --- | --- |
| 4주차 | 05.26 ~ 06.01 | 프론트 | \- 전체 예매 흐름 연결   \- 기본 화면 전환 구현   \- mock 데이터 기반 동작 테스트   \- 프론트 상태관리 구조 도입 |

---

### ✅ **5~6주차: 백엔드 API 개발 시작 + 프론트 연동**

주차기간구분목표

| 5주차 | 06.02 ~ 06.08 | 백엔드 | \- 회원가입 / 로그인 기능 구현   \- JWT 인증 로직 + 필터 구성   \- 프론트와 연동 후 로그인 플로우 완성 |
| --- | --- | --- | --- |
| 6주차 | 06.09 ~ 06.15 | 백엔드 | \- 공연 목록 / 상세 API 구현   \- DB 공연 데이터 연동   \- 프론트 연결 및 UI 완성도 증가 |

---

### ✅ **7~9주차: 좌석 선택 + 예매 + 대기열 시스템 구축**

주차기간구분목표

| 7주차 | 06.16 ~ 06.22 | 백엔드 | \- 좌석 테이블 설계 및 조회 API 개발   \- 좌석 선택 UI 완성 + 예매 버튼 연결 |
| --- | --- | --- | --- |
| 8주차 | 06.23 ~ 06.29 | 백엔드 / 인프라 | \- Redis 연동   \- 예매 요청 시 락 처리 (SETNX + TTL)   \- 예약 DB 처리 및 예외 로직 구축 |
| 9주차 | 06.30 ~ 07.06 | 백엔드 | \- 대기열 로직 구현   \- 사용자 수 제한 로직 / 순번 갱신 / 토큰 처리   \- 예매 시스템과 통합 테스트 진행 |

---

### ✅ **10~11주차: 인프라 및 트래픽 대응, 관리자 페이지**

주차기간구분목표

| 10주차 | 07.07 ~ 07.13 | 인프라 | \- Nginx, Docker 설정   \- Kubernetes 배포, Ingress, Replica 구성   \- 기본 모니터링 구성 |
| --- | --- | --- | --- |
| 11주차 | 07.14 ~ 07.20 | 관리자 / 인프라 | \- 관리자 페이지 (공연 등록 / 조회 / 좌석 관리)   \- 관리자 전용 CRUD API   \- 대시보드 뷰 설정 (ELK 기본 적용 시도) |

---

### ✅ **12주차: 정리 및 포트폴리오 제작**

주차기간구분목표

| 12주차 | 07.21 ~ 07.27 | 문서화 | \- 설계서/명세서 정리   \- 포트폴리오 README 작성   \- 시연 영상 촬영 및 배포   \- Kafka 등 고급기능 여유 시 시도 |
| --- | --- | --- | --- |
