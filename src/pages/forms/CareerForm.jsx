import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { createCareer, updateCareer, getCareerById, getUniversidades } from '../../service/api'
import { Input } from '../../components/inputs/Input'
import { TextArea } from '../../components/inputs/TextArea'
import InputText from '../../components/inputs/InputText'
import Select from '../../components/selected/Selected'
import './CareerForm.css'
import UniversitySelectorModal from '../../components/modal/UniversitySelectorModal'
import ScrollToTop from '../../components/scrooll/Scrooll'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import UniversitySelector from '../../components/selected/selectUniversity'

const CareerForm = () => {
	const [career, setCareer] = useState({
		titulo: '',
		descripcion: '',
		lugaresDeTrabajo: [''],
		materias: [''],
		universidades: [],
		area: '',
		nivel: '',
		duracion: '',
		imgSrc: '',
	})
	const [universidades, setUniversidades] = useState([])
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (id) {
			getCareerById(id).then((response) => setCareer(response.data))
		}
		getUniversidades().then((response) => setUniversidades(response.data))
	}, [id])

	const handleChange = (e) => {
		setCareer({
			...career,
			[e.target.name]: e.target.value,
		})
	}

	const handleArrayChange = (e, index, arrayName) => {
		const newArray = [...career[arrayName]]
		newArray[index] = e.target.value
		setCareer({ ...career, [arrayName]: newArray })
	}

	const addArrayField = (arrayName) => {
		setCareer({ ...career, [arrayName]: [...career[arrayName], ''] })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		for (const key in career) {
			if (key === 'imgSrc' && career[key]) {
				formData.append(key, career[key])
			} else if (Array.isArray(career[key])) {
				career[key].forEach((item) => formData.append(key, item))
			} else {
				formData.append(key, career[key])
			}
		}

		if (id) {
			await updateCareer(id, formData)
		} else {
			await createCareer(formData)
		}
		navigate('/listForm')
	}

	const handleFileChange = (e) => {
		setCareer({
			...career,
			imgSrc: e.target.files[0],
		})
	}

	return (
		<div className="contaniner-register">
			<ScrollToTop />
			<Link to="/listForm" className="icon">
				<IoArrowBackCircleSharp />
			</Link>
			<div className="form-header">
				<h1>{id ? 'Editar Carrera ' : 'Crear carrera'}</h1>
			</div>
			<form className="form-container2 container-register-form-1" onSubmit={handleSubmit}>
				<Input
					name="titulo"
					label="Título de la carrera"
					value={career.titulo}
					onChange={handleChange}
					className="input-3c"
					placeholder="Nombre de la carrera"
					required
				/>

				<Input
					name="duracion"
					label="Duración de la carrera"
					value={career.duracion}
					onChange={handleChange}
					className="input-1c"
					placeholder="Años de Estudio (opcional)"
				/>

				<TextArea
					name="descripcion"
					label="Descripción de la carrera"
					value={career.descripcion}
					onChange={handleChange}
					className=".input-4c"
					placeholder="Descripción"
					required
				/>

				{career.lugaresDeTrabajo.map((lugar, index) => (
					<div key={index}>
						<Input
							name={`lugaresDeTrabajo-${index}`}
							label="Lugar de trabajo"
							value={lugar}
							onChange={(e) => handleArrayChange(e, index, 'lugaresDeTrabajo')}
							placeholder="Lugar de Trabajo"
						/>
					</div>
				))}
				<button type="button" onClick={() => addArrayField('lugaresDeTrabajo')}>
					Agregar Lugar de Trabajo
				</button>

				{career.materias.map((materia, index) => (
					<div key={index}>
						<Input
							name={`materias-${index}`}
							label="Materia"
							value={materia}
							onChange={(e) => handleArrayChange(e, index, 'materias')}
							placeholder="Materia"
						/>
					</div>
				))}
				<button type="button" onClick={() => addArrayField('materias')}>
					Agregar Materia
				</button>

				<button
					type="button"
					onClick={() => {
						console.log('Abrir modal')
						setShowModal(true)
					}}
				>
					Seleccionar Universidades
				</button>

				{showModal && (
					<UniversitySelector
						universidades={universidades}
						selectedUniversities={career.universidades}
						setSelectedUniversities={(selected) => setCareer({ ...career, universidades: selected })}
						onClose={() => setShowModal(false)}
					/>
				)}

				<Select
					name="area"
					label="Área de la carrera"
					value={career.area}
					onChange={handleChange}
					options={[
						{ label: 'ÁREA DE SALUD', value: 'ÁREA DE SALUD' },
						{ label: 'ÁREA TECNOLÓGICA', value: 'ÁREA TECNOLÓGICA' },
						{ label: 'ÁREA ECONÓMICA', value: 'ÁREA ECONÓMICA' },
						{ label: 'ÁREA SOCIAL Y HUMANA', value: 'ÁREA SOCIAL Y HUMANA' },
						{ label: 'ÁREA URBANISMO Y TERRITORIO', value: 'ÁREA URBANISMO Y TERRITORIO' },
						{ label: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO', value: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO' },
						{ label: 'ÁREA AGRÍCOLA', value: 'ÁREA AGRÍCOLA' },
					]}
					placeholder="Seleccione el área"
					required
				/>
				<Select
					name="nivel"
					label="Nivel de la carrera"
					value={career.nivel}
					onChange={handleChange}
					options={[
						{ label: 'Técnico Superior', value: 'tecnico-superior' },
						{ label: 'Técnico Medio', value: 'tecnico-medio' },
						{ label: 'Licenciatura', value: 'licenciatura' },
					]}
					placeholder="Seleccione el nivel"
					required
				/>

				<input type="file" name="imgSrc" onChange={handleFileChange} accept="image/*" />

				<button type="submit">{id ? 'Actualizar' : 'Crear'}</button>

				{showModal && (
					<UniversitySelectorModal
						universidades={universidades}
						selectedUniversities={career.universidades}
						setSelectedUniversities={(selected) => setCareer({ ...career, universidades: selected })}
						onClose={() => setShowModal(false)}
					/>
				)}
			</form>
		</div>
	)
}

export default CareerForm
