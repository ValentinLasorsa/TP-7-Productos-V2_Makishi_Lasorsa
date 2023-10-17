import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';
export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios
          .get("https://dummyjson.com/products/categories")
          .then((result) => {
            setCategorias(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    

    if(categorias.length !== 0){
        return (
            <>
                <CategoriaContext.Provider value={{ categorias }}>
                    {props.children}
                </CategoriaContext.Provider>
            </>
        );
    }
    
    };
    
export default CategoriaProvider;