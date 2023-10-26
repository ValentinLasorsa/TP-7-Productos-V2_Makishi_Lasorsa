//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contacto from './screens/Contacto'
import Header from './screens/Header'
import Persona from "./screens/Persona";
import Datos from "./screens/Datos";
import Productos from "./screens/Producto";
import Carrito from "./screens/Carrito";
import Error from "./screens/Error";
import CarritoProvider from "./context/carritoContext";
import ProductoProvider from "./context/productoContext";
//import Producto from "./Components/Producto";
import CategoriaProvider from "./context/categoriaContext";
import DetalleProducto from "./screens/DetalleProducto";

const App = () => {
 return (
   <>
   <ProductoProvider>
    <CarritoProvider>
      <CategoriaProvider>
          <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Header />}>
                      <Route index element={<Home />}></Route>
                      <Route path="/productos" element={<Productos/>}></Route>
                      <Route path="/productos/:productoId" element={<DetalleProducto/>}></Route>
                      <Route path="/quienes-somos" element={<Datos/>}></Route>
                      <Route path="/quienes-somos/:personaId" element={<Persona/>}></Route>
                      <Route path="/contacto" element={<Contacto />}></Route>
                      <Route path="/carrito" element={<Carrito />}></Route>
                      <Route path="*" element={<Error />}></Route>
                  </Route>
            </Routes>
          </BrowserRouter>
        </CategoriaProvider>
      </CarritoProvider>
    </ProductoProvider>
   </>
 );
};

export default App;