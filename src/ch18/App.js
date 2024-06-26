
import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainBody from './components/MainBody/MainBody';

function App(props) {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);

    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader setMainSidebarShow={setMainSidebarShow}/>
                <MainBody />
                <MainSidebar 
                    isMainSidebarShow={isMainSidebarShow}
                    setMainSidebarShow={setMainSidebarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;
