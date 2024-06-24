import React from "react";
import "./universidades.css";
import universidadesData from "./UniversidadesApp";
import { Link } from "react-router-dom";

const UniversidadesRec = () => {
  const academias = {};

  universidadesData.forEach((universidadesDat) => {
    if (!academias[universidadesDat.academia]) {
      academias[universidadesDat.academia] = [];
    }
    academias[universidadesDat.academia].push(universidadesDat);
  });

  const universidadesToShow = [];
  const academiasArray = Object.entries(academias);

  for (let i = 0; i < academiasArray.length && universidadesToShow.length < 5; i++) {
    const [, universidadesDa] = academiasArray[i];
    if (universidadesDa.length > 0) {
      universidadesToShow.push(universidadesDa.shift());
    }
  }

  return (
    <>
    <div className="universidades">
          <h2 className="universidades">¿Dónde puedo estudiar?</h2>
        </div>
      <div className="contenedorUR">
        {universidadesToShow.map((universidad, idU) => (
          <div className="cardU" key={idU}>
            <figure>
              <img src={universidad.info[0].imgU} height="100px" width="80px" alt={universidad.nombre} />
            </figure>
            <div className="contenido-cardU">
              <h3>{universidad.nombre}</h3>
              {universidad.info.map((info, infoIndex) => (
                <div key={infoIndex}>
                  {info.enlace && (
                    <>
                      <p>{info.direccion}</p>
                      <p>{info.telefono}</p>
                      {info.fax && <p>{info.fax}</p>}
                      {info.correo && <p>{info.correo}</p>}
                      {info.cel && <p>{info.cel}</p>}
                      {info.wss && <p>{info.wss}</p>}
                      <a href={info.enlace} target="_blank">
                        Visitar
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
      <Link to = './facultad#arriba' className="carRecomend center-button">Ver mas Universidades</Link>
    </>
  );
};

export default UniversidadesRec;
