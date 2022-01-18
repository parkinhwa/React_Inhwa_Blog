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

## React.js Basic
- React란?
  - Library이다. 기능들을 컴포넌트화 시킬 수 있다.
  - Virtual DOM (여러개에 리스트 중 한가지만 Update할 때 전체 리스트를 reload하는 것이 아닌 바뀐 한가지만 DOM에서 바꿔준다.)
  - 어떻게 Virtual DOM이 한가지만 Update 할 수 있을까?
    - JSX을 렌더링한다. 그럼 Virtual DOM이 Update가 된다.
    - Virtual DOM이 이전 virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.(== diffing)
    - 그 바뀐 부분만 Real DOM에서 바꿔준다.
  - 페이지 이동을 위해 Router사용
    - npm install react-router-dom --save
    - Router node v.6부터 Switch => Routes로 
  - Data Request, Response Flow 그리고 Axios
  
    ![image](https://user-images.githubusercontent.com/65644486/149608586-855ee39b-5ae8-43a5-9866-ab33b11ddda4.png)
    
    - 서로 다른 두개의 포트를 가지고 있는 서버는 아무 설정없이 Request를 보낼 수 없다. => 보안을 위한 Cors(Cross-Origin Resource Sharing) 정책 때문
    - 그래서 이렇게 포트가 다를 경우에는 Proxy를 이용하여 해결한다. 
  
  - Concurrently를 사용하여 백서버와 프론트서버 한번에 키기
    - npm install concurrently --save
    - package.json => "명령어 이름": "concurrently \"명령어\" \"명령어 --prefix \""
  
  - React vs React Hooks
  
    ![image](https://user-images.githubusercontent.com/65644486/149721392-f2896a96-41b4-4064-b84d-9bea3b7ab977.png)
    
    - this.state = {name:""} => const [Name, setName] = useState("")
    - componentDidMount() => useEffect()
    
    


- Redux
  - Redux는 state 관리 라이브러리
  - React에는 Props와 State가 있음
  - Props는 컴포넌트 간 뭔가 주고받을때 사용, 소통하는 방법이 부모에서 자식으로만 가능, 자식에서 받은 값은 변경할 수 없음(부모에서 변경해야함)
  - State는 부모가 자식에게 주는 것이 아닌 컴포넌트 안에서 데이터를 전달할 때 사용, State가 변하면 re-render된다.

    ![image](https://user-images.githubusercontent.com/65644486/149655471-b65e13f5-e2b1-4cc3-83ad-6e249c5d3c06.png)
    
  - Redux Data flow
  
    ![image](https://user-images.githubusercontent.com/65644486/149655624-d6668fae-efb9-49b1-b403-e57c70e34502.png)
    
  - Redux Setting
    - 다운받는 Dependency => Redux, react-redux, redux-promis, redux-thunk
    - => npm install redux react-redux redux-promise redux-thunk --save
    - store에 state를 변경하고 싶을때 객체 형식이 아닌 Promise, Functions 형식으로 받으면 action은 객체 형식이기 때문에 변경하지 못한다. 그래서 redux-thunk와 redux-promise가 Functions와 Promise 형식인지 알려주는 역할을 한다.


  
