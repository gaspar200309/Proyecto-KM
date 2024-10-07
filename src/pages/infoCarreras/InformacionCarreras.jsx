import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCareerById } from "../../service/api";
import ScrollToTop from "../../components/scrooll/Scrooll";
import "./InformacionesCarrera.css";
import ImagenesApp from "../../assets/ImagenesApp";

const InformacionCarreras = () => {

  const baseURL = process.env.NODE_ENV === 'production'
  ? "https://backend-km-git-main-gaspar200309s-projects.vercel.app"
  : "https://backend-km-git-main-gaspar200309s-projects.vercel.app";


  const { idCar } = useParams();
  const [carreraSelect, setCarreraSelect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarrera = async () => {
      try {
        const response = await getCareerById(idCar);
        setCarreraSelect(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarrera();
  }, [idCar]);

  if (loading) return <p>Cargando información de la carrera...</p>;
  if (error) return <p>Error al cargar la carrera: {error}</p>;
  if (!carreraSelect) return <p>Carrera no encontrada</p>;

  return (
    <>
      <ScrollToTop />
      <div className="informacion-carrera-container">
        <div className="Header1">
        <header className="headerC">
          <div className="image-containerC">
            {/* <img
              src={`http://localhost:3000${carreraSelect.imgSrc}`}
              alt={carreraSelect.titulo}
            />
            <img
                    src={`${baseURL}${carreraSelect.imgSrc}`}
                    alt={carreraSelect.titulo}
                  /> */}

                  <img
                    src={ImagenesApp.imgAmbiental}
                    alt={carreraSelect.titulo}
                  />
            <div className="image-textC">
              <h1>
                {carreraSelect.titulo} <span>{carreraSelect.duracion}</span>
              </h1>
            </div>
          </div>
        </header>

        <nav className="navigation-barC">
          <Link to="/">Inicio /</Link>
          <Link to="/carrera">Carreras /</Link>
          <Link to="#">{carreraSelect.titulo}</Link>
        </nav>
        </div>

        <div className="contentC">
          <div className="contentC-contenido">
          <h1>Información de la Carrera: {carreraSelect.titulo}</h1>
          <section className="contenidoC">
            <h2 className="subtitle">¿Qué es la Carrera?</h2>
            <p>{carreraSelect.descripcion}</p>
          </section>

          <section className="contenidoC">
            <h2 className="subtitle">Áreas de trabajo de la carrera: {carreraSelect.titulo}</h2>
            <ul>
              {carreraSelect.lugaresDeTrabajo.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </section>

          <section className="contenidoC">
            <h2 className="subtitle">Materias que te sirven de base</h2>
            <ul>
              {carreraSelect.materias.map((materia, index) => (
                <li key={index}>{materia}</li>
              ))}
            </ul>
          </section>

          <section className="contenidoC">
            <h2 className="subtitle">Universidades para Estudiar {carreraSelect.titulo}</h2>
            <ul className="universidades-list">
              {carreraSelect.universidades.map((universidad, index) => (
                <li key={index} className="universidad-item">
                  {/* <img
                    className="universidad-logo"
                    src={`http://localhost:3000${universidad.logo}`}
                    alt={universidad.nombre}
                  /> */}
                  <img
                    className="universidad-logo"
                    src={ImagenesApp.imgUPB}
                    alt={universidad.nombre}
                  />

                  <a href={universidad.enlace} target="_blank" rel="noopener noreferrer">
                    {universidad.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformacionCarreras;
