import { useState ,useEffect} from "react";
import { getProductosByCategory, getProductos ,getProductosById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import style from '../ItemDetailContainer/ItemDetailContainer.module.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProductosById(itemId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
},[itemId])

    return(
    <div className={style.estilocontenedor}>    
        <div className={style.ItemDetailContainer}>
            <ItemDetail {...productos}/>
        </div>
    </div>
    )

}

export default ItemDetailContainer