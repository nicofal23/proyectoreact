import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListCointainer/ItemListContainer';
import ImagenLogo from './components/Logo/ImagenLogo';


const App = () => {
    return (
      <>
        <header>
            <ImagenLogo />
            <NavBar/>
            <ItemListContainer greeting= {"Bienvenidos!"} />
        </header>
        <main>
           
        </main>
        </>
    );
}

export default App;
