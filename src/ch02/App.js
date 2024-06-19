import { useState } from "react";

function App() {
    const [ number, setNumber ] = useState(100); // 마우스 갖다대서 결과 자료형 확인
    const [name, setName ] = useState(null);

    console.log(number); // 100출력
    if(number === 100) {
        setTimeout(() => setNumber(200), 2000);  // 비동기처리
        // setNumber(200);    // 상태 변화 메소드 : 설정하면 이 상태를 가지고 있는 함수를 다시 호출시킴
    } // 상태변화 -> 상태가 변화하면 함수 재호출(재렌더링)
    // 재렌더링 시점에는 상태 초기화는 일어나지 않는다 - 바뀐 부분만 달라짐
    console.log("a");

    if(number === 200) {
        setNumber(300);  //useState의 setter는 비동기다
        console.log(number);
    }

    console.log(name);
    if(name === null) {
        setName("김준일");
    }
    console.log(name);

    return <>
    <h1>number 상태 확인</h1>
    <h2>{number}</h2>
    </>
}

export default App;