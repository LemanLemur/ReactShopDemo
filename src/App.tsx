import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ProductQuickView from './components/ProductPage';
import { useSelector } from "react-redux";

interface State{
  display: Display;
}

interface Display{
  displayProductPage: boolean;
}

function App() {
  const display = useSelector((state: State) => state.display.displayProductPage);

  return (
    <div className="App">
      <Nav></Nav>
      {display? <ProductQuickView></ProductQuickView> :
      <Home></Home>}
    </div>
  );
}

export default App;
