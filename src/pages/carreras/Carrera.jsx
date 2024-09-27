import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCareers } from '../../service/api';
import SearchBar from '../../components/search/Search';
import ScrollToTop from '../../components/scrooll/Scrooll';
//import './EstilosCar.css';
import './Carrera.css';

const Carrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refs = {
    salud: useRef(null),
    ingenierias: useRef(null),
    empresariales: useRef(null),
    tecnologicas: useRef(null),
    sociales: useRef(null),
    urbanismo: useRef(null)
  };

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await getCareers();
        setCarreras(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCarreras = carreras.filter((carrera) =>
    carrera.titulo.toLowerCase().includes(search.toLowerCase())
  );

  const areas = {};

  filteredCarreras.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = {
        licenciatura: [],
        tecnicoSuperior: [],
        tecnicoMedio: []
      };
    }

    switch (carrera.nivel) {
      case 'licenciatura':
        areas[carrera.area].licenciatura.push(carrera);
        break;
      case 'tecnico-superior':
        areas[carrera.area].tecnicoSuperior.push(carrera);
        break;
      case 'tecnico-medio':
        areas[carrera.area].tecnicoMedio.push(carrera);
        break;
      default:
        break;
    }
  });

  if (loading) return <p>Cargando carreras...</p>;
  if (error) return <p>Error al cargar carreras: {error}</p>;

  return (
    <>
      <ScrollToTop />
      <SearchBar
        searchValue={search}
        onSearchChange={handleSearchChange}
        placeholder="Buscar Carreras"
      />
      <div>
        {Object.entries(areas).map(([area, niveles]) => (
          <div key={area} className={`areas ${area.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2 className="titulo-area">{area}</h2>
            {Object.entries(niveles).map(([nivel, carrerasEnNivel]) => (
              carrerasEnNivel.length > 0 && (
                <div key={nivel}>
                  <h3 className="titulo-nivel">{nivel.replace('-', ' ').toUpperCase()}</h3>
                  <div className="container-card">
                    {carrerasEnNivel.map((carrera) => (
                      <div className="card" key={carrera._id}>
                        <figure>
                          <img
                            className="mejorarImg"
                            src={`http://localhost:3000${carrera.imgSrc}`}
                            alt={carrera.descripcion}
                          />
                        </figure>
                        <div className="contenido-card">
                          <h3>{carrera.titulo}</h3>
                          <Link to={`/carrera/${carrera._id}`}>Leer Más</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrera;
