import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import './BackButton.css';

const BackButton = ({ to = '/', label = 'Volver', className = '' }) => {
	const navigate = useNavigate();

	const handleBack = () => {
		if (to) {
			navigate(to);
		} else {
			navigate(-1); // Navega hacia atrás en el historial
		}
	};

	return (
		<button className={`back-button ${className}`} onClick={handleBack}>
			<IoArrowBackCircleSharp className="back-icon" />
			<span>{label}</span>
		</button>
	);
};

export default BackButton;
