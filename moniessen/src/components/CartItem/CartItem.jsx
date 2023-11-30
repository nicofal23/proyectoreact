import React from 'react';

const CartItem = ({ id, nombre, precio, cantidad, img }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt={nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">ID: {id}</p>
                        <p className="card-text">Cantidad: {cantidad}</p>
                        <p className="card-text">Precio: ${precio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
