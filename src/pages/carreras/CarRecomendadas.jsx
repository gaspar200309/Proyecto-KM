import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCareerRecomended } from '../../service/api'
import './EstilosCar.css'
import ImagenesApp from '../../assets/ImagenesApp'

const CarreraRecomendada = () => {
	const [carreras, setCarreras] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchCarreras = async () => {
			try {
				const response = await getCareerRecomended()
				setCarreras(response.data)
				setLoading(false)
			} catch (err) {
				setError(err.message)
				setLoading(false)
			}
		}

		fetchCarreras()
	}, [])

	if (loading) return <p>Cargando...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<>
			<div className="areas">
				<h2 className="tituloCarer">CARRERAS</h2>
				<div className="container-card">
					{carreras.map((carrera) => (
						<div className="card" key={carrera._id}>
							<figure>
								<img src={carrera.imgSrc} alt={carrera.descripcion} />
							</figure>
							<div className="contenido-card">
								<h3>{carrera.titulo}</h3>
								<Link to={`/carrera/${carrera._id}`}>Leer Más</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="leerMas">
				<Link to="/carrera" className="carRecomend center-button">
					Ver mas carreras...
				</Link>
			</div>
		</>
	)
}

export default CarreraRecomendada
