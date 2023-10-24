//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contacto from './screens/Contacto'
import Header from './screens/Header'
import Persona from "./screens/Persona";
import Nosotros from "./screens/Nosotros";
import Productos from "./screens/Productos";
import Cart from "./screens/Cart";
import Error from "./screens/Error";
import CarritoProvider from "./context/carritoContext";
import ProductoProvider from "./context/ProductoContext";
//import Producto from "./Components/Producto";
import CategoriaProvider from "./context/categoriaContext";
import DetalleProducto from "./screens/DetalleProducto";

const App = () => {
 return (
   <>
   <ProductoProvider>
    <CarritoProvider>
      <CategoriesProvider>
          <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Header />}>
                      <Route index element={<Home />}></Route>
                      <Route path="/productos" element={<Productos/>}></Route>
                      <Route path="/productos/:productoId" element={<DetalleProducto/>}></Route>
                      <Route path="/quienes-somos" element={<Nosotros/>}></Route>
                      <Route path="/quienes-somos/:personaId" element={<Persona/>}></Route>
                      <Route path="/contacto" element={<Contacto />}></Route>
                      <Route path="/cart" element={<Cart />}></Route>
                      <Route path="*" element={<Error404 />}></Route>
                  </Route>
            </Routes>
          </BrowserRouter>
        </CategoriesProvider>
      </CarritoProvider>
    </ProductoProvider>
   </>
 );
};

export default App;