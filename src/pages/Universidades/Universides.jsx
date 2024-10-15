import { useEffect, useState } from "react";
import "./universidades.css";
import ImagenesApp from "../../../src/assets/ImagenesApp";
import { getUniversidades } from "../../service/api";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";

const Universidades = () => {
  const [universidades, setUniversidades] = useState([]);
  const [filteredUniversidades, setFilteredUniversidades] = useState([]);
  const [academias, setAcademias] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchUniversidades = async () => {
      try {
        const response = await getUniversidades(); 
        const universidadesData = response.data;

        const academiasOrganizadas = {};
        universidadesData.forEach((universidad) => {
          const academia = universidad.tipoEscuela;
          // Excluimos "institutos" de la organización
          if (academia !== "Instituto") {
            if (!academiasOrganizadas[academia]) {
              academiasOrganizadas[academia] = [];
            }
            academiasOrganizadas[academia].push(universidad);
          }
        });

        setUniversidades(universidadesData);
        setFilteredUniversidades(universidadesData.filter(universidad => universidad.tipoEscuela !== "institutos")); // Inicializar el estado filtrado
        setAcademias(academiasOrganizadas);
      } catch (error) {
        console.error("Error al obtener las universidades", error);
      }
    };

    fetchUniversidades();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const filtered = universidades.filter((universidad) =>
        universidad.nombre.toLowerCase().includes(value.toLowerCase()) && universidad.tipoEscuela !== "institutos" // Filtrar también aquí
      );
      setFilteredUniversidades(filtered);
    } else {
      setFilteredUniversidades(universidades.filter(universidad => universidad.tipoEscuela !== "institutos")); // Asegúrate de que solo se muestre universidades
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="contenedorU">
        <div className="encabezadoU">
          {/* Aquí puedes añadir contenido adicional para el encabezado */}
        </div>
        <div className="universidades">
          <h2 className="universidades">¿Dónde puedo estudiar?</h2>
          <p className="textoU">
            A continuación te presentamos información de universidades (públicas y privadas) de la región metropolitana de la ciudad de
            Cochabamba:
          </p>
        </div>
        <Buscador 
          searchValue={searchValue} 
          onSearchChange={handleSearchChange} 
          placeholder="Buscar universidades..."
        />
        {Object.entries(academias).map(([academia, universidades]) => (
          <div key={academia}>
            <h2 className="academia">{academia}</h2>
            <div className="container-cardU">
              {filteredUniversidades.filter(universidad => universidad.tipoEscuela === academia).map((universidad, idU) => (
                <div className="cardU" key={idU}>
                  <figure>
                    <img
                      className="contenedorU-img"
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
                        <p><span>Dirección:</span> {direccion.direccion}</p>
                        {direccion.telefono && <p><span>Teléfono:</span> {direccion.telefono}</p>}
                        {direccion.celular && <p><span>Celular:</span> {direccion.celular}</p>}
                        {direccion.whatsapp && <p><span>WhatsApp:</span> {direccion.whatsapp}</p>}
                        {direccion.correo && <p><span>Correo:</span> {direccion.correo}</p>}
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
