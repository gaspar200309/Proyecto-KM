import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Asegúrate de que los estilos para la tarjeta estén bien definidos

const Card = ({ imgSrc, titulo, descripcion, id }) => {
  return (
    <div className="card">
      <figure>
        <img className="mejorarImg" src={imgSrc} alt={descripcion} />
      </figure>
      <div className="contenido-card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to={`/carrera/${id}`}>Leer Más</Link>
      </div>
    </div>
  );
};

export default Card;
