import styles from '../CartWidget/CartWidget.module.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalCantidad = cart.length;

  return (
    <Link
  to="/cart"
  className='CartWidget'
  style={{
    display: totalCantidad > 0 ? 'block' : 'none',
    margin: '30px'  
  }}
>
  <img src="../../src/assets/img/carrito.png" alt="" className={styles.img} />
  {totalCantidad}
</Link>

  );
};

export default CartWidget;