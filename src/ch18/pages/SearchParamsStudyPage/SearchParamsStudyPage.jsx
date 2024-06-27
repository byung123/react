import React from 'react';
import { FaColonSign } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudyPage(props) {
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    // console.log(searchParams.values().next());
    console.log(searchParams.get("a"));   // a값 하나만 불러옴
    console.log(searchParams.get("b"));  
    // console.log(searchParams.getAll("a")); // 뒤의 a 값들 전부 불러옴
    // setSearchParams({...searchParams, c:30});

    const handleClick = () => {
        const keys = searchParams.keys();
        let newParams = {

        }
        for(let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    return (
        
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudyPage;