import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../redux/actions/cart";

function Checkout() {
    const dispatch = useDispatch();

  function handleClickCheckout(){
    dispatch(removeProductFromCart());
  }

  return (
    <>
        <button onClick={() => handleClickCheckout()} className='checkout-btn'>do kasy</button>
    </>
  );
}

export default Checkout;
