import React, { useState } from "react";
import { Link } from "react-router-dom";
import carrerasApp from "./CarreraApp";
import BuscadorCar from './BucadorCar'
import './EstilosCar.css' 

const Carrera = () => {

  const areas = {};

  carrerasApp.forEach((carrera) => {
    if (!areas[carrera.area]) {
      areas[carrera.area] = [];
    }
    areas[carrera.area].push(carrera);
  });
  return (
    <>
    <BuscadorCar></BuscadorCar>
      <div>
        {Object.entries(areas).map(([area, carrerasEnArea]) => (
          <div key={area} className="areas">
            <h2 id="carrera#territorio">{area}</h2>
            <div className="container-card">
              {carrerasEnArea.map((carrera) => (
                <div className="card" key={carrera.idCar}>
                <figure>
                    <img  className = "mejorarImg" src={carrera.imgSrc} alt={carrera.descripcion} />
                  </figure>
                  <div className="contenido-card">
                  <h3>{carrera.titulo}</h3>
                    <Link to={`/carrera/${carrera.idCar}`}>Leer Más</Link>
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
