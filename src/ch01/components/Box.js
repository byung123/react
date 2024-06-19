function Box({ name, isShow, children }) {
    const result = false && 10;   
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}        {/* null 이나 boolean 타입은 문자열로 인식하지 않는다*/}
        {true && "김준일"}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;