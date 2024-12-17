import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCareerRecomended } from '../../service/api'
import Card from '../../components/card/Card'

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
						<Card
							key={carrera._id}
							imgSrc={carrera.imgSrc}
							titulo={carrera.titulo}
							descripcion={carrera.descripcion}
							id={carrera._id}
						/>
					))}
				</div>
				<div className="mas-carreras">
					<Link to="/carrera" className="carRecomend center-button">
						Ver más carreras
					</Link>
				</div>
			</div>
		</>
	)
}

export default CarreraRecomendada
