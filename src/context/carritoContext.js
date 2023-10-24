import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const initialCarrito = localStorage.getItem("productos") ? JSON.parse(localStorage.getItem("productos")) : [];
    
    const [precioTot, setPrecioTot] = useState(0)
    const [cantProductos, setCantProductos] = useState(0);
    const [productos, setProductos] = useState(initialCarrito);

    function agregarProducto(producto) {

        console.log("idProducto: " + producto.id)
        
        const index = productos.findIndex((p) => p.id === producto.id);
        //console.log(index)


        if (index < 0) {
            //creas uno nuevo
            producto.cant = 1;
            producto.total = (producto.cant * (producto.price - (producto.price * producto.discountPercentage) / 100));
            setProductos([
                ...productos,
                producto,
            ])
        } else {
            //actualizas en la posicion index
            let newproductos = [...productos];
            //console.log("New" + newproductos)

            //newproductos[productos.length].cant = producto.cant;
            //newproductos[productos.length].total; 
            console.log(index)
            newproductos[index].cant = newproductos[index].cant + 1;
            newproductos[index].total = (newproductos[index].cant * (newproductos[index].price - (newproductos[index].price * newproductos[index].discountPercentage) / 100));

            console.log("hola", newproductos)
            setProductos(newproductos);
        }
    }

    function eliminarProducto(producto) {

        console.log("idProducto: " + producto.id)
        //console.log("Productos: " + JSON.stringify(productos, null, 2))
        //  console.log("idProducto: "+ newproductos.id)
        const index = productos.findIndex((p) => p.id === producto.id);
        console.log("index: " + index)
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
                // Actualizar las variables temporales con los cálculos
                totalPrecioTot += prod.total;
                totalCantProductos += prod.cant;
            });

            // Actualizar los estados con los valores calculados
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