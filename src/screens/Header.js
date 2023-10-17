import { Link, Outlet } from "react-router-dom";
import CarritoHeader from "../Components/Header/CarritoHeader";

function Header() {
    return (
        <>
        <header>
            <div className="full-layer-mid-header">
                <div className="container">
                    <div className="row clearfix align-items-center">
                        <div className="col-lg-3 col-md-9 col-sm-6">
                            <div className="brand-logo text-lg-center">
                                <Link to="/">
                                    <img src="images/main-logo/groover-branding-1.png" alt="Groover Brand Logo" className="app-brand-logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 u-d-none-lg">
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <nav>
                                <ul className="mid-nav g-nav">
                                    <li className="u-d-none-lg">
                                        <Link to="/">
                                            <i className="ion ion-md-home u-c-brand"></i>
                                        </Link>
                                    </li>
                                    <li className="u-d-none-lg">
                                        <Link to="/wishlist">
                                            <i className="far fa-heart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <CarritoHeader/>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-layer-bottom-header ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <ul className="bottom-nav g-nav u-d-none-lg center">
                                <li>
                                    <Link to="/" className="menu-title">
                                    <i className="fa-solid fa-house"></i>Home</Link>
                                </li>
                                <li>
                                    <Link to="/quienes-somos" className="menu-title">About</Link>
                                </li>
                                <li>
                                    <Link to="/contacto" className="menu-title">Contact us</Link>
                                </li>
                                <li className="mega-position">
                                    <Link className="menu-title">Pages
                                        <i className="fas fa-chevron-down u-s-m-l-9"></i>
                                    </Link>
                                    <div className="mega-menu mega-3-colm">
                                        <ul>
                                            <li>
                                                <Link to="/productos" className="menu-title" >
                                                <i className="ion ion-md-shirt"></i>Clothing
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <Outlet />
        </>
    );
  }
  
export default Header;