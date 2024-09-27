import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCareers, deleteCareer } from '../../service/api';
//import './Listcareeres.css';

const ListCareer = () => {
    const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers  = async () => {
    try {
      const response = await getCareers();
      console.log(response.data)
      setCareers(response.data);
    } catch (error) {
        console.error("Error fetching careers", error);
    }
}


  const handleDelete = async (id) => {
    try {
      await deleteCareer(id);
      setCareers(careers.filter(univ => univ.id !== id));
    } catch (error) {
      console.error("Error deleting carrera", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Lista de Carreras</h1>
      <Link to="/career/new" className="btn-create">Crear carrera</Link>
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
          {careers.map((career) => (
            <tr key={career._id}>
              <td>{career.titulo}</td>
              <td>{career.area}</td>
              <td>{career.nivel}</td>
              <td>
                <Link to={`/editcareer/${career._id}`} className="btn-edit">Editar</Link>
                <button className="btn-delete" onClick={() => handleDelete(career._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCareer;
