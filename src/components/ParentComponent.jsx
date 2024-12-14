import React, { useState } from 'react';
import Buscador from './Buscador';

const ParentComponent = () => {
  const [filteredCarreras, setFilteredCarreras] = useState([]);

  const updateFilteredCarreras = (resultados) => {
    setFilteredCarreras(resultados);
  };

  return (
    <div>
      <Buscador updateFilteredCarreras={updateFilteredCarreras} />
      <div>
        {filteredCarreras.map((item, index) => (
          <div key={index}>
            <h3>{item.tipo}: {item.nombre || item.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
