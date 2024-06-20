import { useRef, useState } from "react";
import "./App.css";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ user, setUserList ] = useState([]);

    user = {
        username: "",
        password: "",
        name: ""
    }
    
    const ref = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    const handleFocusOn = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    ref.b.current.focus();
                    break;
                case "b":
                    ref.c.current.focus();
                    break;
                case "c":
                    ref.a.current.focus();
                    setUserList(user => [...user, inputValue]);
                    break;
                default:
            }
        }
    }

    const handleEnter = (e) => {
        setInputValue(inputValue => {
            return {
                
            }
        }
        )
    }

    return <>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스를 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 그리고 input value를 초기화
        */}
        <input name="username" placeholder="사용자명" onChange={handleEnter} onKeyDown={handleFocusOn} value={inputValue} />
        <input name="password" placeholder="비밀번호" onChange={handleEnter} onKeyDown={handleFocusOn} value={inputValue} />
        <input name="name" placeholder="이름" onChange={handleEnter} onKeyDown={handleFocusOn} value={inputValue} />

        {/* 
            3. tbody -> tr묶음을 userList에서 map 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb
        */}
        <table className={"bord"}>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {user.map(index => <td>{user.index}</td>)}
                    {user.map(username => <td>{user.username}</td>)}
                    {user.map(password => <td>{user.password}</td>)}
                    {user.map(name => <td>{user.name}</td>)}
                </tr>
            </tbody>
        </table>
    </>
}

export default App;