import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCareerById } from "../../service/api"; 
import ScrollToTop from "../../components/Scrooll";
import "./InformacionesCarrera.css";

const InformacionCarreras = () => {
  const { idCar } = useParams();
  const [carreraSelect, setCarreraSelect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarrera = async () => {
      try {
        const response = await getCareerById(idCar); 
        setCarreraSelect(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarrera();
  }, [idCar]);

  if (loading) return <p>Cargando información de la carrera...</p>;
  if (error) return <p>Error al cargar la carrera: {error}</p>;
  if (!carreraSelect) return <p>Carrera no encontrada</p>;

  return (
    <>
      <ScrollToTop />
      <div>
        <div className="headerC">
          <div className="image-containerC">
            <img
              src={`http://localhost:3000${carreraSelect.imgSrc}`} 
              alt={carreraSelect.titulo}
            />
            <div className="image-textC">
              <h1>
                {carreraSelect.titulo} <span>{carreraSelect.duracion}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="navigation-barC">
          <Link to="/">Inicio /</Link>
          <Link to="/carrera">Carreras /</Link>
          <Link to="#">{carreraSelect.titulo}</Link>
        </div>

        <div className="containerC">
          <div className="content">
            <h1>Información de la Carrera: {carreraSelect.titulo}</h1>
            <div className="contenidoC">
              <h2>¿Qué es la Carrera?</h2>
              <p>{carreraSelect.descripcion}</p>
            </div>

            <div className="contenidoC">
              <h2>Áreas de trabajo de la carrera: {carreraSelect.titulo}</h2>
              <ul>
                {carreraSelect.lugaresDeTrabajo.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
            <div className="contenidoC">
              <h2>Materias que te sirven de base</h2>
              <ul>
                {carreraSelect.materias.map((materia, index) => (
                  <li key={index}>{materia}</li>
                ))}
              </ul>
            </div>
            <div className="enlacesC">
              <h2>Universidades para Estudiar {carreraSelect.titulo}</h2>
              {carreraSelect.universidades.map((universidad, index) => (
                <a key={index} href={universidad.enlace} target="_blank" rel="noopener noreferrer">
                  <img
                    className="imgCarL"
                    src={`http://localhost:3000${universidad.logo}`} 
                    alt={universidad.nombre}
                  />
                  {universidad.nombre}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformacionCarreras;
