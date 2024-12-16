import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css' // Asegúrate de que los estilos para la tarjeta estén bien definidos
import { NextPage } from '../Buttons/NextPage'

const Card = ({ imgSrc, titulo, descripcion, id }) => {
	function convertir(descripcion) {
		if (!descripcion) return ''
		if (descripcion.length > 150) {
			return descripcion.substring(0, 150) + '...'
		}
		return descripcion
	}

	return (
		<div className="card">
			<figure>
				<img className="mejorarImg" src={imgSrc} alt={descripcion} />
			</figure>
			<div className="contenido-card">
				<h4>{titulo}</h4>
				<p>{convertir(descripcion)}</p>
				<div className="leer-mas">
					<NextPage to={`/carrera/${id}`} value="Leer mas" />
				</div>
			</div>
		</div>
	)
}

export default Card
