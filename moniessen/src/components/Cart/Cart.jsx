// cart.jsx
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2 className="text-center">No hay productos en el carrito</h2>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => <CartItem key={item.item.id} item={item} />)}
      <h3>Total: $ {cart.reduce((acc, curr) => acc + curr.item.precio * curr.cantidad, 0)}</h3>
      <button onClick={() => clearCart()}>Vaciar carrito</button>
      <Link to='/checkout' className='btn btn-primary'>Checkout</Link>
    </div>
  );
};

export default Cart;

