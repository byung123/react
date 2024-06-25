import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

    const emptyData = {
        src: "",
        name: "",
        email: ""
    }

    const [ inputData, setInputData ] = useState({ ...emptyData });
    const [ imgSrc, setImgSrc ] = useState("");

    const loadImg = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();

        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }
            fileReader.readAsDataURL(file)
        }
    }

    const handleSaveClick = (e) => {
        Swal.fire({
            title: "사용자 프로필",
            text: "사용자 프로필 정보를 저장하시겠습니까",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                setInputData(inputData => ({
                    ...inputData,
                    [e.target.name]: e.target.value
                    })
                )
                localStorage.setItem("inputData", JSON.stringify(inputData));
            }
        });
    }

    return (
        <div className="frame">
            <div className="container">
                <img src={imgSrc} onClick={loadImg} alt="" className="inputbox img"/>
                <input 
                    type = "text" 
                    name="name"
                    className="inputbox" 
                    placeholder="이름"
                />
                <input 
                    type = "text"
                    name="email" 
                    className="inputbox" 
                    placeholder="이메일"
                />
                <button onClick={handleSaveClick} className="inputbox button">저장</button>
            </div>
        </div>
    )
}

export default App;