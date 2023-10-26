
import { useContext, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filtro from "../components/Filtro";
import { ProductoContext } from "../context/productoContext";
import Producto from "../components/Producto";


const Productos = () => {
  const {productos} = useContext(ProductoContext)
  const [listadoProductos, setListadoproductos] = useState([]);
 
  const handleInput = (e) => {
    axios
    .get("https://dummyjson.com/products/search?q="+e.target.value.toLowerCase())
    .then((result) => {
      setListadoproductos(result.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleFilter = (e) => {
    axios
    .get("https://dummyjson.com/products/category/"+e.target.value.toLowerCase())
    .then((result) => {
      setListadoproductos(result.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(()=>{
    setListadoproductos(productos);
  },[productos])

if(productos.length === 0){
  return(
    <div>Loading...</div>
  )
}
else{
  return (
    <>
      <div className="page-style-a">
        <div className="container">
            <div className="page-intro">
                <h2>Detail</h2>
                <ul className="bread-crumb">
                    <li className="has-separator">
                        <i className="ion ion-md-home"></i>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="is-marked">
                        <Link to="#">Productos</Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="page-shop u-s-p-t-80">
          <div className="container">
            <div className="shop-intro">
              <h3>Men's Clothing</h3>
            </div>
              <div className="">
              <Filtro handleFilter={handleFilter} handleInput={handleInput}/>
              {listadoProductos.map((producto) =>
                <Link
                key={producto.id}
                //className="product"
                to={"/productos/" + producto.id}
                data-category="smartphones"
              >
              <Productos producto = {producto} url={'/productos/'+ producto.id}/>              
             </Link>                   
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Productos