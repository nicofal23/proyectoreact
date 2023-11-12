import React, { useState, useEffect } from 'react';
import { getProductos } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import style from '../ItemListCointainer/ItemListContainer.module.css'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
    .then(response =>{
      setProductos(response)
    })
    .catch(error =>{
      console.error(error)
    })
  }, [] )



  return (
    <div className="container">
      <div className="row">
        <div className={style.col}>
          <h2 className="mt-5">{greeting}</h2>
          <ItemList productos={productos}/>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
