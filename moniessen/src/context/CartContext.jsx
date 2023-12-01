import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad, imgURL) => {
    const existingItemIndex = cart.findIndex((prod) => prod.item.id === item.id);
  
    if (existingItemIndex !== -1) {
      const newCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, cantidad, img }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    let x = 0;
    x = cart.reduce((acc, curr) => acc + curr.cantidad, 0); 
    console.log(x);
    return x;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
