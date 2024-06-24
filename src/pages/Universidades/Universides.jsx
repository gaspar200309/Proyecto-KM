import React from "react";
import "./universidades.css";
import ImagenesApp from "../../../src/assets/ImagenesApp";
import universidadesData from "./UniversidadesApp";
import ScrollToTop from "../../components/Scrooll";


const Universidades = () => {
  
  const academias = {};

  universidadesData.forEach((universidadesDat) => {
    if (!academias[universidadesDat.academia]) {
      academias[universidadesDat.academia] = [];
    }
    academias[universidadesDat.academia].push(universidadesDat);
  });

  return (
    <>
    <ScrollToTop></ScrollToTop>
      <div className="contenedorU">
        <div className="encabezadoU">
          <div className="imgUniversidades">
            <img
              src={ImagenesApp.imgFondo}
              alt="Fondo"
            />
          </div>
        </div>
        <div className="universidades">
          <h2 className="universidades">¿Dónde puedo estudiar?</h2>
          <p className="textoU">
            A continuación te presentamos información de universidades e
            institutos (públicos y privados) de la región metropolitano de la ciudad de
            Cochabamba:
          </p>
        </div>

        {Object.entries(academias).map(([academia, universidadesDa]) => (
          <div key={academia}>
            <h2 className="academia">{academia}</h2>
            <div className="container-cardU">
              {universidadesDa.map((universidad, idU) => (
                <div
                  className="cardU"
                  key={idU}>
                  <figure>
                    <img
                      src={universidad.info[0].imgU}
                      height="100px"
                      width="80px"
                      alt={universidad.nombre}
                    />
                  </figure>
                  <div className="contenido-cardU">
                    <h3>{universidad.nombre}</h3>
                    {universidad.info.map((info, infoIndex) => (
                      <div key={infoIndex}>
                        <p>{info.direccion}</p>
                        <p>{info.telefono}</p>
                        {info.fax && <p>{info.fax}</p>}
                        {info.correo && <p>{info.correo}</p>}
                        {info.cel && <p>{info.cel}</p>}
                        {info.wss && <p>{info.wss}</p>}
                        {info.enlace && (
                          <a
                            href={info.enlace}
                            target="_blank">
                            Visitar
                          </a>
                        )}
                      </div>
                    ))}
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

export default Universidades;
