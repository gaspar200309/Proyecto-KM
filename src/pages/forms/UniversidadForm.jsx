import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUniversidad, updateUniversidad, getUniversidadById } from '../../service/api';
//import './Form.css';

const UniversidadForm = () => {
  const [universidad, setUniversidad] = useState({
    nombre: '',
    enlace: '',
    logo: ''
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
    setUniversidad({
      ...universidad,
      [e.target.name]: e.target.value
    });
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
      <input name="enlace" value={universidad.enlace} onChange={handleChange} placeholder="Enlace" required />
      <input name="logo" value={universidad.logo} onChange={handleChange} placeholder="Logo" required />
      <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default UniversidadForm;
