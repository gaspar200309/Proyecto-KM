import React from 'react';
import './InputText.css';

const InputText = ({ name, value, onChange, placeholder, required, label }) => {
  return (
    <div className="input-text-containe">
      {label && <label className="input-text-label" htmlFor={name}>{label}</label>}
      <input
        className="input-text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputText;
