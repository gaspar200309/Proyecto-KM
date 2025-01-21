import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../components/inputs/InputText';
import { TextArea } from '../../components/inputs/TextArea';
import Select from '../../components/selected/Selected';
import {PrimaryButton} from '../../components/Buttons/PrimaryButton';
import { createUniversidad, updateUniversidad, getUniversidadById } from '../../service/api';
import ScrollToTop from '../../components/scrooll/Scrooll';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './Form.css';
import BackButton from '../../components/Buttons/BackButton';

const UniversidadForm = () => {
    const [universidad, setUniversidad] = useState({
        nombre: '',
        descripcion: '',
        direcciones: [],
        tipoEscuela: '',
        esPublica: '',
        logo: null,
        enlace: ''
    });

    const [numDirecciones, setNumDirecciones] = useState(1); // Número inicial de direcciones
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setIsEdit(true);
            getUniversidadById(id)
                .then((response) => {
                    if (response?.data) {
                        setUniversidad((prev) => ({
                            ...prev,
                            ...response.data,
                        }));
                        setNumDirecciones(response.data.direcciones.length || 1);
                    }
                })
                .catch((error) => console.error("Error fetching universidad:", error));
        }
    }, [id]);

    useEffect(() => {
        const updatedDirecciones = Array.from({ length: numDirecciones }, (_, i) => {
            return universidad.direcciones[i] || { direccion: '', telefono: '', fax: '', celular: '', whatsapp: '', correo: '' };
        });
        setUniversidad({ ...universidad, direcciones: updatedDirecciones });
    }, [numDirecciones]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'logo') {
            setUniversidad({
                ...universidad,
                logo: files[0]
            });
        } else {
            setUniversidad({
                ...universidad,
                [name]: value
            });
        }
    };

    const handleDireccionChange = (index, e) => {
        const updatedDirecciones = universidad.direcciones.map((direccion, i) =>
            i === index ? { ...direccion, [e.target.name]: e.target.value } : direccion
        );
        setUniversidad({ ...universidad, direcciones: updatedDirecciones });
    };

    const handleNumDireccionesChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumDirecciones(value > 0 ? value : 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('direcciones', JSON.stringify(universidad.direcciones));
        Object.keys(universidad).forEach((key) => {
            if (key !== 'direcciones') {
                formData.append(key, universidad[key]);
            }
        });

        if (isEdit) {
            await updateUniversidad(id, formData);
        } else {
            await createUniversidad(formData);
        }

        navigate('/listForm');
    };

    return (
        <div className="form-container1">
            <ScrollToTop />
            <BackButton to="/listForm" label="Volver" />


            <div className="form-header">
                <h1>{isEdit ? 'Editar Universidad' : 'Crear Universidad'}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <InputText
                    name="nombre"
                    label="Nombre"
                    value={universidad.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                />

                <TextArea
                    name="descripcion"
                    label={'Descripción'}
                    value={universidad.descripcion}
                    onChange={handleChange}
                    placeholder="Descripción de la universidad"
                    rows="5"
                    className="form-textarea"
                ></TextArea>

                <InputText
                    name="numDirecciones"
                    label="Cantidad de Direcciones"
                    value={numDirecciones}
                    onChange={handleNumDireccionesChange}
                    placeholder="Número de direcciones"
                    type="number"
                    required
                />

                {universidad.direcciones.map((dir, index) => (
                    <div key={index} className="direccion-group">
                        <InputText
                            name="direccion"
                            label="Dirección"
                            value={dir.direccion}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Dirección"
                            required
                        />
                        <InputText
                            name="telefono"
                            label="Teléfono"
                            value={dir.telefono}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Teléfono"
                        />
                        <InputText
                            name="fax"
                            label="Fax"
                            value={dir.fax}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Fax"
                        />
                        <InputText
                            name="celular"
                            label="Celular"
                            value={dir.celular}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Celular"
                        />
                        <InputText
                            name="whatsapp"
                            label="WhatsApp"
                            value={dir.whatsapp}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="WhatsApp"
                        />
                        <InputText
                            name="correo"
                            label="Correo"
                            value={dir.correo}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Correo"
                        />
                        <PrimaryButton 
                            type="button"
                            buttonStyle='remove'
                            value='Eliminar'  
                            onClick={() => setNumDirecciones(numDirecciones - 1)}/>
                    </div>
                ))}

                <Select
                    name="tipoEscuela"
                    label="Tipo de Escuela"
                    value={universidad.tipoEscuela}
                    onChange={handleChange}
                    options={[
                        { label: 'Universidad', value: 'Universidad' },
                        { label: 'Instituto', value: 'Instituto' },
                        { label: 'Normal', value: 'Normal' },
                        { label: 'Policía y Militar', value: 'Policía y Militar' }
                    ]}
                    placeholder="Seleccione el tipo de escuela"
                    required
                />

                <Select
                    name="esPublica"
                    label="Pública o Privada"
                    value={universidad.esPublica}
                    onChange={handleChange}
                    options={[
                        { label: 'Pública', value: 'publica' },
                        { label: 'Privada', value: 'privada' }
                    ]}
                    placeholder="Seleccione si es pública o privada"
                    required
                />

                <InputText
                    name="enlace"
                    label="Enlace"
                    value={universidad.enlace}
                    onChange={handleChange}
                    placeholder="Enlace al sitio web"
                    required
                />
    <label>Logo</label>
                <input name="logo" type="file" onChange={handleChange} className="form-input-file" />

                <PrimaryButton 
                    value = {isEdit ? 'Actualizar' : 'Crear'}
                    type="primary" 
                    />
                    
            </form>
        </div>
    );
};

export default UniversidadForm;
