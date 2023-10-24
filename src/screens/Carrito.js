import { Link } from "react-router-dom";
import ProductoCart from "../Components/Productos/ProductoCart";
import { CarritoContext } from "../context/carritoContext";
import { useContext } from "react";

const Carrito = () => {
    const {productos:listProdCart, precioTot} = useContext(CarritoContext);
    console.log(listProdCart)


    return (
        <>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>Cart</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home"></i>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="is-marked">
                                <Link to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-cart u-s-p-t-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <div className="table-wrapper u-s-m-b-60">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Cant</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {listProdCart.length >0  ?(
                                        listProdCart.map((producto, index) =>
                                        <ProductoCart producto = {producto} url={'/productos/'+ producto.id} key={index}/>        
                                    )
                                    ):(
                                        <>  </>
                                    )
                                }
                                    

                                </tbody>
                            </table>
                        </div>

                        <div className="coupon-continue-checkout u-s-m-b-60">
                            <div className="calculation">
                                <div className="table-wrapper-2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3 className="calc-h3 u-s-m-b-0">Total</h3>
                                                </td>
                                                <td>
                                                    <span className="calc-text">{precioTot.toFixed(2)}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="button-area">
                                <Link to="/" className="continue">Continue Shopping</Link>
                                <Link to="checkout" className="checkout">Proceed to Checkout</Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

        </>
        
    );
};

export default Carrito