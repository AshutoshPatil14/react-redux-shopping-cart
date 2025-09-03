import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <div id="root">
      <h1>Shopping Cart with Redux</h1>
      <div className="container">
        <div className="products">
          <ProductList />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
