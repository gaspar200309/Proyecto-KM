import { useNavigate } from 'react-router-dom';
import './CardArticulo.css';

export const CardArticulo = ({ imagen, titulo = '', descripcion, to }) => {
    const navigate = useNavigate();

    const redirigirToArticulo = (e) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a href={to} className="container-card-articulo" onClick={redirigirToArticulo}>
            <div className="container-img-articulo">
                <img src={imagen} alt={titulo} />
            </div>
            <div className="information-article">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </a>
    );
};
