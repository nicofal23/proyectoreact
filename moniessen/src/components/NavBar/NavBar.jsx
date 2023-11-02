import CartWidget from '../CartWidget/CartWidget'
import {header,} from 'NavBar.modulo.css'
const NavBar = () => {
    return (
        <nav>
            {<div className="navbar navbar-expand-lg custom-navbar">
                        <div className="container-fluid">
                            <a className="navbar-brand d-none d-lg-none d-md-none" href="#"><img src="../public/assets/img/nav1.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" aria-current="page" href="./index.html">INICIO</a>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTOS
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Contemporánea Fuego</a></li>
                                        <li><a className="dropdown-item" href="#">Contemporánea Cherry</a></li>
                                        <li><a className="dropdown-item" href="./pages/cacerolasterra.html">Contemporánea Terra</a></li>
                                        <li><a className="dropdown-item" href="#">Contemporánea Aqua</a></li>
                                        <li><a className="dropdown-item" href="#">Nuit</a></li>
                                        <li><a className="dropdown-item" href="#">Complementos</a></li>
                                        <li><a className="dropdown-item" href="#">Ediciones Especiales</a></li>
                                        <li><a className="dropdown-item" href="./pages/bazar.html">Bazar Premium</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="./pages/productos.html">Todos los productos</a></li>
                                        <li><a className="dropdown-item" href="https://www.essen.com.ar/contenido/editor/File/essen-ciclo-7.pdf" target="_blank">Descargar Catalogo</a></li>
                                    </ul>
                                    <a className="nav-link" href="./pages/recetas.html">RECETAS</a>
                                    <a className="nav-link" href="./pages/contacto.html">CONTACTO</a>
                                </div>
                                <div id="carrito" class="carrito">
                                <CartWidget/>
                                </div>
                            </div>
                        </div>
                    </div>}
        </nav>
    );
}

export default NavBar;