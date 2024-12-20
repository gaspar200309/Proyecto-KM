import React, { useEffect, useState, useMemo, useCallback, Suspense } from "react";
import "./universidades.css";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";
import { getUniversidades } from "../../service/api";
import CardUniversity from "../../components/card/CardUniversity";

const Universidades = () => {
  const [universidades, setUniversidades] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [tipoEscuela, setTipoEscuela] = useState("Todos");

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

  const academias = useMemo(() => {
    const academiasOrganizadas = {};
    universidades.forEach((universidad) => {
      const academia = universidad.tipoEscuela;
      if (!academiasOrganizadas[academia]) {
        academiasOrganizadas[academia] = [];
      }
      academiasOrganizadas[academia].push(universidad);
    });
    return academiasOrganizadas;
  }, [universidades]);

  const filteredUniversidades = useMemo(() => {
    let result = universidades;

    if (searchValue) {
      result = result.filter((u) =>
        u.nombre.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (tipoEscuela !== "Todos") {
      result = result.filter((u) => u.tipoEscuela === tipoEscuela);
    }

    return result;
  }, [searchValue, tipoEscuela, universidades]);

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const handleTipoEscuelaClick = useCallback((tipo) => {
    setTipoEscuela(tipo);
  }, []);

  return (
    <div className="contenedorU">
      <ScrollToTop />
      <div className="universidades">
        <h2>¿Dónde puedo estudiar?</h2>
        <p>
          Encuentra toda la información que necesitas para elegir el lugar ideal para continuar tu formación académica. Aquí te mostramos un catálogo completo de universidades públicas y privadas, con detalles sobre sus programas, ubicaciones, y cómo contactarlas. Tanto si buscas instituciones de prestigio nacional como alternativas accesibles en tu área, esta guía te ayudará a tomar decisiones informadas sobre tu futuro educativo. Explora las distintas opciones disponibles y descubre las oportunidades que se ajustan a tus metas y necesidades.
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Buscador
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          placeholder="Buscar universidades..."
        />
      </Suspense>

      {/* Barra de paginación por tipo de escuela */}
      <div className="paginacion-tipo-escuela">
        <button
          className={`tipo-escuela ${tipoEscuela === "Todos" ? "active" : ""}`}
          onClick={() => handleTipoEscuelaClick("Todos")}
        >
          Todos
        </button>
        {Object.keys(academias).map((tipo) => (
          <button
            key={tipo}
            className={`tipo-escuela ${tipoEscuela === tipo ? "active" : ""}`}
            onClick={() => handleTipoEscuelaClick(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      {Object.entries(academias).map(([academia, universidades]) => {
        const filteredByAcademia = filteredUniversidades.filter(
          (u) => u.tipoEscuela === academia
        );

        if (filteredByAcademia.length === 0) {
          return null;
        }

        return (
          <div key={academia}>
            <h2 className="academia">{academia}</h2>
            <div className="container-cardU">
              {filteredByAcademia.map((u) => (
                <CardUniversity
                  key={u.id}
                  logo={u.logo}
                  nombre={u.nombre}
                  direcciones={u.direcciones}
                  enlace={u.enlace}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Universidades;
