import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

export const PieDePagina = () => {
	return (
		<>
			<div className="pie-pagina ">
				<div className="contenedor-piepagina contenedor">
					<div className="info">
						<h3>Dirección</h3>
						<p>
							C. Luis Castell N° 1900. <br />
							Frente al parque Teleferico-CBBA
						</p>
					</div>
					<div className="info">
						<h3>Menu</h3>
						<Link to="/">Inicio</Link>
						<Link to="/carrera">Carrera</Link>
						<Link to="/facultad">Universidades</Link>
						<Link to="/becas">Becas</Link>
						{/* <Link to="/">Contacto</Link> */}
					</div>
					<div className="info">
						<h3>Para otras informaciones</h3>
						{/* <p>Lunes: 08:30am - 18:30pm</p>
						<p>Martes: 08:30am - 18:30pm</p>
						<p>Miercoles: 08:30am - 18:30pm</p>
						<p>Jueves: 08:30am - 18:30pm</p> */}
						<div className="redes-sociales redes-pie">
							<a href="https://www.facebook.com/KawsayMuju"><FaFacebook className="redes-icons" /></a>
							<a href='https://www.facebook.com/KawsayMuju'><FaInstagramSquare className="redes-icons" /></a>
							<a href='https://www.facebook.com/KawsayMuju'><FaTiktok
className="redes-icons" /></a>
						</div>
					</div>
					<div className="info">
						<h3>Comentarios</h3>
						<p>Esta página esta en constante actualización, si tienes alguna sugerencia puedes dejar tu comentario</p>
						<input type="email" placeholder="Envía un comentario" />
						<input type="submit" className="btnF" value="ENVIAR" />
					</div>
				</div>
			</div>
			<footer className="footer">
				<div className="logo">
					<h2>Por buen futuro</h2>
				</div>
				<p>
					Todos los derechos reservados <span className="fecha"></span> &copy; Desarrollo por gaspar123
				</p>
			</footer>
		</>
	)
}
