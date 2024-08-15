import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUniversidad, updateUniversidad, getUniversidadById } from '../../service/api';
import './Form.css';

const UniversidadForm = () => {
  const [universidad, setUniversidad] = useState({
    nombre: '',
    direcciones: [{ direccion: '', telefono: '', fax: '', celular: '', whatsapp: '', correo: '' }],
    tipoEscuela: '',
    esPublica: '',
    logo: '',
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
    setUniversidad({ ...universidad, [e.target.name]: e.target.value });
  };
  
  const handleDireccionChange = (index, e) => {
    const updatedDirecciones = universidad.direcciones.map((direccion, i) =>
      i === index ? { ...direccion, [e.target.name]: e.target.value } : direccion
    );
    setUniversidad({ ...universidad, direcciones: updatedDirecciones });
  };
  
  const addDireccion = () => {
    setUniversidad({ ...universidad, direcciones: [...universidad.direcciones, { direccion: '', telefono: '', fax: '', celular: '', whatsapp: '', correo: '' }] });
  };
  
  const removeDireccion = (index) => {
    const updatedDirecciones = universidad.direcciones.filter((_, i) => i !== index);
    setUniversidad({ ...universidad, direcciones: updatedDirecciones });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updateUniversidad(id, universidad);
    } else {
      await createUniversidad(universidad);
    }
    navigate('/universidades');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input name="nombre" value={universidad.nombre} onChange={handleChange} placeholder="Nombre" required />
      {universidad.direcciones.map((dir, index) => (
        <div key={index} className="direccion-group">
          <input name="direccion" value={dir.direccion} onChange={(e) => handleDireccionChange(index, e)} placeholder="Dirección" required />
          <input name="telefono" value={dir.telefono} onChange={(e) => handleDireccionChange(index, e)} placeholder="Teléfono" />
          <input name="fax" value={dir.fax} onChange={(e) => handleDireccionChange(index, e)} placeholder="Fax" />
          <input name="celular" value={dir.celular} onChange={(e) => handleDireccionChange(index, e)} placeholder="Celular" />
          <input name="whatsapp" value={dir.whatsapp} onChange={(e) => handleDireccionChange(index, e)} placeholder="Whatsapp" />
          <input name="correo" value={dir.correo} onChange={(e) => handleDireccionChange(index, e)} placeholder="Correo" />
          <button type="button" onClick={() => removeDireccion(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addDireccion}>Add Dirección</button>
      <select name="tipoEscuela" value={universidad.tipoEscuela} onChange={handleChange} required>
        <option value="">Select Tipo de Escuela</option>
        <option value="Universidad">Universidad</option>
        <option value="Instituto">Instituto</option>
        <option value="Normal">Normal</option>
      </select>
      <select name="esPublica" value={universidad.esPublica} onChange={handleChange} required>
        <option value="">Select Pública/Privada</option>
        <option value="publica">Pública</option>
        <option value="privada">Privada</option>
      </select>
      <input name="enlace" value={universidad.enlace} onChange={handleChange} placeholder="Enlace" required />
      <input type="file" name="logo" onChange={handleChange} />
      <button type="submit">{isEdit ? 'Update' : 'Create'} Universidad</button>
    </form>
  );
};

export default UniversidadForm;
