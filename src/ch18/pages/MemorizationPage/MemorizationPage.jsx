import React, { useCallback, useMemo, useState } from 'react';

function MemorizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

    //num이 바뀔 때만 a에 대입해라
    const a = useMemo(() => {
        console.log(num);
        return num + 10;
    }, [num]); // num은 dependency이다.

    // 이렇게 하면 다른것들이 변했을 때도 계속 a의 값이 바뀜(입력도중에도(onchange))
    // const a = num + 20; 

    //렌더링 될따마다 잣 재정의
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value))
        }, []);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemorizationPage;