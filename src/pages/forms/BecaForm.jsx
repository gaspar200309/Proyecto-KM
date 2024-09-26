import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createBeca, updateBeca, getBecaById } from '../../service/api';
import ScrollToTop from '../../components/scrooll/Scrooll';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './Form.css';

const BecaForm = () => {
  const [beca, setBeca] = useState({
    nombre: '',
    institucion: 'publica',
    tipo: 'universidad',
    descripcionUniversidad: '',
    importante: '',
    promedioRequerido: '',
    imgSrc: null,
    becas: {
      social: { descripcion: '' },
      trabajo: { descripcion: '' },
      excelencia: { descripcion: '' }
    },
    direccion: ''
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
    const { name, value } = e.target;

    if (name === 'imgSrc') {
      setBeca({
        ...beca,
        imgSrc: e.target.files[0] 
      });
    } else if (name.includes('beca')) {
      const tipoBeca = name.split('.')[0];
      const key = name.split('.')[1];

      setBeca((prevBeca) => ({
        ...prevBeca,
        becas: {
          ...prevBeca.becas,
          [tipoBeca]: {
            ...prevBeca.becas[tipoBeca],
            [key]: value
          }
        }
      }));
    } else {
      setBeca({
        ...beca,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in beca) {
      if (key === 'becas') {
        formData.append('becas', JSON.stringify(beca[key]));
      } else {
        formData.append(key, beca[key]);
      }
    }
    if (isEdit) {
      await updateBeca(id, formData);
    } else {
      await createBeca(formData);
    }
    navigate('/becas');
  };

  return (
    <div className=''>
    <ScrollToTop />
            <header className="form-header">
                <h1>{isEdit ? 'Editar Universidad' : 'Crear Universidad'}</h1>
                <Link to="/listForm" className="form-back-link"><IoArrowBackCircleSharp/>x</Link>
            </header>
    <form className="form-container" onSubmit={handleSubmit}>
      <input name="nombre" value={beca.nombre} onChange={handleChange} placeholder="Nombre" required />
      <select name="institucion" value={beca.institucion} onChange={handleChange} required>
        <option value="publica">Pública</option>
        <option value="privada">Privada</option>
      </select>
      <select name="tipo" value={beca.tipo} onChange={handleChange} required>
        <option value="universidad">Universidad</option>
        <option value="instituto">Instituto</option>
        <option value="normal">Normal</option>
      </select>
      <textarea name="descripcionUniversidad" value={beca.descripcionUniversidad} onChange={handleChange} placeholder="Descripción de la Universidad" required />
      <input name="importante" value={beca.importante} onChange={handleChange} placeholder="Importante (opcional)" />
      <input name="promedioRequerido" value={beca.promedioRequerido} onChange={handleChange} placeholder="Promedio Requerido (opcional)" />
      <input type="file" name="imgSrc" onChange={handleChange} placeholder="Imagen" required />
      
      <h3>Beca Social</h3>
      <textarea name="social.descripcion" value={beca.becas.social.descripcion} onChange={handleChange} placeholder="Descripción de Beca Social" />
      
      <h3>Beca Trabajo</h3>
      <textarea name="trabajo.descripcion" value={beca.becas.trabajo.descripcion} onChange={handleChange} placeholder="Descripción de Beca Trabajo" />
      
      <h3>Beca Excelencia</h3>
      <textarea name="excelencia.descripcion" value={beca.becas.excelencia.descripcion} onChange={handleChange} placeholder="Descripción de Beca Excelencia" />
      
      <input name="direccion" value={beca.direccion} onChange={handleChange} placeholder="Dirección (opcional)" />
      <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
    </div>
  );
};

export default BecaForm;
