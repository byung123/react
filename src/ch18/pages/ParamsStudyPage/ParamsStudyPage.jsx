/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import * as s from './style';

function ParamsStudyPage(props) {

    const params = useParams();
    console.log(params.name);

    return (
        <div>
            
        </div>
    );
}

export default ParamsStudyPage;