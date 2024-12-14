import { useState } from 'react';
import { searchCar } from '../service/api';
import { FaSearch } from "react-icons/fa";
import './EstilosBuscador.css';

const Buscador = ({ updateFilteredCarreras }) => {
  const [search, setSearch] = useState('');

  const handleSearch1 = async () => {
    try {
      const { data } = await searchCar(search); // Pasar el término de búsqueda

      const resultadosCombinados = [
        ...data.carreras.map((carrera) => ({ tipo: 'Carrera', ...carrera })),
        ...data.universidades.map((universidad) => ({ tipo: 'Universidad', ...universidad }))
      ];

      updateFilteredCarreras(resultadosCombinados); // Llamar la función pasada como prop
    } catch (error) {
      console.error('Error al buscar:', error);
    }
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar Carreras"
        className="search-input"
      />
      <button onClick={handleSearch1} className="search-button">
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};


export default Buscador;
