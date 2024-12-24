import "./input.css";

export const TextArea = ({
  label,
  name = "",
  className = "",
  id,
  placeholder = "",
  register,
  errors = null,
}) => {
  return (
    <div className="config-input">
      {label && <label htmlFor={id}>{label}</label>}

      <textarea
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        {...register}
        rows={"4"}
      />

      {errors && errors[id] && (
        <span className="error-validation">{errors[id].message}</span>
      )}
    </div>
  );
};
