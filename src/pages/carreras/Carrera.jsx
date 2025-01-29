import './Carrera.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import { getCareers } from '../../service/api';
import SearchBar from '../../components/search/Search';
import ScrollToTop from '../../components/scrooll/Scrooll';
import Card from '../../components/card/Card';

const Carrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [areaFilter, setAreaFilter] = useState('');
  const [nivelFilter, setNivelFilter] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastCardRef = useRef();
  const pageSize = 8;

  const fetchCareers = async (page) => {
    try {
      setLoading(true);
      const res = await getCareers({ page, limit: pageSize });
      const response = res.data;

      setCarreras((prev) => {
        const combined = [...prev, ...response.carreras];
        return Array.from(new Set(combined.map((c) => c._id))).map((id) =>
          combined.find((carrera) => carrera._id === id)
        );
      });

      setHasMore(response.carreras.length === pageSize);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers(page);
  }, [page]);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (lastCardRef.current) observer.current.observe(lastCardRef.current);
  }, [loading, hasMore]);

  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleAreaChange = (event) => setAreaFilter(event.target.value);
  const handleNivelChange = (event) => setNivelFilter(event.target.value);

  const filteredCarreras = useMemo(
    () =>
      carreras.filter((carrera) => {
        const matchesSearch = carrera.titulo.toLowerCase().includes(search.toLowerCase());
        const matchesArea = areaFilter ? carrera.area === areaFilter : true;
        const matchesNivel = nivelFilter ? carrera.nivel === nivelFilter : true;
        return matchesSearch && matchesArea && matchesNivel;
      }),
    [carreras, search, areaFilter, nivelFilter]
  );

  const groupedCarreras = useMemo(
    () =>
      Object.entries(
        filteredCarreras.reduce((acc, carrera) => {
          if (!acc[carrera.area]) acc[carrera.area] = {};
          if (!acc[carrera.area][carrera.nivel]) acc[carrera.area][carrera.nivel] = [];
          acc[carrera.area][carrera.nivel].push(carrera);
          return acc;
        }, {})
      ),
    [filteredCarreras]
  );

  const uniqueAreas = useMemo(() => [...new Set(carreras.map((carrera) => carrera.area))], [carreras]);
  const uniqueNiveles = useMemo(() => [...new Set(carreras.map((carrera) => carrera.nivel))], [carreras]);

  if (error) return <p>Error al cargar carreras: {error}</p>;

  return (
    <>
      <ScrollToTop />
      <SearchBar searchValue={search} onSearchChange={handleSearchChange} placeholder="Buscar Carreras" />
      <div className="filters">
        <label>
          Área:
          <select value={areaFilter} onChange={handleAreaChange}>
            <option value="">Todas</option>
            {uniqueAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
        <label>
          Nivel:
          <select value={nivelFilter} onChange={handleNivelChange}>
            <option value="">Todos</option>
            {uniqueNiveles.map((nivel) => (
              <option key={nivel} value={nivel}>
                {nivel.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        {groupedCarreras.length === 0 ? (
          <p>No se encontraron carreras.</p>
        ) : (
          groupedCarreras.map(([area, niveles]) => (
            <div key={area} className={`areas ${area.toLowerCase().replace(/\s+/g, '-')}`}>
              <h2 className="titulo-area">{area}</h2>
              {Object.entries(niveles).map(([nivel, carrerasEnNivel]) => (
                <div key={nivel} className="nivel-group">
                  <h4 className='nivelTitle'>{nivel.replace('-', ' ').toUpperCase()}</h4>
                  <div className="container-card">
                    {carrerasEnNivel.map((carrera, index) => {
                      const isLastCard = carrerasEnNivel.length === index + 1;
                      return (
                        <Card
                          ref={isLastCard ? lastCardRef : null}
                          key={carrera._id}
                          imgSrc={carrera.imgSrc}
                          titulo={carrera.titulo}
                          descripcion={carrera.descripcion}
                          id={carrera._id}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Carrera;
