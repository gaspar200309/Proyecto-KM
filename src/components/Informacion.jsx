import Logo from './../assets/logos/LogoKM.png';
import './Informacion.css';

export const Informacion = () => {
  return (
    <article className="informacion-container" id="nosotros">
      <figure className="informacion-logo">
        <img 
          src={Logo} 
          width="400" 
          alt="Logotipo de Kawsay Muju" 
          loading="lazy" 
        />
      </figure>

      <div className="informacion-content">
        <h2 aria-label="Sección de orientación vocacional">Orientación Vocacional</h2>
        <p>
          Hola, bienvenid@ a la página Profesiográfica Semillas. 
          En este sitio encontrarás información sobre diferentes centros de educación superior y 
          las carreras que podrías estudiar.
        </p>
      </div>
    </article>
  );
};
