import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { createCareer, updateCareer, getCareerById } from '../../service/api';
import './CareerForm.css';

const CareerForm = () => {
    const [career, setCareer] = useState({
        idCar: '',
        imgSrc: '',
        titulo: '',
        duracion: '',
        descripcion: '',
        area: '',
        lugaresDeTrabajo: [],
        materias: [],
        universidades: []
    });
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsEdit(true);
            getCareerById(id).then(response => setCareer(response.data));
        }
    }, [id]);

    const handleChange = (e) => {
        setCareer({
            ...career,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateCareer(id, career);
        } else {
            await createCareer(career);
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input name="idCar" value={career.idCar} onChange={handleChange} placeholder="ID" required />
            <input name="imgSrc" value={career.imgSrc} onChange={handleChange} placeholder="Imagen" required />
            <input name="titulo" value={career.titulo} onChange={handleChange} placeholder="Título" required />
            <input name="duracion" value={career.duracion} onChange={handleChange} placeholder="Duración" required />
            <textarea name="descripcion" value={career.descripcion} onChange={handleChange} placeholder="Descripción" required />
            <input name="area" value={career.area} onChange={handleChange} placeholder="Área" required />
            <input name="lugaresDeTrabajo" value={career.lugaresDeTrabajo} onChange={handleChange} placeholder="Lugares de Trabajo" required />
            <input name="materias" value={career.materias} onChange={handleChange} placeholder="Materias" required />
            <input name="universidades" value={career.universidades} onChange={handleChange} placeholder="Universidades" required />
            <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default CareerForm;
