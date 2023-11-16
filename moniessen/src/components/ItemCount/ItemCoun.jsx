import React, { useState } from "react";
import styles from "../ItemCount/ItemCoun.module.css";

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
    <div className={styles.contador}>
      <div className={styles.control}>
        <button className={styles.boton} onClick={quitar}>
          -
        </button>
        <h4 className={styles.numero}>{cantidad}</h4>
        <button className={styles.boton} onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button
          className={styles.boton}
          onClick={() => onAdd && onAdd(cantidad)}
          disabled={stock < 1}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
