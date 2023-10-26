import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CarritoContext } from "../context/carritoContext";
import { useContext } from "react";

const Producto = ({producto, url}) => {
    const {agregarProducto} =useContext(CarritoContext)
    return(
        <div className="row product-container list-style" key={producto.id}>
            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                <div className="item">
                    <div className="image-container">
                            <Link className="item-img-wrapper-link" to={url}>
                                <img className="img-fluid img-producto" src={producto.images[0]}/*"images/product/product@3x.jpg"*/ alt="Product"/>
                            </Link>
                        <div className="item-action-behaviors">
                            <Link className="item-quick-look" data-toggle="modal" to="#quick-view">Quick Look</Link>
                            <Link className="item-mail" to="javascript:void(0)">Mail</Link>
                            <Link className="item-addwishlist" to="javascript:void(0)">Add to Wishlist</Link>
                            <Link className="item-addCart" onClick={() => agregarProducto(producto)}>Add to Cart</Link>
                        </div>
                    </div>
                    <div className="item-content">
                        <div className="what-product-is">
                            <h6 className="item-title">
                                <Link to={url}>{producto.title}</Link>
                            </h6>
                            <div className="item-description">
                                <p>{producto.description}</p>
                            </div>                    
                            <div className="item-stars">
                                <div className='star' title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width:(15*producto.rating)+'px'}}></span>
                                </div>
                                <span>(23)</span>
                            </div>
                            
                        </div>
                        <div className="price-template">
                            <div className="item-new-price">
                            ${(producto.price- (producto.price*producto.discountPercentage)/100).toFixed(2)} 
                            </div>
                            <div className="item-old-price">
                            ${producto.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

Producto.propTypes = {
    producto: PropTypes.object,
    url: PropTypes.string,
};

  export default Producto