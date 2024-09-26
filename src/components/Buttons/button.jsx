import "./button.css";
import PropTypes from 'prop-types';

export const Button = ({texto}) => {

  return (
    <div className="buttonStyle">{texto}</div>
  )
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
};