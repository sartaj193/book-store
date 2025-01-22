import React from 'react';

import { useCart } from './Cartlogic';
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

