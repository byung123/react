/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from './style';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import HomePage from '../../pages/HomePage/HomePage';
import ParamsStudyPage from '../../pages/ParamsStudyPage/ParamsStudyPage';
import SearchParamsStudyPage from '../../pages/SearchParamsStudyPage/SearchParamsStudyPage';
import CustomHookPage from '../../pages/CustomHookPage/CustomHookPage';
import MemorizationPage from '../../pages/MemorizationPage/MemorizationPage';

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/routestudy/*" element={<RouteStudyPage />}/>
                <Route path='/params/:name' element={<ParamsStudyPage />} />
                <Route path='/searchparams' element={<SearchParamsStudyPage />} />
                <Route path='/customhook/:id' element={<CustomHookPage />} />
                <Route path='/memorization' element={<MemorizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;