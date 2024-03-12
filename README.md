2024.03.12 Scinic react remodeling

 주 이슈처리 내용들

1. 특정 컴포넌트에서 async로 비동기 함수를 실행하는것이 아닌 최상위 컴포넌트 app.js에서 useEffect로 딱 한번 비동기통신으로 상품의 데이터를 호출. 이후 각각 자식 컴포넌트로 props로 데이터 덩어리를 받아와서 개별적으로 조건을 걸어서 필터링하게 변경
2. 상품정보 비동기 수행할 get 미들웨어/ 프로모션 컴포넌트에서 사용자가 입력한 정보를 sql 테이블에 insert into~ 구문으로 추가해줄 post 미들웨어 따로 구별
3.  /detail/ 뒤의 넘버를 id : param으로 받아서 해당 제품이 가지고 있는 PK id 값을 받아와 상세페이지 컴포넌트에게 props로 전달/ 수량 추가/제거 간이 구현
4.  검색엔진 활성화/검색에 해당하는 라우팅은 post로 요청하여 get 에서 요청했을때 발생하던 데이터 잔여현상을 해결
5.  app에서 요청할때 /store를 끼고 요청하여 하위 라우터 입장에서는 테이블의 존재유무를 몰랐던게 문제,if/else문을 활용하여 테이블명이 숫자인지 문자인지 헷갈리던 걸 parseInt를 활용하여 문자열을 숫자로 변환/ params를 카테고리 번호의 number로 인식시켜 새로고침하였을때 일어나던 문제 수정


modules

Frontend =>
React
Bootstrap
Swiper
SCSS
React-Router-Dom
Aos


Backend =>
Axios
Express
Mysql
Nodejs

총 작업 기간 2024.01.08 ~ 2024.03.12
