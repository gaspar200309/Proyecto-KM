import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CardUniversity.css'
import Modal from '../modal/Modal' // Importamos el componente Modal

const CardUniversity = ({ logo, nombre, descripcion, direcciones, enlace }) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const handleModalToggle = () => {
		setModalOpen(!isModalOpen)
	}

	return (
		<>
			<div className="cardU">
				<figure>
					<img className="cardU-img" src={logo} alt={nombre} loading="lazy" />
				</figure>
				<div className="cardU-content">
					<h3>{nombre}</h3>
					<p className="cardU-text">
						{descripcion}
					</p>
				</div>
				<button onClick={handleModalToggle} className="cardU-details-btn">
					Detalles
				</button>
			</div>

			{/* Modal para mostrar los detalles */}
			{isModalOpen && (
				<Modal onClose={handleModalToggle}>
					<div className="contenido-cardU">
						<h2>{nombre}</h2>
						{direcciones.map((direccion, idx) => (
							<div key={idx}>
								<p>
									<span>Dirección:</span> {direccion.direccion}
								</p>
								{direccion.telefono && (
									<p>
										<span>Teléfono:</span> {direccion.telefono}
									</p>
								)}
								{direccion.celular && (
									<p>
										<span>Celular:</span> {direccion.celular}
									</p>
								)}
								{direccion.whatsapp && (
									<p>
										<span>WhatsApp:</span> {direccion.whatsapp}
									</p>
								)}
								{direccion.correo && (
									<p>
										<span>Correo:</span> {direccion.correo}
									</p>
								)}
							</div>
						))}
						{enlace && (
							<a href={enlace} target="_blank" rel="noopener noreferrer">
								Visitar Sitio Web
							</a>
						)}
					</div>
				</Modal>
			)}
		</>
	)
}

CardUniversity.propTypes = {
	logo: PropTypes.string.isRequired,
	nombre: PropTypes.string.isRequired,
	descripcion: PropTypes.string,
	direcciones: PropTypes.arrayOf(
		PropTypes.shape({
			direccion: PropTypes.string,
			telefono: PropTypes.string,
			celular: PropTypes.string,
			whatsapp: PropTypes.string,
			correo: PropTypes.string,
		})
	).isRequired,
	enlace: PropTypes.string,
}

export default CardUniversity
