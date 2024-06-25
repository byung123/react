import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductId }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    useEffect(() => {
        // 비구조로 요소를 꺼내옴 - 배열상태를 저장시키면 안되기 때문
        const [ product ] = products.filter(product => product.id === editProductId)
        setInputData(!product ? { ...emptyProduct } : { ...product }) 

    }, [editProductId])

    const handleInputChange = (e) => {
        // 객체를 리턴하고 싶으면 괄호를 하나 더 추가하면 됨
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = 
                    productIds.length === 0 
                        ? 0 
                        : Math.max.apply(null, productIds);

                return [ ...products, { ...inputData, id: maxId + 1} ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false, // 확인버튼 없음
                timer: 500 // 0.5초
            });
            resetMode();
        }   
        if(mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setProducts(products => [
                        ...products.map(product => {
                            if(product.id === editProductId) {
                                const { id, ...rest } = inputData;
                                return {
                                    ...product,
                                    ...rest
                                }
                            }
                            return product;
                         })
                    ]);
                    resetMode();
                }
            });
        }
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct })
    }

    return (  
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.productName}
                    autoFocus 
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color"
                    value={inputData.color}
                    placeholder="색상"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div> 
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCancelClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;