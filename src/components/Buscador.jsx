import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import { getCareers } from '../service/api';
import { FaSearch } from "react-icons/fa";
import './EstilosBuscador.css';

const Buscador = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [careers, setCareers] = useState([]);
  const [filteredCareers, setFilteredCareers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const { data } = await getCareers();
        const validCareers = data.filter(
          (career) => career && career.titulo && typeof career.titulo === 'string'
        );
        setCareers(validCareers);
      } catch (error) {
        console.error('Error al cargar carreras:', error);
      }
    };
    fetchCareers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = careers.filter((career) =>
      career.titulo.toLowerCase().includes(value)
    );
    setFilteredCareers(filtered);
    setShowResults(value.length > 0);
  };

  const performSearch = () => {
    const filtered = careers.filter((career) =>
      career.titulo.toLowerCase().includes(search)
    );
    setFilteredCareers(filtered);
    setShowResults(filtered.length > 0);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Buscar Carreras"
          className="search-input"
        />
        <button
          className="search-button"
          onClick={performSearch}
          disabled={!search}
        >
          <FaSearch className="search-icon" />
        </button>
      </div>

      {showResults && (
        <div className="search-results">
          {filteredCareers.map((career) => (
            <Link
              key={career._id}
              to={`/carrera/${career._id}`} // Ruta dinámica para la carrera
              className="search-result-item"
              onClick={() => setShowResults(false)} // Opcional: Ocultar resultados tras clic
            >
              {career.titulo}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buscador;
