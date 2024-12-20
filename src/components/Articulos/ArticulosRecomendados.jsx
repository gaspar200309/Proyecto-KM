import { CardArticulo } from '../card/CardArticulo'

import './Articulos.css'

export const ArticulosRecomendados = ({ sectionTitle, articles }) => {
	return (
		<div className="container-articulos">
			<h3>{sectionTitle}</h3>
			{articles.map((article, index) => (
				<CardArticulo
					key={index}
					titulo={article.title}
					descripcion={article.description}
					imagen={article.imageUrl}
					to={article.link}
				/>
			))}
		</div>
	)
}
