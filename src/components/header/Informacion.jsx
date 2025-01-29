import './Informacion.css';
import ImagenesApp from '../../assets/ImagenesApp';

export const Informacion = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-background">
          <img src={ImagenesApp.imgEco} alt="Fondo Cochabamba" className="image-background" />
          <div className="overlay"></div>
        </div>
        <div className="hero-content">
          <img src={ImagenesApp.kawsay} alt="Logo" className="hero-logo animate-logo" />
          <h1 className="hero-title animate-title">ORIENTACIÓN VOCACIONAL EN COCHABAMBA</h1>
          <p className="hero-description animate-description">
            Descubre las universidades, carreras y oportunidades académicas en el corazón de Bolivia.
          </p>
        </div>
      </section>
      
      <section className="contenido-nosotros contenedor" id="nosotros">
        <h2 className="titulo-nosotros animate-section-title">Guía Profesiográfica de Cochabamba</h2>
        <div className="texto-nosotros animate-text">
          <p>
            Cochabamba ofrece una amplia variedad de instituciones académicas y programas de educación superior. 
            Explora las universidades y sus carreras, conoce sus ubicaciones en un mapa interactivo, y toma decisiones informadas para construir tu futuro.
          </p>
        </div>
      </section>
    </>
  );
};
