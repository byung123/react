function SetTimeoutTest() {

    /**
     * 비동기
     */

    // 2초 뒤에 4 1 2 3이 찍힘 -> 맨 아래(동기) 123 보다 먼저 있지만, 더 늦게 결과창에 나타남 : 비동기 처리
    setTimeout(() => {
        print(count);
    }, 2000);

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    // 순서대로 동작함 : 동기
    console.log(1);
    console.log(2);
    console.log(3);

    /**
     * 콜백함수 : 함수를 매개변수로 넣어줄 때 매개변수로 넣어지는 함수
     */
    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출");
    }

    test(add); // add: 콜백함수

    return (
        <></>
    );
}

export default SetTimeoutTest;