import { useState } from "react";

function App() {
    // 이름이 inputValue인 상태 생성
    const [ inputValue, setinputValue ] = useState("");

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleResetClick = () => {
        setinputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
    </>
}

export default App;