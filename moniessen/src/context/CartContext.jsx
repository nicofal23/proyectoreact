import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const existingItemIndex = cart.findIndex((prod) => prod.item.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].cantidad += cantidad;
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, cantidad: cantidad }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((acc, curr) => acc + (curr.item.precio * curr.cantidad), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total}}>
      {children}
    </CartContext.Provider>
  );
};
