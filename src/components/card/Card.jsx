import React from 'react'
import { Link } from 'react-router-dom'
// Asegúrate de que los estilos para la tarjeta estén bien definidos
import { NextPage } from '../Buttons/NextPage'
import './Card.css'

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
					<NextPage to={`/carrera/${id}`} value="Leer mas" className='btn-leer-mas'/>
				</div>
			</div>
		</div>
	)
}

export default Card
