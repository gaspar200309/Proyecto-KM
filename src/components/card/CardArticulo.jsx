import { useNavigate } from 'react-router-dom'
import './CardArticulo.css'

import imagenPrueba from '../../assets/img/administracion.jpg'

export const CardArticulo = ({ imagen, titulo = '', descripcion, to }) => {
	const navigate = useNavigate()

	const redirigirToArticulo = () => {
		navigate({ to })
	}

	return (
		<a href={to} className="container-card-articulo">
			<div className="container-img-articulo">
				<img src={imagenPrueba} alt="" />
			</div>
			<div className="information-article">
				<h3>{titulo}</h3>
				<p>{descripcion}</p>
			</div>
		</a>
	)
}
