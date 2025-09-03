import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ productId: id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity}
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalAmount}</h3>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;