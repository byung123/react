import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, SetNames ] = useState([]); // 배열 상태만들기
    // const liList = [
    //     <li>{"test1"}</li>,
    //     <li>{"test2"}</li>,
    //     <li>{"test3"}</li>,
    //     <li>{"test4"}</li>
    // ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            SetNames(names => [ ...names, inputValue ]);
            setInputValue("");
        }
    }

    // map을 사용해 반복을 쓸땐 key값 index를 반드시 사용하기(약속)
    return <>
        <input 
        onChange={handleInputChange} 
        onKeyDown={handleInputKeyDown}
        value={inputValue} />
        <ul>
            {/* { liList } */}
            {names.map((name, index) => <li key={index}>{name}</li>)} 
        </ul>
    </>
}

export default App;