import React from 'react';
import './Informacion.css';
import ImagenesApp from '../../assets/ImagenesApp';

export const Informacion = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
        <img src={ImagenesApp.imgLogo} alt="Logo" className="hero-logo" />
          <h1 className="hero-title">ORIENTACIÓN VOCACIONAL</h1>
          <h2 className="hero-subtitle">¿Qué carrera debo estudiar?</h2>
        </div>
      </section>
      <section className="contenido-nosotros contenedor" id="nosotros">
        <h2 className="titulo-nosotros">PÁGINA PROFESIOGRÁFICA</h2>
        <div className="texto-nosotros">
          <p>
            Bienvenid@ a la página Profesiográfica "Semillas". Aquí podrás descubrir información esencial sobre diversos centros de educación superior y las carreras que ofrecen. Este sitio está diseñado para ayudarte a tomar decisiones informadas sobre tu futuro académico y profesional. 
            Explora las oportunidades que te esperan y encuentra la carrera que mejor se alinee con tus intereses y aspiraciones.
          </p>
        </div>
      </section>
    </>
  );
};
