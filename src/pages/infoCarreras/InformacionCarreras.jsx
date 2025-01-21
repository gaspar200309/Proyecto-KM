import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCareerById, getRecommendedCareers } from '../../service/api'
import ScrollToTop from '../../components/scrooll/Scrooll'
import Card from '../../components/card/Card'
import ImagenesApp from '../../assets/ImagenesApp';
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
		sectionTitle: 'Recomendaciones para tu futuro',
		articles: [
			{
				title: 'Cómo Construir un Currículum Impactante',
				description: 'Tu currículum es tu carta de presentación. Aprende a destacarte con un diseño profesional, resaltar tus habilidades clave y mostrar tu experiencia de manera que impresione a futuros empleadores.',
				imageUrl: ImagenesApp.cv,
				link: '/curriculum-impactante',
			},
			{
				title: 'La Tecnología y la IA: Transforma tu Futuro Profesional',
				description: 'La tecnología y la inteligencia artificial están revolucionando todas las industrias. Descubre cómo puedes aprovechar estas herramientas para mejorar tu carrera y estar preparado para el futuro.',
				imageUrl: ImagenesApp.imgIA,
				link: '/tecnologia-ia',
			},
			{
				title: 'La Perseverancia: La Clave para Alcanzar tus Sueños',
				description: 'El camino al éxito no es fácil, pero la perseverancia es esencial. Aprende cómo mantenerte enfocado, superar los obstáculos y seguir adelante hasta lograr tus metas profesionales.',
				imageUrl: ImagenesApp.imgMetas,
				link: '/perseverancia',
			},
			{
				title: 'El Futuro de las Carreras en la Era Digital',
				description: 'En un mundo cada vez más digital, es importante elegir una carrera que te permita estar a la vanguardia. Conoce las mejores opciones de estudios y cómo prepararte para un futuro lleno de oportunidades tecnológicas.',
				imageUrl: ImagenesApp.imgDigital,
				link: '/futuro-carreras',
			},
		],
	};
	
	  
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
			const containerWidth = recomendacionesRef.current.offsetWidth; // Ancho visible del contenedor
			const scrollAmount = direction === 'left' ? -containerWidth : containerWidth; // Desplazarse por el ancho visible
			recomendacionesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};


	if (loading) return <p>Cargando información de la carrera...</p>
	if (error) return <p>Error al cargar la carrera: {error}</p>
	if (!carreraSelect) return <p>Carrera no encontrada</p>

	return (
		<>
			<ScrollToTop />
			<div className="informacion-carrera-container">
				<div className="Header1">
					<div className="image-containerC">
						<img src={carreraSelect.imgSrc} alt={carreraSelect.titulo} />
						<div className="image-textC">
							<h1>
								{carreraSelect.titulo} <span>{carreraSelect.duracion}</span>
								<span>años</span>
							</h1>
						</div>
					</div>

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
										{'< '}
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
								{carreraSelect.videoUrl ? (
									<iframe
										width="560"
										height="315"
										src={carreraSelect.videoUrl}
										title={`Video sobre la carrera ${carreraSelect.titulo}`}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								) : (
									<div className="video-not-available">
										<p>El video sobre esta carrera todavía no está disponible.</p>
									</div>
								)}
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
						<ArticulosRecomendados
							sectionTitle={informationArticulos.sectionTitle} articles={informationArticulos.articles} />
					</div>
				</div>
			</div>
		</>
	)
}

export default InformacionCarreras
