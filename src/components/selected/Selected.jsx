// Select.js
import React from 'react';
import './Select.css';

const Select = ({ name, value, onChange, options, placeholder, required }) => {
  return (
    <select
      className="select-field"
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
  );
};

export default Select;
