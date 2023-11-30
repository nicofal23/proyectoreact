import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [], 
});


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    console.log(cart);

    const addItem = (item, nombre, precio, cantidad, img) => {
        const existingItem = cart.find(prod => prod.item.id === item.id);
        if (existingItem) {
            existingItem.cantidad += cantidad;
        } else {
            setCart(prev => [...prev, { item, nombre, precio, cantidad, img }]);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.item.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }   

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}