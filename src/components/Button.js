import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <>
            <button className="boton" onClick={props.onPress}>{props.titulo}</button>
        </>
        
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
    titulo: PropTypes.string
}