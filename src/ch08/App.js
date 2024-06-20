import { useRef } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    // const aRef = useRef();
    // const bRef = useRef();
    // const cRef = useRef();
    
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a} />
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b} />
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c} />
</>
}

export default App;