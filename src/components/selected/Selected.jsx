import React from 'react';
import './Select.css';

const Select = ({ name, value, onChange, options, placeholder, required, label }) => {
  return (
    <div className="select-container">
      {label && <label className="select-label" htmlFor={name}>{label}</label>}
      <select
        className="select-field"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
