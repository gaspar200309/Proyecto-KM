import "./primaryButton.css";

export const PrimaryButton = ({
  value = "",
  className = "",
  onClick = null,
  label = "",
  id = "",
  type = "button", // Cambiado a "button" por defecto
  buttonStyle = "primary", // Define estilos como "primary", "secondary", "remove"
}) => {
  return (
    <div className="config-btn-primary">
      {label && <label htmlFor={id}>{label}</label>}
      <button
        id={id}
        type={type} // Ahora se configura explícitamente
        className={`btn-${buttonStyle} ${className}`} // Clase dinámica basada en el estilo
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};
