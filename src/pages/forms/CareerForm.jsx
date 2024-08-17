import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCareer, updateCareer, getCareerById, getUniversidades } from '../../service/api';
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
        
        // Usar FormData para manejar tanto los datos del formulario como el archivo
        const formData = new FormData();
        for (const key in career) {
            if (key === 'imgSrc' && career[key]) {
                formData.append(key, career[key]);  // Añadir el archivo si existe
            } else if (Array.isArray(career[key])) {
                career[key].forEach(item => formData.append(key, item));  // Añadir arrays al FormData
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
            imgSrc: e.target.files[0]  // Guarda el archivo en el estado
        });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
             <input name="titulo" value={career.titulo} onChange={handleChange} placeholder="Nombre de la carrera" required />
            <textarea name="descripcion" value={career.descripcion} onChange={handleChange} placeholder="Descripción" required />

            {career.lugaresDeTrabajo.map((lugar, index) => (
                <div key={index}>
                    <input
                        name="lugaresDeTrabajo"
                        value={lugar}
                        onChange={(e) => handleArrayChange(e, index, 'lugaresDeTrabajo')}
                        placeholder="Lugar de Trabajo"
                    />
                </div>
            ))}
            <button type="button" onClick={() => addArrayField('lugaresDeTrabajo')}>Agregar Lugar de Trabajo</button>

            {career.materias.map((materia, index) => (
                <div key={index}>
                    <input
                        name="materias"
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

            <input name="area" value={career.area} onChange={handleChange} placeholder="Área" required />
            <select name="nivel" value={career.nivel} onChange={handleChange} required>
                <option value="">Selecciona el Nivel</option>
                <option value="tecnico-superior">Técnico Superior</option>
                <option value="tecnico-medio">Técnico Medio</option>
                <option value="licenciatura">Licenciatura</option>
            </select>
            <input name="duracion" value={career.duracion} onChange={handleChange} placeholder="Años de Estudio (opcional)" />
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
