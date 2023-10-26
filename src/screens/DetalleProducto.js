import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";


export default function DetalleProducto() {
    const { productoId } = useParams();
    const [producto, setProducto] = useState({images: []});
    let {agregarProducto} = useContext(CarritoContext);

    let loadProduct = () => {    
        axios
        .get("https://dummyjson.com/products/"+productoId)
        .then((result) => {
            //console.log(result.data.images)
            setProducto(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        loadProduct();  
    }, [productoId]);


    if(producto.length === 0 && producto.images !== undefined){
        return(
            <><div>Loading...</div></>
        )
    }else {
    return ( 
    /*<!-- Single-Product-Full-Width-Page -->*/
    <>    
    <div className="page-style-a">
        <div className="container">
            <div className="page-intro">
                <h2>Detail</h2>
                <ul className="bread-crumb">
                    <li className="has-separator">
                        <i className="ion ion-md-home"></i>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="is-marked">
                        <Link to="#">Detail</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="page-detail u-s-p-t-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="zoom-area">
                        <div id="gallery" className="u-s-m-t-10">
                        <Carousel>                       
                        {producto.images.map((img, id) =>
                            <div key={id}>
                                <img src={img} style={{backgroundSize: 'cover'}} />
                            </div>     
                        )} 
                        </Carousel>                       
                        </div>
                            
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="all-information-wrapper">
                        <div className="section-1-title-breadcrumb-rating">
                            <div className="product-title">
                                <h1>
                                    <Link to="#">{producto.title}</Link>
                                </h1>
                            </div>
                            <div className="product-rating">
                                <div className='star' title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: (15*producto.rating)+'px'}}></span>
                                </div>
                            </div>
                        </div>
                        <div className="section-2-short-description u-s-p-y-14">
                            <h6 className="information-heading u-s-m-b-8">Description:</h6>
                            <p>This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                            </p>
                        </div>
                        <div className="section-3-price-original-discount u-s-p-y-14">
                            <div className="price">
                                <h4> ${(producto.price- (producto.price*producto.discountPercentage)/100).toFixed(2)} </h4>
                            </div>
                            <div className="original-price">
                                <span>Original Price:</span>
                                <span> ${producto.price}</span>
                            </div>
                            <div className="discount-price">
                                <span>Discount:</span>
                                <span> %{producto.discountPercentage}</span>
                            </div>
                            <div className="total-save">
                                <span>Save:</span>
                                <span> ${((producto.price*producto.discountPercentage)/100).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="section-4-sku-information u-s-p-y-14">
                            <h6 className="information-heading u-s-m-b-8">Sku Information:</h6>
                            <div className="availability">
                                <span>Availability:</span>
                                <span>In Stock</span>
                            </div>
                            <div className="left">
                                <span>Only:</span>
                                <span>{producto.stock}</span>
                            </div>
                        </div>
                        <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                            <div action="#" className="post-form">
                                <div className="quick-social-media-wrapper u-s-m-b-22">
                                    <span>Share:</span>
                                    <ul className="social-media-list">
                                        <li>
                                            <Link to="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fab fa-google-plus-g"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fas fa-rss"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fab fa-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*<div className="quantity-wrapper u-s-m-b-22">
                                    <span>Quantity:</span>
                                    <div className="quantity">
                                        <input type="text" className="quantity-text-field" defaultValue="1"/>
                                        <a className="plus-a" data-max="1000">&#43;</a>
                                        <a className="minus-a" data-min="1">&#45;</a>
                                    </div>
                                </div>*/}
                                <div>
                                    <button className="button button-outline-secondary" onClick={() => agregarProducto(producto)}>Add to cart</button>
                                    <button className="button button-outline-secondary far fa-heart u-s-m-l-6"></button>
                                    <button className="button button-outline-secondary far fa-envelope u-s-m-l-6"></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    </div>
    </>
    );
  }
}