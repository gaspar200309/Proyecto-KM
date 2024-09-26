import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBecas, deleteBeca } from '../../service/api';
//import './Listbecaes.css';

const Listbeca = () => {
    const [becas, setBecas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBecas();
  }, []);

  const fetchBecas  = async () => {
    try {
      const response = await getBecas();
      console.log(response.data)
      setBecas(response.data);
    } catch (error) {
        console.error("Error fetching becas", error);
    }
}


  const handleDelete = async (id) => {
    try {
      await deleteBeca(id);
      setBecas(becas.filter(bec => bec.id !== id));
    } catch (error) {
      console.error("Error deleting carrera", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Lista de Carreras</h1>
      <Link to="/beca/new" className="btn-create">Crear carrera</Link>
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
          {becas.map((beca) => (
            <tr key={beca._id}>
              <td>{beca.nombre}</td>
              <td>{beca.institucion}</td>
              <td>{beca.nivel}</td>
              <td>
                <Link to={`/editbeca/${beca._id}`} className="btn-edit">Editar</Link>
                <button className="btn-delete" onClick={() => handleDelete(beca._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listbeca;
