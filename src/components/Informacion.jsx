import Logo from './../assets/logos/LogoKM.png'

export const Informacion = () => {
	return (
		<>
			<section className="nosotros contenedor" id="nosotros">
				<img src={Logo} alt="Kawsay Muju" />

				<div>
					<h2>ORIENTACIÓN VOCACIONAL</h2>
					<p className="texto-nosotros">
						Hola bienvenid@ a la página Profesiográfica Semillas. En este sitio encontrarás información sobre diferentes centros de
						educación superior y carreras que podrías estudiar.
					</p>
				</div>
			</section>
		</>
	)
}
