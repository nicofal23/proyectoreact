import {Route, Routes , BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import ItemListContainer from '../components/ItemListCointainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
export default function RouterPrincipal() {
    return (
      <>
        <BrowserRouter>
        <Router>
            <NavBar/>
        </Router>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
      </>
    );
  }