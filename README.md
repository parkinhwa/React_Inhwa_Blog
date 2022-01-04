# Inflearn_node_react_basic
## Node.js Basic
- 몽고 DB 연결하기
  - 몽고 DB 사이트 회원가입 (https://www.mongodb.com/)
  - 클리스터 생성
  - 몽고 DB 유저 생성
  - Mongoose 다운로드 => npm install mongoose --save
  - App에 MongoDB 연결하기

- NODE MON = 소스를 변경할 때 그걸 감지해서 자동으로 서버를 재시작해주는 tool
  - node mon 설치 => npm install nodemon --save-dev
  - nodemon으로 시작한다 => package.json에 script 하나 더 만들기

- DB 비밀번호 암호화하기
  - Bcrypt 설치
  - index.js에 register코드에 가서 save하기전 비밀번호 암호화
  - User.js에 비밀번호 암호화 함수 추가

- 로그인 시 필요한 라이브러리
  - DB에 저장된 이메일과 비밀번호가 입력한 값과 같다면 토큰을 생성한다.
  - 토큰 생성을 위해 필요한 JSONWEBTOKEN 라이브러리 다운 => npm install jsonwebtoken --save 
