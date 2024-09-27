import { useState } from 'react';
import servicios from '../pages/carreras/CarreraApp';
import './EstilosBuscador.css' // Importar SVG como componente

const Buscador = ({ updateFilteredCarreras }) => {
  const [search, setSearch] = useState('');

  const normalizeString = (str) => {
    return str
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .toLowerCase() 
      .trim();
  };

  const showData = () => {
    const normalizedSearch = normalizeString(search);
    const filteredCarreras = servicios.filter((carrera) =>
      normalizeString(carrera.titulo).includes(normalizedSearch)
    );

    updateFilteredCarreras(filteredCarreras);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    showData();
  };

  return (
    <div className="search-container">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar Carreras"
        className="search-input"
      ></input>
      <button onClick={handleSearch} className="search-button">
      <img src="/src/assets/icons/search.svg" alt="Buscar" /> 
      </button>
    </div>
  );
};

export default Buscador;
