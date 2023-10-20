import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
import NavBar from'./components/NavBar.js';

const App = () => {
    AOS.init({ duration: 1250 });

    return (
      <>
        <div>
            <header>
                <div>
                    <a href="./index.html"><img src="./assets/img/moniessen.png" alt="MoniEssen" className="moniessen" /></a>
                </div>
                <div>
                <NavBar/>
                </div>
            </header>
            <main>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <a href="https://api.whatsapp.com/send?phone=+543413448143&text=%C2%A1Hola+Moni+%21+estoy+interesado%2Fa+en+comprar+el+jarro+quick+%C2%BFme+pasar%C3%ADas+informaci%C3%B3n%3F+%F0%9F%98%8A"><img src="./assets/img/carusel1.jpg" className="d-block w-100" alt="..." /></a>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <a href="https://api.whatsapp.com/send?phone=+543413448143&text=%C2%A1Hola+Moni+%21+estoy+interesado%2Fa+en+comprar+el+jarro+quick+%C2%BFme+pasar%C3%ADas+informaci%C3%B3n%3F+%F0%9F%98%8A"><img src="./assets/img/carusel2.jpg" className="d-block w-100" alt="..." /></a>
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/img/carusel3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="contenedor">
                    <div className="titulo" data-aos="zoom-in">
                        <h1>Descubrí todo lo que podés hacer con tu Essen</h1>
                        <h3>La versatilidad de nuestros productos te acercan a una nueva experiencia en la cocina.</h3>
                    </div>
                    <div className="essen">
                        <div data-aos="zoom-in">
                            <img src="./assets/img/BOLWSACERO.png" alt="" />
                        </div>
                        <div className="texto">
                            <h2>¿Por qué elegir Essen?</h2>
                            <p>Con nuestros productos podés preparar <br /> miles de recetas y en cada preparación,<br /> gracias a la distribución homogénea del calor, <br />vas a <strong>ahorrar tiempo, consumo de gas y energía.</strong></p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </div>
        </>
    );
}

export default App;
