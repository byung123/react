## 프로젝트 생성
- age create-react-app 프로젝트명

## 라이브러리 설치
- 라우터 > npm i react-router-dom
- Emotion > npm 1 @emotion/react
- Recoil > npm i recoil
- React Icons > npm i reacr-icons
- Sweetalert2 > npm i sweetalert2

## JSX 자동완성
- Ctrl + Shift + p
- settings JSON 검색한뒤 USER settings JSON(vscode 사용자 설정) 선택
```json
  "emmet.syntaxProfiles": {
     "javascript": "jsx" 
    },
    "emmet.includeLanguages": {
        "javascript": "html"
    }
```

## 확장기능(Extension)
- react code snippets
- vscode-color-picker
- vscode-styled-component
- live server나 code runner는 이제 쓸 때가 아니다?
- Thema는 원하는 거 아무거나 사용해도 무방

## 터미널 선택
- Ctrl + Shift + p
- terminal: select Default Profile 선택
- gitBash 선택

## 폴더 구조
- components
- pages
- constants
- styles
- hooks
- config
- utils
- atoms
- assets
- apis(services)
- store

## 주요 Hook 함수
- useState(기본값)
- useEffect(() => {}, 종속성[])
- useRef(기본값)
- useMemo(() => 리턴, [])
- useCallback(() => {}, [])
- useRecallState(atom)
- useNavigate()
- useLocation()
- useParams()
- useSearchParams()

# 명명규칙
- Component 이름은 대문자로 시작
- 하나의 Component 폴더에는 하나의 Component.jsx 파일, style.js 파일로 구성
- constants 폴더에 들어가는 상수들은 대문자와 스네이크 표기법으로 작성
- 이벤트 함수명은 handle로 시작해서 이벤트명으로 끝낸다

