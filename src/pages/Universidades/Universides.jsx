import React, { useEffect, useState, useMemo, useCallback, Suspense } from "react";
import "./universidades.css";
import ScrollToTop from "../../components/scrooll/Scrooll";
import Buscador from "../../components/search/Search";
import { getUniversidades } from "../../service/api";
import CardUniversity from "../../components/card/CardUniversity";

const Universidades = () => {
	const [universidades, setUniversidades] = useState([])
	const [searchValue, setSearchValue] = useState('')

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
      if (academia !== "Instituto") {
        if (!academiasOrganizadas[academia]) {
          academiasOrganizadas[academia] = [];
        }
        academiasOrganizadas[academia].push(universidad);
      }
    });
    return academiasOrganizadas;
  }, [universidades]);

  const filteredUniversidades = useMemo(() => {
    if (!searchValue) {
      return universidades.filter((u) => u.tipoEscuela !== "institutos");
    }
    return universidades.filter(
      (u) =>
        u.nombre.toLowerCase().includes(searchValue.toLowerCase()) &&
        u.tipoEscuela !== "institutos"
    );
  }, [searchValue, universidades]);

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <div className="contenedorU">
      <ScrollToTop />
      <div className="universidades">
        <h2>¿Dónde puedo estudiar?</h2>
        <p>Información de universidades públicas y privadas:</p>
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
              .filter((u) => u.tipoEscuela === academia)
              .map((u) => (
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
      ))}
    </div>
  );
};

export default Universidades
