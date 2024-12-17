import './Carrera.css'

import { useState, useEffect } from 'react'
import { getCareers } from '../../service/api'
import SearchBar from '../../components/search/Search'
import ScrollToTop from '../../components/scrooll/Scrooll'
import Card from '../../components/card/Card'

const Carrera = () => {
	const [carreras, setCarreras] = useState([])
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [areaFilter, setAreaFilter] = useState('')
	const [nivelFilter, setNivelFilter] = useState('')
	const [alertId, setAlertId] = useState(true)

	useEffect(() => {
		const fetchCareers = async () => {
			try {
				const response = await getCareers()
				setCarreras(response.data)
				console.log(response.data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCareers()
	}, [])

	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	const handleSearchChange = (event) => setSearch(event.target.value)

	const handleAreaChange = (event) => setAreaFilter(event.target.value)

	const handleNivelChange = (event) => setNivelFilter(event.target.value)

	const filteredCarreras = carreras.filter((carrera) => {
		const matchesSearch = carrera.titulo.toLowerCase().includes(search.toLowerCase())
		const matchesArea = areaFilter ? carrera.area === areaFilter : true
		const matchesNivel = nivelFilter ? carrera.nivel === nivelFilter : true
		return matchesSearch && matchesArea && matchesNivel
	})

	const uniqueAreas = [...new Set(carreras.map((carrera) => carrera.area))]
	const uniqueNiveles = [...new Set(carreras.map((carrera) => carrera.nivel))]

	const transformToId = (area) => {
		switch (area) {
			case 'ÁREA DE SALUD':
				return 'salud'
			case 'ÁREA TECNOLÓGICA':
				return 'tecnologia'
			case 'ÁREA ECONÓMICA':
				return 'economia'
			case 'ÁREA URBANISMO Y TERRITORIO':
				return 'territorio'
		}
	}

	if (loading) return <p>Cargando carreras...</p>
	if (error) return <p>Error al cargar carreras: {error}</p>

	return (
		<>
			<ScrollToTop />
			<SearchBar searchValue={search} onSearchChange={handleSearchChange} placeholder="Buscar Carreras" />
			<div className="filters">
				<label>
					Área:
					<select value={areaFilter} onChange={handleAreaChange}>
						<option value="">Todas</option>
						{uniqueAreas.map((area) => (
							<option key={area} value={area}>
								{area}
							</option>
						))}
					</select>
				</label>
				<label>
					Nivel:
					<select value={nivelFilter} onChange={handleNivelChange}>
						<option value="">Todos</option>
						{uniqueNiveles.map((nivel) => (
							<option key={nivel} value={nivel}>
								{nivel.replace('-', ' ').toUpperCase()}
							</option>
						))}
					</select>
				</label>
			</div>
			<div>
				{filteredCarreras.length === 0 ? (
					<p>No se encontraron carreras.</p>
				) : (
					Object.entries(
						filteredCarreras.reduce((acc, carrera) => {
							if (!acc[carrera.area]) acc[carrera.area] = []
							acc[carrera.area].push(carrera)
							return acc
						}, {})
					).map(([area, carrerasEnArea]) => (
						<div key={area} className={`areas ${area.toLowerCase().replace(/\s+/g, '-')}`}>
							<h2 className="titulo-area" id={transformToId(area)}>
								{area}
							</h2>
							<div className="container-card">
								{carrerasEnArea.map((carrera) => (
									<Card
										key={carrera._id}
										imgSrc={carrera.imgSrc}
										titulo={carrera.titulo}
										descripcion={carrera.descripcion}
										id={carrera._id}
									/>
								))}
							</div>
						</div>
					))
				)}
			</div>
		</>
	)
}

export default Carrera
