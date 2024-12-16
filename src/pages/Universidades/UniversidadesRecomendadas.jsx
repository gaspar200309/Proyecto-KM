import { useState, useEffect } from 'react'
import './universidades.css'
import { getUniversidadesRecomendadas } from '../../service/api'
import { Link } from 'react-router-dom'

//Components
import { NextPage } from '../../components/Buttons/NextPage'

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
		<div className="container-main-universidades">
			<div className="universidades">
				<h2 className="universidades">¿Dónde puedo estudiar?</h2>
			</div>
			<div className="contenedorU">
				{universidadesToShow.map((universidad, idU) => (
					<div className="cardU" key={idU}>
						<figure>
							<img className="contenedorU-img" src={universidad.logo} height="100px" width="80px" alt={universidad.nombre} />
						</figure>
						<h3>{universidad.nombre}</h3>
						<div className="contenido-cardU">
							{universidad.direcciones.map((direccion, index) => (
								<div key={index}>
									<p>{direccion.direccion}</p>
									<p>{direccion.telefono}</p>
									{direccion.correo && <p>{direccion.correo}</p>}
									{direccion.celular && <p>{direccion.celular}</p>}
									{direccion.whatsapp && <p>{direccion.whatsapp}</p>}
								</div>
							))}
						</div>
						{universidad.enlace && <NextPage to={universidad.enlace} value="Visitar" className="visitar-universidad" />}
					</div>
				))}
			</div>
			<div className="mas-universidades">
				<Link to="/facultad#arriba" className="carRecomend">
					Ver más Universidades
				</Link>
			</div>
		</div>
	)
}

export default UniversidadesRec
