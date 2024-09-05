// InputText.js
import React from 'react';
import './InputText.css';

const InputText = ({ name, value, onChange, placeholder, required }) => {
  return (
    <input
      className="input-text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputText;
