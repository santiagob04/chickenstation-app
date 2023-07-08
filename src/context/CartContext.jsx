import React, { createContext, useState } from 'react';

// Crea el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agrega un producto al carrito
  const addToCart = (product,quantity) => {
    setCartItems((prevItems) => [...prevItems, product]);
   
  };

  // Remueve un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );

  };
// contabiliza los productos que hay en el carrito
  const handleNumberOfItems = () => {
    const total = cartItems.length;
    return total;
  };

  // Limpia el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Valor proporcionado por el contexto
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getNumberOfItems: handleNumberOfItems,
    clearCart,
  };

  // Renderiza el proveedor del contexto y pasa el valor
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
