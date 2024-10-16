import React from "react";
import becasData from "./BecasApp";
import "./Becas.css";
import ScrollToTop from "../../components/scrooll/Scrooll";

const Becas = () => {
  return (
    <>
      <ScrollToTop />
      <h1 className="becas-title">Becas Disponibles</h1>
      <div className="becas-grid contenedor">
        {becasData.map((beca) => (
          <div className="card beca-card" key={beca._id}>
            <div className="img-cardB">
              {beca.imgSrc ? (
                <img src={beca.imgSrc} alt={beca.nombre || 'Imagen de beca'} />
              ) : (
                <div className="img-placeholder">Imagen no disponible</div>
              )}
            </div>
            <div className="contentB">
              <h3 className="titleB">{beca.nombre || 'Universidad mayor de san simon(UMSS)'}</h3>
              <p className="sub-titleB">
                {beca.institucion || 'Universidad'} - {beca.tipo || 'Publica'}
              </p>
              <p className="descriptionB">{beca.descripcionUniversidad || 'Beca PBI (Programa de Becas individuales) La convocatoria sale los últimos meses del año. Los requisitos primordiales son; buen rendimiento los ultimos tres años de colegio (4to, 5to, 6to), situación socioeconómica escasa y una carta de recomendación de un sindicato u organización social.'}</p>
              {/* {beca.importante && ( */}
                <p className="important-note">
                  <strong>Importante: </strong><p>{beca.importante || 'Se realizará orientación vocacional y nivelación académica de manera previa.'}</p>
                </p>
              {/* )} */}
              {beca.promedioRequerido && (
                <p className="average-requiredB">
                  <strong>Promedio Requerido: </strong>{beca.promedioRequerido || 'Promedio no disponible'}
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
                <strong>Dirección: </strong>{beca.direccion || '"Dirección Universitaria de Bienestar estudiantil-DUBE 3er piso, edificio Multiacadémico, Campus Las cuadras. "'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Becas;
