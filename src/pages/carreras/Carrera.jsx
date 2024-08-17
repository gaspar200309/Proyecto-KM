import React, { useRef, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getCareers } from '../../service/api';
import SearchBar from '../../components/search/Search'; 
import './EstilosCar.css';

const Carrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const saludRef = useRef(null);
  const ingenieriasRef = useRef(null);
  const empresarialesRef = useRef(null);
  const tecnologicasRef = useRef(null);
  const socialesRef = useRef(null);
  const urbanismoRef = useRef(null);

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
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });

  if (loading) return <p>Cargando carreras...</p>;
  if (error) return <p>Error al cargar carreras: {error}</p>;

  return (
    <>
      <SearchBar
        searchValue={search}
        onSearchChange={handleSearchChange}
        onSearchSubmit={() => {}}
        placeholder="Buscar Carreras"
      />
      <div>
        {Object.entries(areas).map(([area, carrerasEnArea]) => (
          <div key={area} className="areas" ref={
            area === 'ÁREA DE SALUD' ? saludRef :
            area === 'Ingenierías' ? ingenieriasRef :
            area === 'Carreras empresariales' ? empresarialesRef :
            area === 'Carreras Tecnológicas' ? tecnologicasRef :
            area === 'Carreras sociales' ? socialesRef :
            area === 'Urbanismo y territorio' ? urbanismoRef :
            null
          }>
            <h2>{area}</h2>
            <div className="container-card">
              {carrerasEnArea.map((carrera) => (
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
        ))}
      </div>
    </>
  );
};

export default Carrera;