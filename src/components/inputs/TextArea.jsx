import "./input.css";

export const TextArea = ({
  label,
  name = "",
  className = "",
  id,
  placeholder = "",
  register = null, // Por defecto null si no se usa react-hook-form
  errors = null,
  ...props // Agrega un spread para manejar otras props opcionales
}) => {
  return (
    <div className="config-input">
      {label && <label htmlFor={id}>{label}</label>}

      <textarea
        name={name}
        id={id}
        className={`${className} ${errors && errors[name] ? "error" : ""}`} // Agrega la clase "error" si hay errores
        placeholder={placeholder}
        {...(register ? register(name) : props)} // Aplica register si está definido
        rows="4"
      />

      {errors && errors[name] && (
        <span className="error-validation">{errors[name].message}</span>
      )}
    </div>
  );
};
