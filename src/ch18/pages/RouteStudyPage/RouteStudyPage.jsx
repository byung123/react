/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import * as s from './style';
import RouteStudySubPage1 from '../RouteStudySubPage1/RouteStudySubPage1';

function RouteStudyPage(props) {
    return (
        <MainContainer>
            <div>
                <h1>라우트 수업</h1>
                <ul>
                    {/* 상대경로로도 표현이 가능하지만, 페이지 수가 2개 이상에 같은 종류의 페이지를
                    호출할 경우 충돌이 발생할 수 있기 때문에 
                    절대경로(3번째 방법)방식으로 사용하는 것을 권장 */}
                    <Link to={'page1'}><li>1번 페이지-1</li></Link>
                    <Link to={'./page1'}><li>1번 페이지-2</li></Link>
                    <Link to={'/routestudy/page1'}><li>1번 페이지-3</li></Link>
                    <Link to={'/routestudy/page2'}><li>2번 페이지</li></Link>
                    <Link to={'/routestudy/page3'}><li>3번 페이지</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path="/page1/*" element={<RouteStudySubPage1 />} />
                        <Route path="/page2" element={<div>페이지2</div>} />
                        <Route path="/page3" element={<div>페이지3</div>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudyPage;