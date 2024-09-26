import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../components/inputs/InputText';
import Select from '../../components/selected/Selected';
import { createUniversidad, updateUniversidad, getUniversidadById } from '../../service/api';
import ScrollToTop from '../../components/scrooll/Scrooll';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './Form.css';

const UniversidadForm = () => {
    const [universidad, setUniversidad] = useState({
      nombre: '',
      direcciones: [{ direccion: '', telefono: '', fax: '', celular: '', whatsapp: '', correo: '' }],
      tipoEscuela: '',
      esPublica: '',
      logo: null,  
      enlace: ''
    });
  
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if (id) {
        setIsEdit(true);
        getUniversidadById(id).then(response => setUniversidad(response.data));
      }
    }, [id]);

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

    const addDireccion = () => {
        setUniversidad({
            ...universidad,
            direcciones: [...universidad.direcciones, { direccion: '', telefono: '', fax: '', celular: '', whatsapp: '', correo: '' }]
        });
    };

    const removeDireccion = (index) => {
        const updatedDirecciones = universidad.direcciones.filter((_, i) => i !== index);
        setUniversidad({ ...universidad, direcciones: updatedDirecciones });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('direcciones', JSON.stringify(universidad.direcciones));
        
        Object.keys(universidad).forEach(key => {
            if (key !== 'direcciones') {
                if (key === 'logo') {
                    formData.append(key, universidad[key]);
                } else {
                    formData.append(key, universidad[key]);
                }
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
            <Link to="/listForm" className="icon"><IoArrowBackCircleSharp/></Link>

            <div className="form-header">
                <h1>{isEdit ? 'Editar Universidad' : 'Crear Universidad'}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <InputText
                    name="nombre"
                    value={universidad.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                />
                
                {universidad.direcciones.map((dir, index) => (
                    <div key={index} className="direccion-group">
                        <InputText
                            name="direccion"
                            value={dir.direccion}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Dirección"
                            required
                        />
                        <InputText
                            name="telefono"
                            value={dir.telefono}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Teléfono"
                        />
                        <InputText
                            name="fax"
                            value={dir.fax}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Fax"
                        />
                        <InputText
                            name="celular"
                            value={dir.celular}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Celular"
                        />
                        <InputText
                            name="whatsapp"
                            value={dir.whatsapp}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="WhatsApp"
                        />
                        <InputText
                            name="correo"
                            value={dir.correo}
                            onChange={(e) => handleDireccionChange(index, e)}
                            placeholder="Correo"
                        />
                        <button type="button" className="btn-remove" onClick={() => removeDireccion(index)}>Eliminar Dirección</button>
                    </div>
                ))}
                
                <button type="button" className="btn-add" onClick={addDireccion}>Agregar Dirección</button>
                
                <Select
                    name="tipoEscuela"
                    value={universidad.tipoEscuela}
                    onChange={handleChange}
                    options={[
                        { label: 'Universidad', value: 'Universidad' },
                        { label: 'Instituto', value: 'Instituto' },
                        { label: 'Normal', value: 'Normal' }
                    ]}
                    placeholder="Seleccione el tipo de escuela"
                    required
                />
                
                <Select
                    name="esPublica"
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
                    value={universidad.enlace}
                    onChange={handleChange}
                    placeholder="Enlace al sitio web"
                    required
                />
                
                <input name="logo" type="file" onChange={handleChange} className="form-input-file" />
                
                <button type="submit" className="btn-submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
            </form>
        </div>
    );
};

export default UniversidadForm;
