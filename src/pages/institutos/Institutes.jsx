import { useEffect, useState, useMemo, useCallback, Suspense } from "react";
import "../Universidades/universidades.css";
import ImagenesApp from "../../../src/assets/ImagenesApp";
import { getUniversidades } from "../../service/api";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";

const Institutos = () => {
  const [institutos, setInstitutos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Uso de useEffect para hacer fetch de los institutos solo una vez
  useEffect(() => {
    const fetchInstitutos = async () => {
      try {
        const response = await getUniversidades();
        const universidadesData = response.data;

        // Filtrar solo institutos
        const institutosData = universidadesData.filter(
          (universidad) => universidad.tipoEscuela === "Instituto"
        );

        setInstitutos(institutosData);
      } catch (error) {
        console.error("Error al obtener los institutos", error);
      }
    };
    fetchInstitutos();
  }, []);

  // Uso de useMemo para filtrar institutos en base al valor de búsqueda
  const filteredInstitutos = useMemo(() => {
    if (!searchValue) {
      return institutos;
    }
    return institutos.filter((instituto) =>
      instituto.nombre.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, institutos]);

  // Uso de useCallback para manejar el cambio en el campo de búsqueda
  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="contenedorU">
        <div className="universidades">
          <h2 className="universidades">¿En qué instituto puedes estudiar?</h2>
          <p className="textoU">
            A continuación te presentamos información de institutos (públicos y privados) de la región metropolitana de la ciudad de
            Cochabamba:
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Buscador searchValue={searchValue} onSearchChange={handleSearchChange} placeholder="Buscar institutos..." />
        </Suspense>
        <div className="container-cardU">
          {filteredInstitutos.map((instituto, idU) => (
            <div className="cardU" key={idU}>
              <figure>
                <img
                  className="contenedorU-img"
                  src={instituto.logo}
                  height="100px"
                  width="80px"
                  alt={instituto.nombre}
                  loading="lazy"
                />
              </figure>
              <div className="contenido-cardU">
                <h3>{instituto.nombre}</h3>
                {instituto.direcciones.map((direccion, idx) => (
                  <div key={idx}>
                    <p><span>Dirección:</span> {direccion.direccion}</p>
                    {direccion.telefono && <p><span>Teléfono:</span> {direccion.telefono}</p>}
                    {direccion.celular && <p><span>Celular:</span> {direccion.celular}</p>}
                    {direccion.whatsapp && <p><span>WhatsApp:</span> {direccion.whatsapp}</p>}
                    {direccion.correo && <p><span>Correo:</span> {direccion.correo}</p>}
                  </div>
                ))}
                {instituto.enlace && (
                  <a href={instituto.enlace} target="_blank" rel="noopener noreferrer">
                    Visitar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Institutos;
