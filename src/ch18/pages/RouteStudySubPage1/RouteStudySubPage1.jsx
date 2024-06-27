/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as s from './style';
import MainContainer from '../../components/MainContainer/MainContainer';

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));
    
    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com" => replace: false
        // window.location.replace("https://naver.com") => replace: true 
        // replace는 history를 안남겨서 뒤로가기를 누르면 초기 페이지로 이동함 
        // ex) 1page -> 2page -> 3page 하고 3page에서 뒤로가기 누르면 1page로 이동
    }

    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={'/routestudy/page1/name'}><li>name</li></Link>
                    <Link to={'/routestudy/page1/age'}><li>age</li></Link>
                    <Link to={'/routestudy/page1/address'}><li>address</li></Link>
                </ul>
                <button onClick={handleAgeClick}>나이</button>
                <div>
                    <Routes>
                        <Route path="/name" element={<h1>김준일</h1>} />
                        <Route path="/age" element={<h1>29</h1>} />
                        <Route path="/address" element={<h1>부산 동래구</h1>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage1;