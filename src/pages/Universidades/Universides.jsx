import React, { useEffect, useState } from "react";
import "./universidades.css";
import ImagenesApp from "../../../src/assets/ImagenesApp";
import { getUniversidades } from "../../service/api";
import ScrollToTop from "../../components/Scrooll";
import Buscador from "../../components/Buscador";

const Universidades = () => {
  const [universidades, setUniversidades] = useState([]);
  const [academias, setAcademias] = useState({});

  useEffect(() => {
    const fetchUniversidades = async () => {
      try {
        const response = await getUniversidades(); 
        const universidadesData = response.data;

        const academiasOrganizadas = {};
        universidadesData.forEach((universidad) => {
          const academia = universidad.tipoEscuela;
          if (!academiasOrganizadas[academia]) {
            academiasOrganizadas[academia] = [];
          }
          academiasOrganizadas[academia].push(universidad);
        });

        setUniversidades(universidadesData);
        setAcademias(academiasOrganizadas);
      } catch (error) {
        console.error("Error al obtener las universidades", error);
      }
    };

    fetchUniversidades();
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="contenedorU">
        <div className="encabezadoU">
          <div className="imgUniversidades">
            <img src={ImagenesApp.imgFondo} alt="Fondo" />
          </div>
        </div>
        <div className="universidades">
          <h2 className="universidades">¿Dónde puedo estudiar?</h2>
          <p className="textoU">
            A continuación te presentamos información de universidades e
            institutos (públicos y privados) de la región metropolitana de la ciudad de
            Cochabamba:
          </p>
        </div>
        <Buscador />
        {Object.entries(academias).map(([academia, universidades]) => (
          <div key={academia}>
            <h2 className="academia">{academia}</h2>
            <div className="container-cardU">
              {universidades.map((universidad, idU) => (
                <div className="cardU" key={idU}>
                  <figure>
                    <img
                      src={universidad.logo} 
                      height="100px"
                      width="80px"
                      alt={universidad.nombre}
                    />
                  </figure>
                  <div className="contenido-cardU">
                    <h3>{universidad.nombre}</h3>
                    {universidad.direcciones.map((direccion, idx) => (
                      <div key={idx}>
                        <p>Dirección: {direccion.direccion}</p>
                        {direccion.telefono && <p>Teléfono: {direccion.telefono}</p>}
                        {direccion.fax && <p>Fax: {direccion.fax}</p>}
                        {direccion.celular && <p>Celular: {direccion.celular}</p>}
                        {direccion.whatsapp && <p>WhatsApp: {direccion.whatsapp}</p>}
                        {direccion.correo && <p>Correo: {direccion.correo}</p>}
                      </div>
                    ))}
                    {universidad.enlace && (
                      <a href={universidad.enlace} target="_blank" rel="noopener noreferrer">
                        Visitar
                      </a>
                    )}
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
