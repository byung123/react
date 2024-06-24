import { useEffect, useState } from "react";

function App() {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    // 이렇게 하면 비동기 상태이기 때문에 두 개가 동시에 적용 되지 않음
    // 이것을 해결하기 위해 useEffect(); 메소드 사용 -> 상태가 변화하면 바로 무엇을 해라
    // 실행할 함수와 []배열(dependency) 2개의 매개변수를 받음

    // number가 변했을 때 실행될 함수 console.log()
    // 첫 호출 땐 무조건 한 번 실행되고, 그 다음부터는 number가 변할 때마다 호출된다
    // useEffect(() => {
    //     console.log("test");
    //     setNumber3(number * 10);
    // }, [number])

    //number가 변하든, number2가 변하든 동작 -> 배열에 추가 하면 됨
    useEffect(() => {
        // 마운트 지점 -> 마운트: 체결(연결)하는 것 
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2])

    // dependency가 없는 것들은 최초에 한 번 만 실행돼야하는 것들을 의미
    // useEffect(() => {
    //     console.log("test");
    //     setNumber3(number * 10);
    // }, [])

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;