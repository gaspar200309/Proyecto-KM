import React, { useState, useMemo } from 'react'
import './UniversitySelectorModal.css'
import Modal from '../modal/Modal'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import InputText from '../inputs/InputText'

const UniversitySelector = ({ universidades, selectedUniversities, setSelectedUniversities, onClose }) => {
	const [selectedUniIds, setSelectedUniIds] = useState(selectedUniversities || [])
	const [searchTerm, setSearchTerm] = useState('') // Estado para el texto de búsqueda

	const uniqueUniversities = useMemo(() => {
		if (!universidades) return []
		return [...new Map(universidades.map((item) => [item._id, item])).values()]
	}, [universidades])

	// Universidades filtradas según el texto ingresado en el buscador
	const filteredUniversities = useMemo(() => {
		return uniqueUniversities.filter((university) => university.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
	}, [uniqueUniversities, searchTerm])

	const toggleUniversitySelection = (universityId) => {
		if (selectedUniIds.includes(universityId)) {
			setSelectedUniIds(selectedUniIds.filter((id) => id !== universityId))
		} else {
			setSelectedUniIds([...selectedUniIds, universityId])
		}
	}

	const handleSave = () => {
		setSelectedUniversities(selectedUniIds)
		onClose()
	}

	const clearSelections = () => {
		setSelectedUniIds([])
	}

	return (
		<Modal isOpen={true} onClose={onClose}>
			<h3>Seleccionar Universidades</h3>
			<div className="search-career">
				<InputText type="text" placeholder="Buscar universidad..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
			</div>
			<div className="scrollable-list">
				<ul>
					{filteredUniversities.map((university) => (
						<li key={university._id} className="custom-checkbox">
							<input
								id={`checkbox-${university._id}`}
								type="checkbox"
								value={university._id}
								checked={selectedUniIds.includes(university._id)}
								onChange={() => toggleUniversitySelection(university._id)}
							/>
							<label htmlFor={`checkbox-${university._id}`}>{university.nombre}</label>
						</li>
					))}
				</ul>
			</div>
			<div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
				<PrimaryButton buttonStyle='primary' type="button" onClick={handleSave} value="Guardar selección" />
				<PrimaryButton buttonStyle='secondary' type="button" onClick={clearSelections} style={{ backgroundColor: '#b20000' }} value="limpiar seleccion" />
			</div>
		</Modal>
	)
}

export default UniversitySelector
