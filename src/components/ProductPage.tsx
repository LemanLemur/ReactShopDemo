import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from '../assets/icons/ArrowLeft';
import { backToHomePage } from '../redux/actions/display';
import CartIcon from "../assets/icons/Cart";
import { addProductToCart } from '../redux/actions/cart';

interface State {
    display: Display;
    cart: Cart;
}

interface Display {
    product: Product;
}

interface Cart {
    products: Product[];
}

interface Product {
    id: number,
    img: string,
    name: string,
    price: number;
}

function ProductPage() {
    const product = useSelector((state: State) => state.display.product);
    const cart = useSelector((state: State) => state.cart.products);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    function handleBackToHomePage() {
        dispatch(backToHomePage())
    }

    function handleAddToCart(product: Product) {
        dispatch(addProductToCart(cart,product,quantity))
    }

    function handleChangeQuantity(e: any) {
        setQuantity(e.target.value)
    }

    return (
        <div id="product-page">
            <div onClick={() => handleBackToHomePage()}><ArrowLeft className="icon primary-text" /></div>
            <div className='product-desc'>
                <img src={product.img} />
                <div className='desc-info'>
                    <h1>{product.name}</h1>
                    <div className='price'>{parseFloat(String(product.price)).toFixed(2)} zł</div>
                    <span className='flex-row'>
                        <input onChange={(e) => handleChangeQuantity(e)} type="number" value={quantity} />
                        <button onClick={() => handleAddToCart(product)}><CartIcon className="icon" />
                            <span>&nbsp; dodaj do koszyka</span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
