function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태
     */

    // promise 클래스 객체 생성
    // 함수를 인수로 받음 (콜백 함수)
    function p1(name) {
        return new PromiseTest((resolve, reject) => {
            // 대기(동기 처리) 상태
            console.log(name + " 프로미스 생성");
            if(!name) {
                reject("오류!!!");
            }
            resolve(name); // resolve가 호출되면 then()이 실행됨 -> resolve가 호출되면 이행단계
        });
    }

    // 이 함수 자체가 프로미스 생성(async) -> 호출하면 return 값을 준다
    async function p2() {
        let a = null;
        try {
            // p4().then(r => a = r); -> 비동기라서 a에 null이 들어간채로 결과가 출력됨
            a = await p4(); // -> 동기 처리됨 (await: p4가 이행이 되기까지 기다리라는 뜻) -> a에 p4 결과가 들어가 출력됨
            // await은 async 안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다.
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    } 

    // async를 안썼을때 -> resolve를 값을준다?
    function p3() {
        return new PromiseTest((resolve, reject) => {
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    const handleClick = () => {
        p1("p1").then(result => { // result에 name을 전달 받음.
            console.log("이행");
            console.log(result);
            if(true) {
               throw new Error("거부!!"); // 거부(reject)
            }
            return "두번째 then"; // 이행(resolve)

        })
        .then(result => { // 두 번째 then의 result를 전달
            console.log(result);
        })
        .catch(error => {
            // console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }
    // Promise는 비동기이지만, then은 동기 상태로 동작한다

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            })
        }, 2000);
        // p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button> 
            <button onClick={handleClick2}>async</button> 
        </>
    );
}

export default PromiseTest;