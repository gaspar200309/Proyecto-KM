import { useEffect, useState, useMemo, useCallback, Suspense } from "react";
import "./universidades.css";
import ImagenesApp from "../../../src/assets/ImagenesApp";
import { getUniversidades } from "../../service/api";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";

const Universidades = () => {
  const [universidades, setUniversidades] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Uso de useEffect para hacer fetch de las universidades solo una vez
  useEffect(() => {
    const fetchUniversidades = async () => {
      try {
        const response = await getUniversidades();
        setUniversidades(response.data);
      } catch (error) {
        console.error("Error al obtener las universidades", error);
      }
    };
    fetchUniversidades();
  }, []);

  // Uso de useMemo para evitar recalcular academiasOrganizadas si universidades no cambia
  const academias = useMemo(() => {
    const academiasOrganizadas = {};
    universidades.forEach((universidad) => {
      const academia = universidad.tipoEscuela;
      if (academia !== "Instituto") {
        if (!academiasOrganizadas[academia]) {
          academiasOrganizadas[academia] = [];
        }
        academiasOrganizadas[academia].push(universidad);
      }
    });
    return academiasOrganizadas;
  }, [universidades]);

  // Uso de useMemo para filtrar universidades en base al valor de búsqueda
  const filteredUniversidades = useMemo(() => {
    if (!searchValue) {
      return universidades.filter((universidad) => universidad.tipoEscuela !== "institutos");
    }
    return universidades.filter(
      (universidad) =>
        universidad.nombre.toLowerCase().includes(searchValue.toLowerCase()) &&
        universidad.tipoEscuela !== "institutos"
    );
  }, [searchValue, universidades]);

  // Uso de useCallback para manejar el cambio en el campo de búsqueda
  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="contenedorU">
        <div className="encabezadoU">
          {/* Puedes agregar contenido adicional para el encabezado aquí */}
        </div>
        <div className="universidades">
          <h2>¿Dónde puedo estudiar?</h2>
          <p>
            A continuación te presentamos información de universidades (públicas y privadas) de la región
            metropolitana de Cochabamba:
          </p>
        </div>

        {/* Suspense para la carga diferida del componente Buscador */}
        <Suspense fallback={<div>Loading...</div>}>
          <Buscador searchValue={searchValue} onSearchChange={handleSearchChange} placeholder="Buscar universidades..." />
        </Suspense>

        {Object.entries(academias).map(([academia, universidades]) => (
          <div key={academia}>
            <h2 className="academia">{academia}</h2>
            <div className="container-cardU">
              {filteredUniversidades
                .filter((universidad) => universidad.tipoEscuela === academia)
                .map((universidad, idU) => (
                  <div className="cardU" key={idU}>
                    <figure>
                      <img
                        className="contenedorU-img"
                        src={universidad.logo}
                        height="100px"
                        width="80px"
                        alt={universidad.nombre}
                        loading="lazy" // Lazy load de las imágenes
                      />
                    </figure>
                    <div className="contenido-cardU">
                      <h3>{universidad.nombre}</h3>
                      {universidad.direcciones.map((direccion, idx) => (
                        <div key={idx}>
                          <p>
                            <span>Dirección:</span> {direccion.direccion}
                          </p>
                          {direccion.telefono && (
                            <p>
                              <span>Teléfono:</span> {direccion.telefono}
                            </p>
                          )}
                          {direccion.celular && (
                            <p>
                              <span>Celular:</span> {direccion.celular}
                            </p>
                          )}
                          {direccion.whatsapp && (
                            <p>
                              <span>WhatsApp:</span> {direccion.whatsapp}
                            </p>
                          )}
                          {direccion.correo && (
                            <p>
                              <span>Correo:</span> {direccion.correo}
                            </p>
                          )}
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
