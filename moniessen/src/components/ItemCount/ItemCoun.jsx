import React, { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="contador">
      <div className="control">
        <button className="boton" onClick={quitar}>-</button>
        <h4 className="numero">{cantidad}</h4>
        <button className="boton" onClick={incrementar}>+</button>
      </div>
      <div>
        <button
          className="boton"
          onClick={() => onAdd(cantidad)}
          disabled={stock === 0} // Usar 'stock === 0' en lugar de '!stock'
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;