import PropTypes from 'prop-types'
export default function Input(props) {
    return (
        <div className="containerInput">
            <label>{props.titulo}:</label><br />
            <input className='input' type="text" required size={props.width}></input>
        </div>
    )
}

Input.propTypes = {
    titulo: PropTypes.string,
    width: PropTypes.number
}