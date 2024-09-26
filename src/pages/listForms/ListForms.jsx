import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListForms.css'; 
import ImagenesApp from '../../assets/ImagenesApp';
import ScrollToTop from '../../components/scrooll/Scrooll';

export default function ListForms() {
  const navigate = useNavigate();

  return (
    <div className="container1">
      <ScrollToTop />
      <h1>Selecciona un formulario</h1>
      <div className="card-container1">

        {/* Carrera */}
        <div className="card-wrapper">
          <div className="card1" onClick={() => navigate('/career/new')}>
            <img src={ImagenesApp.imgAdministracion} alt="Carrera" className="card-image1" />
            <div className="card-content1">
              <h2>Formulario de Carrera</h2>
            </div>
          </div>
          <Link to="/listCareers" className="btn-list">Listar Carreras</Link>
        </div>

        {/* Universidad */}
        <div className="card-wrapper">
          <div className="card1" onClick={() => navigate('/university/new')}>
            <img src={ImagenesApp.imgEconomia} alt="Universidad" className="card-image1" />
            <div className="card-content1">
              <h2>Formulario de Universidad</h2>
            </div>
          </div>
          <Link to="/listUniversidades" className="btn-list">Listar Universidades</Link>
        </div>

        {/* Beca */}
        <div className="card-wrapper">
          <div className="card1" onClick={() => navigate('/beca/new')}>
            <img src={ImagenesApp.imgAgricola} alt="Beca" className="card-image1" />
            <div className="card-content1">
              <h2>Formulario de Beca</h2>
            </div>
          </div>
          <Link to="/listBecas" className="btn-list">Listar Becas</Link>
        </div>

      </div>
    </div>
  );
}
