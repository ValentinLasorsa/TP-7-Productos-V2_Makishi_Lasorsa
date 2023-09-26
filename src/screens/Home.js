import axios from 'axios'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import '../Styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../Img/bg-showcase-1.jpg'
import foto2 from '../Img/bg-showcase-2.jpg'
import foto3 from '../Img/Gato.jpg'
import Col from 'react-bootstrap/Col';
import Producto from '../Components/Producto';
export default function Home() {
    const [destacados, setDestacados] = useState([])
    const [isLoading, setLoading] = useState(true)
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                const prods = response.data.products;
                let destacadosArray = [];
                for (let index = 0; index < 6; index++) {
                    let num
                    num = randomNumberInRange(0, prods.length - 1);
                    destacadosArray.push(prods[num]);
                }
                setDestacados(destacadosArray);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const calcularDescuento = (producto) => {
        let precio = producto.price
        let discount = producto.discountPercentage
        const precioConDescuento = (Math.round(precio - (precio * discount / 100)))
        return precioConDescuento
    }

    return (
        <div>
            {isLoading ? null : (
                <>
                    <h1 className='titulo'>Bienvenidos a TechGlus</h1>

                    <div className='RowCarousel d-flex justify-content-center'>
                        <Carousel className='Carousel'>
                            <Carousel.Item className='boxFoto'>
                                <img className='fotoCarousel' src={foto1} alt='hola' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={foto2} alt='hola' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={foto3} width='900' height='600' alt='hola' />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='container'>
                        <Row md={3}>
                            {destacados.map((element) => {
                                return (
                                    <Col key={element.id}>
                                        <Producto titulo={element.title} id={element.id} imagen={element.thumbnail} precio={element.price} producto={element} calcularDescuento={calcularDescuento}></Producto>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                </>
            )}
        </div>
    );
}