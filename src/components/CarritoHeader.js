import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";

const CarritoHeader = () => {
    const{cantProductos,precioTot} = useContext(CarritoContext)
    
    return (
        <Link id="mini-cart-trigger" to="/cart">
            <i className="ion ion-md-basket"></i>
            <span className="item-counter">{cantProductos}</span>
            <span className="item-price"> ${precioTot.toFixed(2)}</span>
        </Link>
    );
};

export default CarritoHeader