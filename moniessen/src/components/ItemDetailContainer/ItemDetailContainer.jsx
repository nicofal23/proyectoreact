import { useState ,useEffect} from "react";
import getProductosById from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import style from '../ItemDetailContainer/ItemDetailContainer.module.css'
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getProductosById('1')
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
},[])

    return(
    <div className={style.estilocontenedor}>    
        <div className={style.ItemDetailContainer}>
            <ItemDetail {...productos}/>
        </div>
    </div>
    )

}

export default ItemDetailContainer