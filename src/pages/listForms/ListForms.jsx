import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListForms.css'; 
import ImagenesApp from '../../assets/ImagenesApp';

export default function ListForms() {
  const navigate = useNavigate();

  return (
    <div className="container1">
      <h1>Selecciona un formulario</h1>
      <div className="card-container1">
        <div className="card1" onClick={() => navigate('/career/new')}>
          <img src={ImagenesApp.imgAdministracion} alt="Carrera" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Carrera</h2>
          </div>
        </div>
        <div className="card1" onClick={() => navigate('/university/new')}>
          <img src={ImagenesApp.imgEconomia} alt="Universidad" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Universidad</h2>
          </div>
        </div>
        <div className="card1" onClick={() => navigate('/beca/new')}>
          <img src={ImagenesApp.imgAgricola} alt="Beca" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Beca</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
