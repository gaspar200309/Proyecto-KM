import React, { useState, useEffect } from "react";
import { getBecas } from "../../service/api"
import "./Becas.css";
import ScrollToTop from "../../components/scrooll/Scrooll";

const Becas = () => {
  const [becas, setBecas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBecas = async () => {
      try {
        const response = await getBecas();
        setBecas(response.data); // Asegúrate de que `response.data` contiene las becas
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBecas();
  }, []);

  if (loading) return <p>Cargando becas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ScrollToTop />
      <h1 className="becas1-title">Becas Disponibles</h1>
      <div className="becas1-grid2 contenedor1">
        {becas.map((beca) => (
          <div className="card1 beca1-card2" key={beca._id}>
            <div className="img-cardB">
              {beca.imgSrc ? (
                <img src={beca.imgSrc} alt={beca.nombre || "Imagen de beca"} />
              ) : (
                <div className="img-placeholder">Imagen no disponible</div>
              )}
            </div>
            <div className="contentB">
              <h3 className="titleB">{beca.nombre || "Universidad may"}</h3>
              <p className="sub-titleB">
                {beca.institucion || "Universidad"} - {beca.tipo || "Publica"}
              </p>
              <p className="descriptionB">{beca.descripcionUniversidad}</p>
              <p className="important-note">
                <strong>Importante: </strong>
                {beca.importante}
              </p>
              {beca.promedioRequerido && (
                <p className="average-requiredB">
                  <strong>Promedio Requerido: </strong>
                  {beca.promedioRequerido}
                </p>
              )}
              <div className="scholarshipsB">
                {beca.becas?.social?.descripcion && (
                  <div className="scholarship-typeB">
                    <h4>Beca Social</h4>
                    <p>{beca.becas.social.descripcion}</p>
                  </div>
                )}
                {beca.becas?.trabajo?.descripcion && (
                  <div className="scholarship-typeB">
                    <h4>Beca de Trabajo</h4>
                    <p>{beca.becas.trabajo.descripcion}</p>
                  </div>
                )}
                {beca.becas?.excelencia?.descripcion && (
                  <div className="scholarship-typeB">
                    <h4>Beca de Excelencia</h4>
                    <p>{beca.becas.excelencia.descripcion}</p>
                  </div>
                )}
              </div>
              <p className="addressB">
                <strong>Dirección: </strong>
                {beca.direccion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Becas;
