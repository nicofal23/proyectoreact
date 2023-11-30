import React from 'react';

const CartItem = ({ item, id, nombre, precio, stock, img }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <h5 className="card-title">Producto: {item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <p className="card-text">Precio: $ {item.precio}</p>
                        <img src="${item.img}" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
