import { useState } from "react";

function App() {

    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        // fileElement.setAttribute("multiple", true); // 파일 여러개 선택 가능하게 만듦, 기본값 false
        fileElement.click();
        // console.log(fileElement.files); // 파일리스트

        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            fileReader.readAsDataURL(file);
        }
    }

    return (
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={false} />
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    )
}

export default App;