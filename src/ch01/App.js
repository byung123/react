/*
  컴포넌트 -> 함수를 뜻 -> HTML 태그를 리턴하는 함수
  JSX
    1. 태그를 열었으면 닫아야한다. <a></a> or <a /> 형태
    2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다
    3. JSX 안에 값 또는 변수를 사용하려면 {} 표현식을 사용해야 한다
*/

import "./App.css";   // css는 그냥 경로에 따옴표만 해주면 된다(같은 경로라 그런가?)
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";
import Box from "./components/Box";


function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  };

  const age = <h2>{31}</h2>

// JSX 영역
  return <>
          <div>
            <Hello></Hello>
          </div>
          <div>
            <Hello></Hello>
          </div>
          <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1> {/* jsx에선 className 사용 */}
          <CustomInput ph={"이름"} disabled={true} value={"김준일"} />
          <CustomInput ph={"나이"} disabled={false} />
          <CustomInput ph={"연락처"} disabled={true} />
          <Box name={"김준일"} isShow={true}> 
            <h2>{31}</h2>  
            <h2>{31}</h2>  
            <h2>{31}</h2>  
          </Box>
  </>
}

export default App;
