import React, { useState } from 'react';
import './Modal.css'

const UniversitySelectorModal = ({ universidades, selectedUniversities, setSelectedUniversities, onClose }) => {
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedUniversities([...selectedUniversities, value]);
        } else {
            setSelectedUniversities(selectedUniversities.filter((uni) => uni !== value));
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Selecciona Universidades</h2>
                <div className="university-list">
                    {universidades.map((uni) => (
                        <div key={uni._id}>
                            <input
                                type="checkbox"
                                value={uni._id}
                                checked={selectedUniversities.includes(uni._id)}
                                onChange={handleCheckboxChange}
                            />
                            <label>{uni.nombre}</label>
                        </div>
                    ))}
                </div>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default UniversitySelectorModal;
