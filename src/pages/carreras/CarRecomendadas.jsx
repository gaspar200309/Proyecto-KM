import { Link } from 'react-router-dom'
import CarreraApp from './CarreraApp'
import './EstilosCar.css'

const CarreraRecomendada = () => {
	const areas = {}
	const carrerasToShow = []

	// Agrupar carreras por área
	CarreraApp.forEach((carrera) => {
		if (!areas[carrera.area]) {
			areas[carrera.area] = []
		}
		areas[carrera.area].push(carrera)
	})

	for (const area in areas) {
		if (areas[area].length > 0) {
			carrerasToShow.push(areas[area].shift())
		}
	}

	while (carrerasToShow.length < 9) {
		for (const area in areas) {
			if (areas[area].length > 0 && carrerasToShow.length < 9) {
				carrerasToShow.push(areas[area].shift())
			}
		}
	}

	return (
		<>
			<div className="areas">
				<h2>CARRERAS</h2>
				<div className="container-card">
					{carrerasToShow.map((carrera) => (
						<div className="card" key={carrera.idCar}>
							<figure>
								<img src={carrera.imgSrc} alt={carrera.descripcion} />
							</figure>
							<div className="contenido-card">
								<h3>{carrera.titulo}</h3>
								<Link to={`/carrera/${carrera.idCar}`}>Leer Más</Link>
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
