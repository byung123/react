/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from 'react-router-dom';
import * as s from './style';
import MainContainer from '../../components/MainContainer/MainContainer';

function RouteStudySubPage1(props) {
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={'/routestudy/page1/name'}><li>name</li></Link>
                    <Link to={'/routestudy/page1/age'}><li>age</li></Link>
                    <Link to={'/routestudy/page1/address'}><li>address</li></Link>
                </ul>
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