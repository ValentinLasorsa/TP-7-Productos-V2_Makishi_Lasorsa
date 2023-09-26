import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Card from 'react-bootstrap/Card';
import PropTypes  from 'prop-types';
export default function Producto(props) {
    return (
        <Card className='producto' style={{ width: "18rem" }} key={props.id}>
            {props.imagen == null ? <h1>No hay imagen</h1> : <Card.Img variant="top" src={props.imagen} style={{ height: "150px" }} />}
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text className='precios'>
                    <h1 className='precioConDescuento'>{props.precio}$</h1>
                    <h1>&nbsp;{props.calcularDescuento(props.producto)}$</h1>
                </Card.Text>
                <Link to={'/Detalle/' + props.id} className="btn btn-primary boton">Ver Mas</Link>
            </Card.Body>
        </Card>
    )
}

Producto.propTypes = {
    id: PropTypes.number,
    imagen: PropTypes.string,
    titulo: PropTypes.string,
    precio: PropTypes.number,
    calcularDescuento: PropTypes.func,
    producto: PropTypes.object,
}