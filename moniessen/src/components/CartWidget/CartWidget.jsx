import {button,img} from '../NavBar/NavBar.module.css'
 
 const CartWidget = () => {
    const itemCount = 5; 
    return (
      <div className="cart-widget">
        <button className={button} ><img src="../../src/assets/img/carrito.png" alt="" className={img} /></button>
        <span className="badge bg-primary">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget