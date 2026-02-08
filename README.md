# 🍦 Binggrae Clone Coding

빙그레(Binggrae) 공식 웹사이트를 참고하여  
**HTML / CSS / jQuery 기반으로 프론트엔드 UI를 구현한 클론 코딩 프로젝트**입니다.  
상업적 목적이 아닌 개인의 개발 역량 강화를 위해 만들어졌습니다.

<br/>

## 📌 프로젝트 개요

**배포 주소**: https://alsrudwns1.github.io/Project-Binggrae/

**진행 방식**: 개인 프로젝트

**개발 기간**: 약 10일

**목적**: 실제 서비스 중인 웹사이트의 구조 분석 및 반응형 UI 재현 능력 향상

<br/>

## 🛠 사용 기술

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-06B6D4?style=for-the-badge&logo=css&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

## 📂 구현 페이지

- [메인 페이지](https://alsrudwns1.github.io/Project-Binggrae/)
- [로그인 페이지](https://alsrudwns1.github.io/Project-Binggrae/login.html)
- [게시판 글 목록 페이지](https://alsrudwns1.github.io/Project-Binggrae/release-list.html)
- [게시판 글 작성 페이지](https://alsrudwns1.github.io/Project-Binggrae/release-write.html)
- [게시글 내용 페이지](https://alsrudwns1.github.io/Project-Binggrae/release-view.html)

<br/>

## ⚠️ 트러블 슈팅 및 배운 점

### 문제점 및 이슈

- 모바일 화면에서 삼선 버튼의 메뉴 활성화 후, 요소 클릭 시 의도치 않은 메뉴가 토글되는 현상 발생
- 모바일 화면에서 삼선 버튼의 메뉴 활성화 후, 화면 크기 조절 시 내부 레이아웃이 깨지는 현상 발생
- 원본 사이트는 Slick Slider 기반이었으나, Swiper.js 로 동일한 UI를 구현하는 과정에서 시간 소요

### 해결 방법

- 이벤트 구조 정리를 통해 요소 간 불필요한 이벤트 버블링 제거
- 'resize' 이벤트를 활용해 화면 크기 변경 시 UI 상태 초기화 및 재정의
- 모바일 전용 인터랙션과 PC 인터랙션 로직 분리

### 느낀 점

- 원본 사이트에서 사용된 Slick 대신 Swiper.js를 선택했는데, 구현 시간은 늘어났지만 Swiper 에 대한 이해도를 늘릴 수 있었다.
- 오류의 대부분이 header 부분과 삼선 메뉴에서 나온 만큼 반응형 UI 및 이벤트 구조의 중요성을 체감할 수 있었다.
- 이번에는 프론트엔드 구현에 집중했지만, 추후 Spring Boot, SQL DB, AWS 등을 활용해 로그인 및 게시판 기능을 포함한 백엔드 영역까지 확장해보고 싶다.
