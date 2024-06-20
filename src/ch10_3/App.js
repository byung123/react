import { useRef, useState } from "react";
import "./App.css";

// 문제2 : ch10_2에서 삭제 버튼 만들기
function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            // const {username, password, name} = inputRef; 이렇게 하고 inputRef. 안붙여도 됨
            switch(e.target.name) {
                case "username": 
                    inputRef.password.current.focus();
                    break;
                case "password": 
                    inputRef.name.current.focus();
                    break;
                case "name": 
                    inputRef.username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleDelete = (index) => {
        const userList = userList.filter((user) => user.index !== index);
        setUserList({...userList});
    }
        
    return <>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스를 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 그리고 input value를 초기화
        */}
        <input name="username" placeholder="사용자명" 
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange} 
        ref={inputRef.username} 
        value={inputData.username} />
        <input name="password" placeholder="비밀번호" 
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange} 
        ref={inputRef.password} 
        value={inputData.password} />
        <input name="name" placeholder="이름"
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange} 
        ref={inputRef.name} 
        value={inputData.name} />

        {/* 
            3. tbody -> tr묶음을 userList에서 map 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({username, password, name}, index) => {
                        return ( // return 내용을 하나의 값으로 묶기 위해 괄호로 묶을 수 있음
                            <tr key={index}>
                                <td>{index + 1}</td> 
                                <td>{username}</td> 
                                <td>{password}</td> 
                                <td>{name}</td> 
                                <button text={"삭제"} onclick={handleDelete}></button>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

// function Button({text}) {
//     const handleDelete = (key) => {
//         const userList = userList.filter((user) => user.key !== key);
//         setUserList({...userList});
//     }
//     return <button onClick={handleDelete}>{text}</button>
// }

export default App;