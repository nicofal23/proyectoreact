import React, { useState, useEffect } from 'react';
import { getProductos ,getProductosByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import style from '../ItemListCointainer/ItemListContainer.module.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductosByCategory : getProductos 

    asyncFunc(categoryId)
      .then(response => {
           setProductos(response)
      })
      .catch(error=> {
        console.error(error)
      })
    },[categoryId])


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
