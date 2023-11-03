import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/NavBar/NavBar.module.css'
import './app.css';
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListCointainer/ItemListContainer';
import ImagenLogo from './components/Logo/ImagenLogo';
import ItemCount from './components/ItemCount/ItemCoun';

const App = () => {
    return (
      <>
        <header>
            <ImagenLogo />
            <NavBar/>
            <ItemListContainer greeting= {"Bienvenidos!"} />
        </header>
        <main>
            <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log('cantidad agregada',cantidad)}/>
        </main>
        </>
    );
}

export default App;
