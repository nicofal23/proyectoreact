import styles from '../ItemDetail/ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCoun';

const ItemDetail = ({ id, nombre, img, precio, stock, categoria, descripcion }) => {
    return (
        <div className={styles.divcard}>
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className={styles.ItemImg} />
            </picture>
            <section>
                <p className={styles.Info}>
                    Categoria:{categoria}
                </p>
                <p className={styles.Info}>
                    Descripcion: {descripcion}
                </p>
                <p className={styles.Info}>
                    Precio: {precio}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <ItemCount inicial={1} stock={stock} onAdd={() => console.log('cantidad agregada')} />
            </footer>
        </article>
        </div>
    );
};

export default ItemDetail;