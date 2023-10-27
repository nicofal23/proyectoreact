
 
 const CartWidget = () => {
    const itemCount = 5; 
    return (
      <div className="cart-widget">
        <button><img src="./src/assets/carrito.png" alt=""/></button>
        <span className="badge bg-primary">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget