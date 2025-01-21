import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { NextPage } from '../Buttons/NextPage';
import './Card.css';

const Card = forwardRef(({ imgSrc, titulo, descripcion, id, isVisible }, ref) => {
	function convertir(descripcion) {
		if (!descripcion) return '';
		return descripcion.length > 150 ? descripcion.substring(0, 150) + '...' : descripcion;
	}

	return (
		<div className={`card ${isVisible ? 'visible' : ''}`} ref={ref}>
			<figure>
				<img className="mejorarImg" src={imgSrc} alt={descripcion} loading="lazy" />
			</figure>
			<div className="contenido-card">
				<h4>{titulo}</h4>
				<p>{convertir(descripcion)}</p>
				<div className="leer-mas">
					<NextPage to={`/carrera/${id}`} value="Leer más" className="btn-leer-mas" />
				</div>
			</div>
		</div>
	);
});

export default Card;
