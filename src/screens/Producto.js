import axios from 'axios'
import { useState } from 'react';
import '../Styles/Productos.css'
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import Producto from '../Components/Producto';
export default function Productos() {
    const [textoABuscar, setTextoABuscar] = useState('');
    const [productos, setProductos] = useState([])
    const [isLoading, setLoading] = useState(true)

    const handleKeyUp = (e) => {
        setTextoABuscar(e.target.value);
    }
    const calcularDescuento = (producto)  => {
        let precio = producto.price
        let discount = producto.discountPercentage
        const precioConDescuento = (Math.round(precio - (precio * discount/100)))
        return precioConDescuento
    }
    const BuscarProducto = () => {
        axios.get(`https://dummyjson.com/products/search?q=${textoABuscar}`)
            .then(function (response) {
                const listaProductos = response.data.products
                let productosArray = []
                listaProductos.forEach(element => {
                    productosArray.push(element)
                });
                setProductos(productosArray)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className='box3'>
            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                <h1 className="mb-5">Busque el producto que necesite!</h1>
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" onKeyUp={handleKeyUp} type="email" placeholder="Producto..." />
                                    </div>
                                    <div className="col-auto"><button className={'btn btn-primary btn-lg ' + (textoABuscar === '' ? 'disabled' : '')} onClick={BuscarProducto} type="submit">Buscar</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className='container'>
                <Row md={4} style={{marginTop: 10}}>
                    {isLoading ? null : (productos.map((element) => {
                        return (
                            <Producto titulo={element.title} id={element.id} imagen={element.thumbnail} precio={element.price} producto={element} calcularDescuento={calcularDescuento}></Producto>
                        )
                    }))}
                </Row>
            </div>


            <div id="detalles">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="tituloModal">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p id="descripcionModal"></p>
                                <p id="precioModal"></p>
                                <p id="ratingModal"></p>
                                <p id="stockModal"></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}