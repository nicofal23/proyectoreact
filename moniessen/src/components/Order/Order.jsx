import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Order = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>Orden</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <h2>{item.item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.item.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default Order;