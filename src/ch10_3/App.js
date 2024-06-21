import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

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

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                }) ]);
            }
        })
    }

    // const handleDeleteClick = (index) => {  // 내가 적은것 -> 실행 안됨 -> parseInt 안적어서 그런가?
    //     const userList = userList.filter((user) => user.index !== index);
    //     setUserList({...userList});
    // }

    // javascript에선 생략 가능하지만, react에선 window.을 붙이고 confirm을 사용해야 한다
    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])                
            }
        });

        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
        // }
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
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({username, password, name}, index) => {
                        return ( // return 내용을 하나의 값으로 묶기 위해 괄호로 묶을 수 있음
                            <tr key={index}>
                                <td>{index + 1}</td> 
                                <td onClick={() => handleEditClick("username", index)}>{username}</td> 
                                <td onClick={() => handleEditClick("password", index)}>{password}</td> 
                                <td onClick={() => handleEditClick("name", index)}>{name}</td> 
                                <td>
                                    <button value={index}>수정</button>    
                                </td> 
                                {/* <button text={"삭제"} onclick={handleDelete}></button> */}
                                <td>
                                    <button value={index} onClick={handleDeleteClick}>삭제</button>
                                </td>
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