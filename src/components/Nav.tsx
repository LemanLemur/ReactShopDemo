import React from 'react';
import '../App.css';
import Cart from "./Cart"

function Nav() {
  return (
    <div className="nav-root">
        <div className='nav-logo'>MyShop 🛒</div>
        <div className='nav-cart'><Cart/></div>
    </div>
  );
}

export default Nav;
