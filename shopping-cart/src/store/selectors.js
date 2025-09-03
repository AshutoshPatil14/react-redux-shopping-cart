import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.cart.products;
export const selectCart = (state) => state.cart.cart;

export const selectCartTotal = createSelector(
  [selectCart],
  (cart) => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart) => cart.reduce((count, item) => count + item.quantity, 0)
);