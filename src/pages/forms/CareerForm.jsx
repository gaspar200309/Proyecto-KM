import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCareer, updateCareer, getCareerById, getUniversidades } from '../../service/api';
import InputText from '../../components/inputs/InputText';  // Import InputText component
import Select from '../../components/selected/Selected';  // Import Select component
import './CareerForm.css';
import UniversitySelectorModal from '../../components/modal/UniversitySelectorModal';

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
        imgSrc: ''
    });
    const [universidades, setUniversidades] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getCareerById(id).then(response => setCareer(response.data));
        }
        getUniversidades().then(response => setUniversidades(response.data));
    }, [id]);

    const handleChange = (e) => {
        setCareer({
            ...career,
            [e.target.name]: e.target.value
        });
    };

    const handleArrayChange = (e, index, arrayName) => {
        const newArray = [...career[arrayName]];
        newArray[index] = e.target.value;
        setCareer({ ...career, [arrayName]: newArray });
    };

    const addArrayField = (arrayName) => {
        setCareer({ ...career, [arrayName]: [...career[arrayName], ''] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        for (const key in career) {
            if (key === 'imgSrc' && career[key]) {
                formData.append(key, career[key]);
            } else if (Array.isArray(career[key])) {
                career[key].forEach(item => formData.append(key, item));
            } else {
                formData.append(key, career[key]);
            }
        }
    
        if (id) {
            await updateCareer(id, formData);
        } else {
            await createCareer(formData);
        }
        navigate('/carreras');
    };

    const handleFileChange = (e) => {
        setCareer({
            ...career,
            imgSrc: e.target.files[0]
        });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <InputText
                name="titulo"
                value={career.titulo}
                onChange={handleChange}
                placeholder="Nombre de la carrera"
                required
            />
            <textarea
                name="descripcion"
                value={career.descripcion}
                onChange={handleChange}
                placeholder="Descripción"
                required
            />

            {career.lugaresDeTrabajo.map((lugar, index) => (
                <div key={index}>
                    <InputText
                        name={`lugaresDeTrabajo-${index}`}
                        value={lugar}
                        onChange={(e) => handleArrayChange(e, index, 'lugaresDeTrabajo')}
                        placeholder="Lugar de Trabajo"
                    />
                </div>
            ))}
            <button type="button" onClick={() => addArrayField('lugaresDeTrabajo')}>Agregar Lugar de Trabajo</button>

            {career.materias.map((materia, index) => (
                <div key={index}>
                    <InputText
                        name={`materias-${index}`}
                        value={materia}
                        onChange={(e) => handleArrayChange(e, index, 'materias')}
                        placeholder="Materia"
                    />
                </div>
            ))}
            <button type="button" onClick={() => addArrayField('materias')}>Agregar Materia</button>

            <button type="button" onClick={() => setShowModal(true)}>
                Seleccionar Universidades
            </button>

            <div>
                <p>Universidades seleccionadas:</p>
                {career.universidades.map((uniId) => (
                    <span key={uniId}>
                        {universidades.find((uni) => uni._id === uniId)?.nombre}
                    </span>
                ))}
            </div>

            <Select
                name="area"
                value={career.area}
                onChange={handleChange}
                options={[
                    { label: 'ÁREA DE SALUD', value: 'ÁREA DE SALUD' },
                    { label: 'ÁREA TECNOLÓGICA', value: 'ÁREA TECNOLÓGICA' },
                    { label: 'ÁREA ECONÓMICA', value: 'ÁREA ECONÓMICA' },
                    { label: 'ÁREA SOCIAL Y HUMANA', value: 'ÁREA SOCIAL Y HUMANA' },
                    { label: 'ÁREA URBANISMO Y TERRITORIO', value: 'ÁREA URBANISMO Y TERRITORIO'},
                    { label: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO', value: 'ÁREA MEDIO AMBIENTE Y AGROPECUARIO'},
                ]}
                placeholder="Seleccione el área"
                required
            />

            <Select
                name="nivel"
                value={career.nivel}
                onChange={handleChange}
                options={[
                    { label: 'Técnico Superior', value: 'tecnico-superior' },
                    { label: 'Técnico Medio', value: 'tecnico-medio' },
                    { label: 'Licenciatura', value: 'licenciatura' }
                ]}
                placeholder="Seleccione el nivel"
                required
            />

            <InputText
                name="duracion"
                value={career.duracion}
                onChange={handleChange}
                placeholder="Años de Estudio (opcional)"
            />

            <input
                type="file"
                name="imgSrc"
                onChange={handleFileChange}
                accept="image/*"
            />

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
    );
};

export default CareerForm;
