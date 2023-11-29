import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from "../components/ItemListCointainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";
import { CartProvider } from "../context/CartContext";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
