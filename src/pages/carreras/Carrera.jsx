import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCareers } from "../../service/api"; 
import BuscadorCar from '../carreras/BucadorCar';
import './EstilosCar.css' 

const Carrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await getCareers();
          console.log(response)
          setCarreras(response.data);
      } catch (error) {
          setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const areas = {};

  carreras.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });

  if (loading) return <p>Cargando carreras...</p>;
  if (error) return <p>Error al cargar carreras: {error}</p>;

  return (
    <>
      <BuscadorCar />
      <div>
        {Object.entries(areas).map(([area, carrerasEnArea]) => (
          <div key={area} className="areas">
            <h2 id="">{area}</h2>
            <div className="container-card">
              {carrerasEnArea.map((carrera) => (
                <div className="card" key={carrera._id}>
                  <figure>
                    <img className="mejorarImg" src={carrera.imgSrc} alt={carrera.descripcion} />
                  </figure>
                  <div className="contenido-card">
                    <h3>{carrera.titulo}</h3>
                    <Link to={`/carrera/${carrera._id}`}>Leer Más</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrera;
