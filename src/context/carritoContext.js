import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const initialCarrito = localStorage.getItem("productos") ? JSON.parse(localStorage.getItem("productos")) : [];
    
    const [precioTot, setPrecioTot] = useState(0)
    const [cantProductos, setCantProductos] = useState(0);
    const [productos, setProductos] = useState(initialCarrito);

    function agregarProducto(producto) {

        const index = productos.findIndex((p) => p.id === producto.id);
        if (index < 0) {
            producto.cant = 1;
            producto.total = (producto.cant * (producto.price - (producto.price * producto.discountPercentage) / 100));
            setProductos([
                ...productos,
                producto,
            ])
        } else {
            let newproductos = [...productos];
            console.log(index)
            newproductos[index].cant = newproductos[index].cant + 1;
            newproductos[index].total = (newproductos[index].cant * (newproductos[index].price - (newproductos[index].price * newproductos[index].discountPercentage) / 100));

            console.log("hola", newproductos)
            setProductos(newproductos);
        }
    }

    function eliminarProducto(producto) {

        const index = productos.findIndex((p) => p.id === producto.id);
        if (index < 0) {
            console.log("El producto no se encontró en el carrito.")
        }
        else{
            const newList = productos.filter((p) => p.id !== producto.id)
            console.log(newList)
            setProductos(newList) 
            setPrecioTot(precioTot-(producto.cant * (producto.cant * (producto.price - (producto.price * producto.discountPercentage) / 100))))
        }
    }

    useEffect(() => {
        localStorage.setItem("productos", JSON.stringify(productos))      
    }, [productos])

    useEffect(() => {
        if (productos.length !== 0) {
            let totalPrecioTot = 0;
            let totalCantProductos = 0;

            productos.forEach(function (prod) {
                totalPrecioTot += prod.total;
                totalCantProductos += prod.cant;
            });
            setPrecioTot(totalPrecioTot);
            setCantProductos(totalCantProductos);
        }
    }, [productos]);    

    return (
        <CarritoContext.Provider
            value={{
                cantProductos,
                precioTot,
                productos,
                agregarProducto,
                eliminarProducto
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;