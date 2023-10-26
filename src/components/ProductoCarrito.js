import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";


function ProductoCarrito({producto,url}){
  const {eliminarProducto} = useContext(CarritoContext)
  console.log("producto: " + producto)
  console.log("Idproducto: " + producto.id + " Cant Prod: " + producto.cant)

  const eliminar = (e) => {
      eliminarProducto(producto);
      e.preventDefault();
  }

  return (
    <tr>
      <td>
        <div className="cart-anchor-image">
            <Link to={url}>
              <img src={producto.images[0]} alt="Product"/>
              <h6>{producto.title}</h6>
            </Link>
        </div>
      </td>
      <td>
        <div className="cart-price">
              ${(producto.price- (producto.price*producto.discountPercentage)/100).toFixed(2)} 
        </div>
      </td>
      <td>
        <div className="cart-quantity">
          <div className="quantity">
            <p>{producto.cant}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="action-wrapper">
            <button className="button button-outline-secondary fas fa-trash" onClick={(e) => eliminar(e)}></button>
        </div>
      </td>
    </tr>
    );
};

export default ProductoCarrito