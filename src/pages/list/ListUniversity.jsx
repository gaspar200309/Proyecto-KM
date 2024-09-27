import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUniversidades, deleteUniversidad } from '../../service/api';
import './ListUniversidades.css';

const ListUniversidades = () => {
  const [universidades, setUniversidades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUniversidades();
  }, []);

  const fetchUniversidades = async () => {
    try {
      const response = await getUniversidades();
      console.log(response.data)
      setUniversidades(response.data);
    } catch (error) {
      console.error("Error fetching universidades", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUniversidad(id);
      setUniversidades(universidades.filter(univ => univ.id !== id));
    } catch (error) {
      console.error("Error deleting universidad", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Lista de Universidades</h1>
      <Link to="/createUniversidad" className="btn-create">Crear Universidad</Link>
      <table className="universidades-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Pública/Privada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {universidades.map((universidad) => (
            <tr key={universidad._id}>
              <td>{universidad.nombre}</td>
              <td>{universidad.tipoEscuela}</td>
              <td>{universidad.esPublica === 'publica' ? 'Pública' : 'Privada'}</td>
              <td>
                <Link to={`/editUniversidad/${universidad._id}`} className="btn-edit">Editar</Link>
                <button className="btn-delete" onClick={() => handleDelete(universidad._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUniversidades;
