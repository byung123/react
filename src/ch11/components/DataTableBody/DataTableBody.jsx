import { useEffect, useRef, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting}) {

    //useEffect()에서 어차피 전부 체크 해제 될 것이라 빈 배열로 만듦 
    const [ viewProducts, setViewProducts ] = useState([]);
    const [ checkedAll, setCheckedAll ] = useState(false);

    useEffect(() => {
        if(mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [products, mode])

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) {
            setCheckedAll(false);
        } else {
            setCheckedAll(true);
        }
    }, [viewProducts])

    useEffect(() => {
        if(isDeleting) {
            setProducts([ ...viewProducts
                .filter(viewProducts => viewProducts.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                }) 
            ]);
            setMode(0);
            setDeleting(false);
            }
    }, [isDeleting])

    const resetViewProducts = () => {
        // 전부 반복 돌려서 체크를 false로 바꾸기
        setViewProducts([ ...products.map(product => ({ ...product, isChecked: false}))])
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({ ...product, isChecked: true})) ]);
            } else {
                resetViewProducts();
            }
            return !checked
        });
    }
    
    const handleCheckedChange = (e) => {
        if(mode === 2) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                }) ]
            });
        }

        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                }) ]
            });
        }
    }

    return (  
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked} 
                                        onChange={handleCheckedChange}
                                        value={product.id}
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;