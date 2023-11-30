import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [], 
});


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    console.log(cart);

    const addItem = (item, nombre, precio, cantidad, img ) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { item, nombre, precio, cantidad, img }]);
        } else {
            console.error('El item ya existe en el carrito');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }   

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}