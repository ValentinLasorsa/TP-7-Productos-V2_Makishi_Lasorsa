import '../Styles/Contacto.css'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function Contacto() {
    return (
        <div className='container'>
            <h1 className='titulo'>Si tienes alguna duda, contactanos!</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <Input titulo={"Nombre"} width={50}></Input>
                </div>
                <div className='col-md-6'>
                    <Input titulo={"Apellido"} width={50}></Input>
                </div>        
            </div>
                <Input titulo={"Email"} width={150}></Input>
                <Input titulo={"Mensaje"} width={150}></Input>
            <Button titulo={"Enviar"}></Button>
            <div className='space'></div>
        </div>
    )
}