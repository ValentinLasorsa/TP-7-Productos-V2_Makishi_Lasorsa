import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductoHome from "../components/ProductoHome";


const Home = () => {
  const [productos, setProductos] = useState([]);
  const FILTRO = "smartphones"


  useEffect(() => {
    const getProductos = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/category/" + FILTRO);
            const listaProductos = response.data.products;
            //listaProductos
            setProductos(listaProductos); 
        } catch (error) {
        console.log('Error:', error);
        }
    };
    getProductos();      
  }, []);

  if(productos.length === 0){
    return(
      <div>Loading...</div>
    )
  }else{
    return (
        <>
          <div className="banner-layer">
            <div className="container">
              <div className="image-banner">
                  <Link to="/shop-v1-root-category" className="mx-auto banner-hover effect-dark-opacity">
                      <img className="img-fluid" src="images/banners/bannerlayer-1.jpg" alt="Winter Season Banner"/>
                  </Link>
              </div>
            </div>
          </div>
          <div className="container">
              <div className="sec-maker-header text-center">
                  <h3 className="sec-maker-h3">Smartphones</h3>
                  <ul className="nav tab-nav-style-1-a justify-content-center">
                      <li className="nav-item">
                          <Link className="nav-link" data-toggle="tab" to="#men-best-selling-products">Best Selling</Link>
                      </li>
                  </ul>
              </div>
              <div className="row">
              {productos.slice(0,4).map((producto, index) =>
                  <div className="col-3" key={index}>
                      <Link
                          key={producto.id}
                          //className="product"
                          to={"/productos/" + producto.id}
                          data-category="smartphones"
                        >
                        <ProductoHome producto = {producto} url={'/productos/'+ producto.id}/>              
                      </Link>    
                </div>               
              )}
              </div>
            </div>
      
        </>
      );
  };
}

export default Home