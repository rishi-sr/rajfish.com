import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const [CartOpen, setCartOpen] = useState(false);

  // 🧮 Add to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.name === item.name);
      if (existing) {
        return prevCart.map(p =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price }
            : p
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, total: item.price }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart(prevCart => {
      return prevCart
        .map(p =>
          p.name === item.name
            ? { ...p, quantity: p.quantity - 1, total: (p.quantity - 1) * p.price }
            : p
        )
        .filter(p => p.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, CartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
