# hwp2pdf

## 목표

- hwp 파일을 입력받아서 pdf 파일을 출력할 것
- 웹 브라우저와 node.js 환경에서 돌아갈 것
- 한컴오피스 한글과 최대한 가까운 결과물을 보여줄 것
    - 레이아웃이 달라지지 않으면서 더 예쁘게 보여줄 수 있다면 그렇게 할 것

## 목표가 아닌것

우연히 구현할지도 모르지만 이런거 때문에 머리싸매지 않을 것

- 한컴오피스 한글과 완벽히 똑같은 결과물을 보여줄 것
    - floating 객체 레이아웃
    - 미주/각주가 그려지는 페이지 위치
    - 머릿글/바닥글 높이계산
- R2L 레이아웃
- 편집과 관련된 기능
    - 증분 레이아웃
    - 조판 부호 렌더링
    - 셀렉션, 핸들
- 모든 js 런타임에서 실행될 것
    - 오래된 웹브라우저에서 실행될 것
        - 인터넷 익스플로러
    - deno에서 실행될 것
- 다양한 플랫폼에서 정확히 같은 결과물을 출력하는 것
- 다양한 렌더링 백엔드를 지원할 것
    - html, svg, canvas, webgl
