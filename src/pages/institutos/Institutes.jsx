import { useEffect, useState } from "react";
import "./universidades.css";
import { getUniversidades } from "../../service/api";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";
import ImagenesApp from "../../assets/ImagenesApp";

const Institutos = () => {
  const [institutos, setInstitutos] = useState([]);
  const [filteredInstitutos, setFilteredInstitutos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
        setFilteredInstitutos(institutosData); // Inicializar el estado filtrado
      } catch (error) {
        console.error("Error al obtener los institutos", error);
      }
    };

    fetchInstitutos();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const filtered = institutos.filter((instituto) =>
        instituto.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredInstitutos(filtered);
    } else {
      setFilteredInstitutos(institutos);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="contenedorU">
        
        <div className="universidades">
          <h2 className="universidades">¿En que instituto puedes estudiar?</h2>
          <p className="textoU">
            A continuación te presentamos información de institutos (públicos y privados) de la región metropolitana de la ciudad de
            Cochabamba:
          </p>
        </div>
        <Buscador 
          searchValue={searchValue} 
          onSearchChange={handleSearchChange} 
          placeholder="Buscar institutos..."
        />
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
