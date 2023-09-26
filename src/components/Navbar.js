import '../Styles/Navbar.css'
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
            <div className='navbar'>
                <Navbar expand="lg" className="">
                    <div className='container-fluid'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                                <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <Link></Link>
            </div>
            <Outlet />
        </>
    )
}