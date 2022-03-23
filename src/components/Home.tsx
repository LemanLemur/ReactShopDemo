import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ChevronLeft from '../assets/icons/ChevronLeft';
import ChevronRight from '../assets/icons/ChevronRight';
import ProductCard from "./ProductCard";

interface Products {
    products: [];
}

interface Product {
    id: number,
    img: string,
    name: string,
    price: number;
}

function App() {
    const products = useSelector((state: Products) => state.products);
    const [productToDisplay, setProductToDisplay] = useState([]);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([0]);

    useEffect(() => {
        if (products.length > 0) {
            setProductToDisplay(products.slice(page * 3, page + 3));
            let tmp_pag = Math.floor(products.length / 3);
            let arr = [];
            for (let i = 0; i < tmp_pag; i++) {
                arr.push(i);
            }
            setPages(arr);
        }
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setProductToDisplay(products.slice(page == 0 ? 0 : (page * 3), page == 0 ? page + 3 : (page * 3) + 3));
        }
    }, [page])

    function handleChangePage(el: number, chevron = "") {
        if(chevron === ""){
            setPage(el);
        }else{
            if(chevron == "left" && page > 0){
                console.log(page)
                setPage(page - 1);
            }else if(chevron == "right" && page + 1 <= pages[pages.length-1]){
                setPage(page + 1);
            }
        }
    }

    return (
        <>
            <div className='home-root'>
                <div className="home-grid">
                    {productToDisplay.map((el: Product) => <ProductCard data={el}></ProductCard>)}
                </div>
            </div>
            <div className='pagintion'>
                <span className='pag-left' onClick={() => handleChangePage(0, "left")}><ChevronLeft className="icon" /></span>
                {pages.map((el) => <div onClick={() => handleChangePage(el)}>{ page == el? <b>{el + 1}</b> : <div>{el + 1}</div>}</div>)}
                <span className='pag-right' onClick={() => handleChangePage(0, "right")}><ChevronRight className="icon" /></span>
            </div>
        </>
    );
}

export default App;