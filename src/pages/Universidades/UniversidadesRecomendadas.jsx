import { useState, useEffect } from 'react'
import './universidades.css'
import { getUniversidadesRecomendadas } from '../../service/api'
import { Link } from 'react-router-dom'
import ImagenesApp from '../../assets/ImagenesApp'

const UniversidadesRec = () => {
	const [universidadesToShow, setUniversidadesToShow] = useState([])

	useEffect(() => {
		const fetchUniversidadesRecomendadas = async () => {
			try {
				const response = await getUniversidadesRecomendadas()
				setUniversidadesToShow(response.data)
			} catch (error) {
				console.error('Error al obtener universidades recomendadas:', error)
			}
		}

		fetchUniversidadesRecomendadas()
	}, [])

	return (
		<div>
			<div className="universidades">
				<h2 className="universidades">¿Dónde puedo estudiar?</h2>
			</div>
			<div className="contenedorU">
				{universidadesToShow.map((universidad, idU) => (
					<div className="cardU" key={idU}>
						<figure>
							<img className="contenedorU-img" src={universidad.logo} height="100px" width="80px" alt={universidad.nombre} />
						</figure>
						<div className="contenido-cardU">
							<h3>{universidad.nombre}</h3>
							{universidad.direcciones.map((direccion, index) => (
								<div key={index}>
									<p>{direccion.direccion}</p>
									<p>{direccion.telefono}</p>
									{direccion.correo && <p>{direccion.correo}</p>}
									{direccion.celular && <p>{direccion.celular}</p>}
									{direccion.whatsapp && <p>{direccion.whatsapp}</p>}
								</div>
							))}
							{universidad.enlace && (
								<a href={universidad.enlace} target="_blank" rel="noopener noreferrer">
									Visitar
								</a>
							)}
						</div>
					</div>
				))}
			</div>
			<Link to="/facultad#arriba" className="carRecomend">
				Ver más Universidades
			</Link>
		</div>
	)
}

export default UniversidadesRec
