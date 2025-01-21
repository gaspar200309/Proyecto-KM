import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCareers, deleteCareer } from '../../service/api';
import { ToastContainer, toast } from 'react-toastify'; // Importar react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Estilos de react-toastify
import './ListUniversidades.css';

const ListCareer = () => {
  const [careers, setCareers] = useState([]);
  
  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await getCareers();
      console.log(response.data);
      setCareers(response.data.carreras);
    } catch (error) {
      console.error("Error fetching careers", error);
    }
  };

  const playSound = (type) => {
    const sound = new Audio(type === 'success' ? '/sounds/success.mp3' : '/sounds/error.mp3');
    sound.play();
  };

  const handleDelete = async (id) => {
    try {
      await deleteCareer(id);
      setCareers(careers.filter(career => career._id !== id));
      toast.success("Carrera eliminada exitosamente"); // Notificación de éxito
      playSound('success'); // Reproducir sonido de éxito
    } catch (error) {
      console.error("Error deleting carrera", error);
      toast.error("Hubo un error al eliminar la carrera"); // Notificación de error
      playSound('error'); // Reproducir sonido de error
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

      <ToastContainer /> {/* Contenedor para las notificaciones */}
    </div>
  );
};

export default ListCareer;
