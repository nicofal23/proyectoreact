import {img} from '../NavBar/NavBar.module.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

 const CartWidget = () => {
  const { cart } =  useContext(CartContext) 
  const totalCantidad = cart.length;

    return (
      <Link to="/cart" className='CarWiget' style={{display: totalCantidad > 0 ?'block' : 'none'}}>
        <img src="../../src/assets/img/carrito.png" alt="" className={img}/>
        {totalCantidad}
      </Link>
    );
  };
  
  export default CartWidget