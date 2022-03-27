import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { displayProduct } from '../redux/actions/display';
import { addProductToCart } from "../redux/actions/cart"
import CartIcon from '../assets/icons/Cart';

interface State {
    cart: Cart
}

interface Cart {
    isEmpty: boolean,
    products: Product;
}

interface Product {
    id: number,
    img: string,
    name: string,
    price: number;
}

function ProductsCard(props: { data: Product }) {
    const cart = useSelector((state: State) => state.cart.products);
    const dispatch = useDispatch();

    function handleAddToCart(e: any, product: Product) {
        dispatch(addProductToCart(cart, product, 1));
        e.stopPropagation()
    }

    function handleDisplayProduct(product: Product) {
        dispatch(displayProduct(product))
    }

    return (
        <div onClick={() => handleDisplayProduct(props.data)} className="product-card">
            <div className='product-img'>
                <img src={props.data.img} />
            </div>
            <div className='product-footer'>
                <div className='product-name'>{props.data.name}</div>
                <div className='product-text'>
                    <div className='product-price'>{parseFloat(String(props.data.price)).toFixed(2)} zł</div>
                    <button onClick={(e) => handleAddToCart(e, props.data)}> <CartIcon className="icon" /></button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;

