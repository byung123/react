import { useState } from "react";

function App() {

    const [ grade, setGrade ] = useState(""); // input의 value기 때문에 문자열""로 해야함
    const [ group, setGroup ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ name, setName ] = useState("");

    const emptyStudent = {
        grade: "",
        group: "",
        number: "",
        name: "",
    }

    // student 객체 만들기
    const [ student, setStudent ] = useState({...emptyStudent});

    // const changeGrade = (e) => {
    //     setGrade(e.target.value);
    // }
    // const changeGroup = (e) => {
    //     setGroup(e.target.value);
    // }
    // const changeNumber = (e) => {
    //     setNumber(e.target.value);
    // }
    // const changeName = (e) => {
    //     setName(e.target.value);
    // }

    // 한번에 묶는 방법
    const changevalue = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
        }
    }

    const changevalue2 = (e) => {
        // setStudent(student => {
        //     return {
        //         ...student,
        //         [e.target.name]: e.target.value
        //     }
        // })

        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent); 
   }
    
    return <>
        <input name="grade" placeholder="학년" onChange={changevalue} value={grade}/>
        <input name="class" placeholder="반" onChange={changevalue} value={group}/>
        <input name="number" placeholder="번호" onChange={changevalue} value={number}/>
        <input name="name" placeholder="이름" onChange={changevalue} value={name}/>

        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>

        <input name="grade" placeholder="학년" onChange={changevalue2} value={student.grade}/>
        <input name="class" placeholder="반" onChange={changevalue2} value={student.group}/>
        <input name="number" placeholder="번호" onChange={changevalue2} value={student.number}/>
        <input name="name" placeholder="이름" onChange={changevalue2} value={student.name}/>

        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>
    </>
}

export default App;