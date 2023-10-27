import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ImagenLogo from './components/ImagenLogo';


const App = () => {
    return (
      <>
        <header>
            <ImagenLogo />
            <NavBar/>
            <ItemListContainer/>
        </header>
        <main>
           
        </main>
        </>
    );
}

export default App;
