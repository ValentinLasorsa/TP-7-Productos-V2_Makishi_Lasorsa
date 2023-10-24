import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ProductoContext = createContext();

const ProductoProvider = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const getProductos = async () => {
          try {
              const response = await axios.get('https://dummyjson.com/products?');
              const listaProductos = response.data.products;
              setProductos(listaProductos); 
          } catch (error) {
          console.log('Error:', error);
          }
      };
      getProductos();      
    }, []);

    return (
        <>
            <ProductoContext.Provider value={{ productos }}>
                {props.children}
            </ProductoContext.Provider>
        </>
    );
}

export default ProductoProvider;