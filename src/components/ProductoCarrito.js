import { propTypes } from 'react-bootstrap/esm/Image'
import '../Styles/Carrito.css'
import PropTypes from 'prop-types'
export default function ProductoCarrito(ObjetoCarrito) {
    return (
        <div className="containerCarrito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={ObjetoCarrito.ObjetoCarrito.thumbnail} className="imagenProducto" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-7 textoCarrito'>
                    <h2>{ObjetoCarrito.ObjetoCarrito.title}</h2>
                </div>
                <div className='col-md-3 textoCarrito'>
                    <h2>{ObjetoCarrito.ObjetoCarrito.price}$</h2>
                </div>
            </div>
            
        </div>
    )
}

ProductoCarrito.propTypes = {
    ObjetoCarrito: PropTypes.object
}