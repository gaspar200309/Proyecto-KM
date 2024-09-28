import './InfTest.css'; 
import {Link } from 'react-router-dom';

const InfTest = () => {
  return (
    <div className="container-inf">
      <h2 className="test-title">Encuentra tu nueva carrera</h2>
      <p className="encuentra-carrera-description">
        Explora nuestras diversas opciones de carreras y encuentra la que mejor se adapte a tus intereses y habilidades. ¡Es tu momento de brillar!
      </p>
      <Link href="/testVocacional" className="encuentra-carrera-button">
        Orientacion Vocacional
      </Link>
    </div>
  );
};

export default InfTest;
