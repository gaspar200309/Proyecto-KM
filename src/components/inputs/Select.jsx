import "./input.css";

/* eslint-disable react/prop-types */
export const Select = ({
  label = "",
  name = "",
  className = "",
  id,
  placeholder = "",
  register = null,
  options = [],
  errors = null,
}) => {
  return (
    <div className="config-input">
      {label && <label htmlFor={id}>{label}</label>}

      <select
        className={className}
        id={id}
        name={name}
        {...register}
        defaultValue={placeholder}
      >
        <option disabled hidden>
          {placeholder}
        </option>

        {options &&
          options.map((optionElement, index) => {
            return (
              <option key={index} value={optionElement.value}>
                {optionElement.label}
              </option>
            );
          })}
      </select>

      {errors && errors[id] && (
        <span className="error-validation">{errors[id].message}</span>
      )}
    </div>
  );
};
