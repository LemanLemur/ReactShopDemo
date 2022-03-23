import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart, editProductQuantity } from "../redux/actions/cart";
import "../App.css";
import Trash from '../assets/icons/Trash';
import Checkout from './Chceckout';

interface Props {
  open: boolean
}

interface State {
  cart: Cart
}

interface Cart {
  isEmpty: boolean,
  products: Product[];
}

interface Product {
  id: number,
  img: string,
  name: string,
  price: number;
  quantity: number;
  shortId: string;
}

function CartModal(props: Props) {
  const dispatch = useDispatch();
  const cart = useSelector((state: State) => state.cart.products);
  const [totalPrice, setTotalPrice] = useState("0");

  useEffect(() => {
    var modal = document.getElementById("cart-modal");
    if (props.open && modal != null) {
      modal.classList.remove("hide")
    } else if(modal != null) {
      modal.classList.add("hide")
    }
  }, [props.open])

  useEffect(() => {
    let sum = 0;
    cart.map((el) => {
      sum += el.price * el.quantity;
    })

    let totalSum = parseFloat(String(sum)).toFixed(2)

    setTotalPrice(totalSum);
  }, [cart])

  function handleRemoveFromCart(shortId: string) {
    dispatch(deleteProductFromCart(cart, shortId));
  }

  function handleChangeQuantity(e: any, shortId: string) {
    dispatch(editProductQuantity(cart, e.target.value, shortId));
  }

  return (
    <div id="cart-modal" className="hide">
      {cart.map((el: Product) =>
        <div className='product-modal-root'>
          <div>{el.name}</div>
          <input onChange={(e) => handleChangeQuantity(e, el.shortId)} type="number" value={el.quantity}/>
          <div className='al-r'>{parseFloat(String(el.price)).toFixed(2)} zł</div>
          <div className='al-r cart-trash'><span onClick={() => handleRemoveFromCart(el.shortId)}><Trash/></span></div>
        </div>
      )}
      <div className='product-modal-summary'><span>razem:</span><span className='product-price'>{totalPrice} zł</span></div>
      <Checkout></Checkout>
    </div>
  );
}

export default CartModal;
