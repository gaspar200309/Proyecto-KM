import { useState, useEffect } from 'react';
import './universidades.css';
import { getUniversidadesRecomendadas } from '../../service/api';
import { Link } from 'react-router-dom';

// Components
import { NextPage } from '../../components/Buttons/NextPage';
import CardUniversity from '../../components/card/CardUniversity'; // Importamos el componente CardUniversity

const UniversidadesRec = () => {
  const [universidadesToShow, setUniversidadesToShow] = useState([]);

  useEffect(() => {
    const fetchUniversidadesRecomendadas = async () => {
      try {
        const response = await getUniversidadesRecomendadas();
        setUniversidadesToShow(response.data);
      } catch (error) {
        console.error('Error al obtener universidades recomendadas:', error);
      }
    };

    fetchUniversidadesRecomendadas();
  }, []);

  return (
    <div className="container-main-universidades">
      <div className="universidades">
        <h2 className="universidades">¿Dónde puedo estudiar?</h2>
      </div>
      <div className="contenedorU">
        {universidadesToShow.map((universidad, idU) => (
          <CardUniversity
            key={idU}
            logo={universidad.logo}
            nombre={universidad.nombre}
            direcciones={universidad.direcciones}
            enlace={universidad.enlace}
          />
        ))}
      </div>
      <div className="mas-universidades">
        <Link to="/facultad#arriba" className="carRecomend">
          Ver más Universidades
        </Link>
      </div>
    </div>
  );
};

export default UniversidadesRec;
