import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListForms.css'; // Importa el archivo de estilos CSS

export default function ListForms() {
  const navigate = useNavigate();

  return (
    <div className="container1">
      <h1>Selecciona un formulario</h1>
      <div className="card-container1">
        <div className="card1" onClick={() => navigate('/career/new')}>
          <img src="/images/career.jpg" alt="Carrera" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Carrera</h2>
          </div>
        </div>
        <div className="card1" onClick={() => navigate('/university/new')}>
          <img src="/images/university.jpg" alt="Universidad" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Universidad</h2>
          </div>
        </div>
        <div className="card1" onClick={() => navigate('/beca/new')}>
          <img src="/images/scholarship.jpg" alt="Beca" className="card-image1" />
          <div className="card-content1">
            <h2>Formulario de Beca</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
