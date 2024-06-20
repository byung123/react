// 문제 입력하고 확인을 눌렀을 때 리스트에 뜨게 하기

import { useState } from "react";

function App() {
    // const [ username, setUsername ] = useState("");
    // const [ password, setPassword ] = useState("");
    // const [ email, setEmail ] = useState("");

    // const setValue = (e) => {

    //     switch(e.target.name) {
    //         case "username":
    //             setUsername(e.target.value);
    //             break;
    //         case "password":
    //             setPassword(e.target.value);
    //             break;
    //         case "email":
    //             setEmail(e.target.value);
    //             break;
    //     }
    // }

    // return <>
    //     <input type="text" placeholder="사용자이름" />
    //     <input type="text" placeholder="비밀번호" />
    //     <input type="text" placeholder="이메일" />
    //     <button onClick={setValue} value={(username, password, email)}>확인</button>
    //     <ul>
    //         <li>사용자이름: {username}</li>
    //         <li>비밀번호: {password}</li>
    //         <li>이메일: {email}</li>
    //     </ul>
    // </>

    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [user, setUser] = useState({...emptyUser});
    const [inputData, setInputData] = useState({...emptyUser});

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
            [e.target.name]: e.target.value
            }
        })
    }    

    const handleClick = () => {
        setUser(inputData);
    }

    //input을 쓸 땐 value 를 무조선 사용해야한다.
    return <>
        <input name="username" placeholder="사용자이름" onChange={handleInputChange} value={inputData.username}/>
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} value={inputData.password}/>
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={inputData.email}/>
        <button onClick={handleClick}>확인</button>
        <ul>
            <li>사용자이름 : {user.username}</li>
            <li>비밀번호 : {user.password}</li>
            <li>이메일 : {user.email}</li>
        </ul>
    </>
}

export default App;