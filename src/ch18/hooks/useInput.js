import { useState } from "react";

// hook 함수는 use를 무조건 사용
export function useInput(defaultValue, length) {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = (e) => {
        if(e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }

    return {
        value,
        setValue,
        onChange
        // "value": value,  // 코드와 같음
        // "setValue": setValue,
        // "onChange": onChange
    }
}