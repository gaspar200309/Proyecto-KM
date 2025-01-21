import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { createCareer, updateCareer, getCareerById, getUniversidades } from '../../service/api'
import InputText from '../../components/inputs/InputText'
import { TextArea } from '../../components/inputs/TextArea'
import Select from '../../components/selected/Selected'
import { PrimaryButton } from '../../components/Buttons/PrimaryButton'
import UniversitySelector from '../../components/selected/selectUniversity'
import ScrollToTop from '../../components/scrooll/Scrooll'
import './Form.css'
import BackButton from '../../components/Buttons/BackButton'

const INITIAL_CAREER_STATE = {
	titulo: '',
	descripcion: '', // Asegúrate de que sea una cadena vacía
	lugaresDeTrabajo: [''],
	materias: [''],
	universidades: [],
	area: '',
	nivel: '',
	duracion: '',
	imgSrc: '',
}

const AREAS_OPTIONS = [
	{ label: 'ÁREA DE SALUD', value: 'ÁREA DE SALUD' },
	{ label: 'ÁREA TECNOLÓGICA', value: 'ÁREA TECNOLÓGICA' },
	{ label: 'ÁREA ECONÓMICA', value: 'ÁREA ECONÓMICA' },
	{ label: 'ÁREA SOCIAL Y HUMANA', value: 'ÁREA SOCIAL Y HUMANA' },
	{ label: 'ÁREA URBANISMO Y TERRITORIO', value: 'ÁREA URBANISMO Y TERRITORIO' },
	{ label: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO', value: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO' },
	{ label: 'ÁREA AGRÍCOLA', value: 'ÁREA AGRÍCOLA' },
]

const NIVEL_OPTIONS = [
	{ label: 'Técnico Superior', value: 'tecnico-superior' },
	{ label: 'Técnico Medio', value: 'tecnico-medio' },
	{ label: 'Licenciatura', value: 'licenciatura' },
]

const DynamicFieldsSection = ({ title, fieldName, values, onChange, onAdd, onRemove, placeholder }) => {
	const [count, setCount] = useState(1)

	const handleGenerateFields = () => {
		const newFields = Array(count).fill('')
		onChange([...values, ...newFields])
		setCount(1)
	}

	return (
		<div className="dynamic-fields-section">
			<h3 className="section-title">{title}</h3>
			<div className="fields-generator">
				<PrimaryButton 
                    type="button" 
                    buttonStyle='secondary'
                    onClick={handleGenerateFields} 
                    value={`Generar + ${count}`} />
			</div>

			<div className="fields-container">
				{values.map((value, index) => (
					<div key={index} className="field-row">
						<InputText
							name={`${fieldName}`}
							label={`${title} ${index + 1}`}
							value={value}
							onChange={(e) => {
								const newValues = [...values]
								newValues[index] = e.target.value
								onChange(newValues)
							}}
							placeholder={placeholder}
						/>
						<PrimaryButton
							type="button"
                            buttonStyle='remove'
							value="Eliminar"
							onClick={() => onRemove(index)}
							aria-label={`Eliminar ${title.toLowerCase()}`}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

const CareerForm = () => {
	const [career, setCareer] = useState(INITIAL_CAREER_STATE)
	const [universidades, setUniversidades] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const loadInitialData = async () => {
			try {
				const [univResponse] = await Promise.all([
					getUniversidades(),
					id ? getCareerById(id) : Promise.resolve({ data: INITIAL_CAREER_STATE }),
				])

				setUniversidades(univResponse.data)
				if (id) {
					const careerResponse = await getCareerById(id)
					setCareer(careerResponse.data)
				}
			} catch (error) {
				console.error('Error loading initial data:', error)
				// Aquí podrías mostrar un mensaje de error al usuario
			}
		}

		loadInitialData()
	}, [id])

	const handleChange = (e) => {
		const { name, value } = e.target
		setCareer((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleFileChange = (e) => {
		setCareer((prev) => ({
			...prev,
			imgSrc: e.target.files[0],
		}))
	}

	const handleSubmit = async (e) => {
        e.preventDefault();
        if (!career.titulo || !career.area || !career.nivel) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            const formData = new FormData();
    
            for (const [key, value] of Object.entries(career)) {
                if (key === 'imgSrc' && value instanceof File) {
                    formData.append(key, value);
                } else if (Array.isArray(value)) {
                    if (key === 'universidades') {
                        value.forEach((id) => formData.append(key, id)); // Asegúrate de que son strings
                    } else {
                        value.forEach((item) => formData.append(key, item));
                    }
                } else {
                    formData.append(key, value);
                }
            }
    
            await (id ? updateCareer(id, formData) : createCareer(formData));
            navigate('/listForm');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    
	const removeArrayItem = (index, arrayName) => {
		setCareer((prev) => ({
			...prev,
			[arrayName]: prev[arrayName].filter((_, i) => i !== index),
		}))
	}

	return (
		<div className="form-container1">
			<ScrollToTop />

			<BackButton to="/listForm" label="Volver" />

			<div className="form-header">
				<h1>{id ? 'Editar Carrera' : 'Crear Carrera'}</h1>
			</div>

			<form onSubmit={handleSubmit}>
				<section className="basic-info">
					<InputText
						name="titulo"
						label="Título de la carrera"
						value={career.titulo}
						onChange={handleChange}
						placeholder="Nombre de la carrera"
						required
					/>

					<InputText
						name="duracion"
						label="Duración de la carrera"
						value={career.duracion}
						onChange={handleChange}
						placeholder="Años de Estudio"
						type="number"
					/>

					<TextArea
						label="Descripción"
						name="descripcion"
						id="descripcion"
						placeholder="Escribe aquí..."
						value={career.descripcion}
						onChange={(e) => setCareer((prev) => ({ ...prev, descripcion: e.target.value }))}
					/>
				</section>

				<section className="dynamic-sections">
					<DynamicFieldsSection
						title="Lugares de Trabajo"
						fieldName="lugaresDeTrabajo"
						values={career.lugaresDeTrabajo}
						onChange={(newValues) => setCareer((prev) => ({ ...prev, lugaresDeTrabajo: newValues }))}
						onRemove={(index) => removeArrayItem(index, 'lugaresDeTrabajo')}
						placeholder="Ingrese lugar de trabajo"
					/>

					<DynamicFieldsSection
						title="Materias"
						fieldName="materias"
						values={career.materias}
						onChange={(newValues) => setCareer((prev) => ({ ...prev, materias: newValues }))}
						onRemove={(index) => removeArrayItem(index, 'materias')}
						placeholder="Ingrese materia"
					/>
				</section>

				<section className="selectors">
					<Select
						name="area"
						label="Área de la carrera"
						value={career.area}
						onChange={handleChange}
						options={AREAS_OPTIONS}
						placeholder="Seleccione el área"
						required
					/>

					<Select
						name="nivel"
						label="Nivel de la carrera"
						value={career.nivel}
						onChange={handleChange}
						options={NIVEL_OPTIONS}
						placeholder="Seleccione el nivel"
						required
					/>
				</section>

				<section className="university-section">
					<PrimaryButton 
                    buttonStyle='secondary'
                    type="button" onClick={() => setShowModal(true)}
                     value="Seleccionar universidades" />

					{showModal && (
						<UniversitySelector
							universidades={universidades}
							selectedUniversities={career.universidades}
							setSelectedUniversities={(selected) => setCareer((prev) => ({ ...prev, universidades: selected }))}
							onClose={() => setShowModal(false)}
						/>
					)}
				</section>

				<section className="image-upload">
					<input type="file" name="imgSrc" onChange={handleFileChange} accept="image/*" label="Imagen de portada" />
				</section>

				<section className="form-actions">
					<PrimaryButton 
                    type="submit" 
                    buttonStyle='primary'
                    value={id ? 'Actualizar' : 'Crear'} 
                     disabled={isSubmitting} />
				</section>
			</form>
		</div>
	)
}

export default CareerForm
