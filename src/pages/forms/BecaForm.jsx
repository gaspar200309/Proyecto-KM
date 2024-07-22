import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBeca, updateBeca, getBecaById } from '../../service/api';
//import './Form.css';

const BecaForm = () => {
  const [beca, setBeca] = useState({
    imgSrc: '',
    universidad: '',
    dato: '',
    descripcion: ''
  });
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      getBecaById(id).then(response => setBeca(response.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setBeca({
      ...beca,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updateBeca(id, beca);
    } else {
      await createBeca(beca);
    }
    navigate('/becas');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input name="imgSrc" value={beca.imgSrc} onChange={handleChange} placeholder="Imagen" required />
      <input name="universidad" value={beca.universidad} onChange={handleChange} placeholder="Universidad" required />
      <input name="dato" value={beca.dato} onChange={handleChange} placeholder="Dato" required />
      <textarea name="descripcion" value={beca.descripcion} onChange={handleChange} placeholder="Descripción" required />
      <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default BecaForm;
