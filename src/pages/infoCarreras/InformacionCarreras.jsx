import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCareerById, getRecommendedCareers } from '../../service/api'
import ScrollToTop from '../../components/scrooll/Scrooll'
import Card from '../../components/card/Card'
import { ArticulosRecomendados } from '../../components/Articulos/ArticulosRecomendados'

import './InformacionesCarrera.css'

const InformacionCarreras = () => {
	const { idCar } = useParams()
	const [carreraSelect, setCarreraSelect] = useState(null)
	const [recomendaciones, setRecomendaciones] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const recomendacionesRef = useRef(null)

	const informationArticulos = {
		sectionTitle: 'Te puede interesar',
		articles: [
			{
				title: 'Diseño de Videojuegos',
				description: '¿Por qué estudiar Diseño de Videojuegos? El Diseño de Videojuegos se encarga de todo el proceso desde la...',
				imageUrl: 'URL_de_la_imagen_2',
				link: '/',
			},
			{
				title: 'Diseño de Videojuegos',
				description: '¿Por qué estudiar Diseño de Videojuegos? El Diseño de Videojuegos se encarga de todo el proceso desde la...',
				imageUrl: 'URL_de_la_imagen_2',
				link: '/',
			},
			{
				title: '¿Por qué estudiar Diseño Web?',
				description:
					'¿Quieres ser Webmaster? La profesión del Diseñador Web es, al igual que todas las relacionadas con la tecnología y...',
				imageUrl: 'URL_de_la_imagen_3',
				link: '/',
			},
			{
				title: 'Diseño de Videojuegos',
				description: '¿Por qué estudiar Diseño de Videojuegos? El Diseño de Videojuegos se encarga de todo el proceso desde la...',
				imageUrl: 'URL_de_la_imagen_2',
				link: '/',
			},
			{
				title: '¿Por qué estudiar Diseño Web?',
				description:
					'¿Quieres ser Webmaster? La profesión del Diseñador Web es, al igual que todas las relacionadas con la tecnología y...',
				imageUrl: 'URL_de_la_imagen_3',
				link: '/',
			},
		],
	}

	useEffect(() => {
		const fetchCarrera = async () => {
			try {
				const response = await getCareerById(idCar)
				setCarreraSelect(response.data)

				const recomendacionesResponse = await getRecommendedCareers(idCar)
				const shuffledRecomendaciones = recomendacionesResponse.data.sort(() => 0.5 - Math.random())
				setRecomendaciones(shuffledRecomendaciones)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCarrera()
	}, [idCar])

	const scrollRecomendaciones = (direction) => {
		if (recomendacionesRef.current) {
			const scrollAmount = direction === 'left' ? -300 : 300
			recomendacionesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
		}
	}

	if (loading) return <p>Cargando información de la carrera...</p>
	if (error) return <p>Error al cargar la carrera: {error}</p>
	if (!carreraSelect) return <p>Carrera no encontrada</p>

	return (
		<>
			<ScrollToTop />
			<div className="informacion-carrera-container">
				<div className="Header1">
					<header className="headerC">
						<div className="image-containerC">
							<img src={carreraSelect.imgSrc} alt={carreraSelect.titulo} />
							<div className="image-textC">
								<h1>
									{carreraSelect.titulo} <span>{carreraSelect.duracion}</span>
									<span>años</span>
								</h1>
							</div>
						</div>
					</header>

					<nav className="navigation-barC">
						<Link to="/">Inicio /</Link>
						<Link to="/carrera">Carreras /</Link>
						<Link to="#">{carreraSelect.titulo}</Link>
					</nav>
				</div>

				<div className="container-contenido">
					<div className="contentC">
						<div className="contentC-contenido">
							<h1>Información de la Carrera: {carreraSelect.titulo}</h1>
							<div className="container-information-carrera">
								<section className="contenidoC">
									<h2 className="subtitle">¿Qué es la Carrera?</h2>
									<p>{carreraSelect.descripcion}</p>
								</section>

								<section className="contenidoC">
									<h2 className="subtitle">Áreas de trabajo de la carrera: {carreraSelect.titulo}</h2>
									<ul>
										{carreraSelect.lugaresDeTrabajo.map((area, index) => (
											<li key={index}>{area}</li>
										))}
									</ul>
								</section>

								<section className="contenidoC">
									<h2 className="subtitle">Materias que te sirven de base</h2>
									<ul>
										{carreraSelect.materias.map((materia, index) => (
											<li key={index}>{materia}</li>
										))}
									</ul>
								</section>
							</div>

							<section className="conteinerC container-center">
								<h2 className="subtitle">Carreras similares: {carreraSelect.area}</h2>
								<div className="recomendaciones-wrapper">
									<button className="scroll-button left" onClick={() => scrollRecomendaciones('left')}>
										{'<'}
									</button>
									<div className="recomendaciones-container" ref={recomendacionesRef}>
										{recomendaciones.map((carrera) => (
											<Card
												key={carrera._id}
												imgSrc={carrera.imgSrc}
												titulo={carrera.titulo}
												descripcion={carrera.descripcion}
												id={carrera._id}
											/>
										))}
									</div>
									<button className="scroll-button right" onClick={() => scrollRecomendaciones('right')}>
										{'>'}
									</button>
								</div>
							</section>

							<section className="contenidoC container-center">
								<h2 className="subtitle">Video sobre {carreraSelect.titulo}</h2>
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/R_I--jo9qLY"
									title="Video sobre la carrera"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</section>

							<section className="contenidoC container-center">
								<h2 className="subtitle">Universidades para Estudiar {carreraSelect.titulo}</h2>
								<ul className="universidades-list">
									{carreraSelect.universidades.map((universidad, index) => (
										<li key={index} className="universidad-item">
											<img className="universidad-logo" src={universidad.logo} alt={universidad.nombre} />
											<a href={universidad.enlace} target="_blank" rel="noopener noreferrer">
												{universidad.nombre}
											</a>
										</li>
									))}
								</ul>
							</section>
						</div>
					</div>

					<div className="articulos-informacion-carrera">
						<ArticulosRecomendados sectionTitle={informationArticulos.sectionTitle} articles={informationArticulos.articles} />
					</div>
				</div>
			</div>
		</>
	)
}

export default InformacionCarreras
