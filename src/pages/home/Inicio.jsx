import CarreraRecomendada from '../carreras/CarRecomendadas'
import UniversidadesRec from '../Universidades/UniversidadesRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import { Informacion } from '../../components/header/Informacion'
import InfTest from '../../components/testVocacionalDesc/InfTest'
import ScrollToTop from '../../components/scrooll/Scrooll'

export default function Inicio() {
	return (
		<>
			<ScrollToTop />
			<Informacion />
			<hr></hr>
			<CarreraRecomendada></CarreraRecomendada>
			<hr></hr>
			<UniversidadesRec></UniversidadesRec>
			{/* <InfTest/> */}
			{/* <Contacto/> */}
		</>
	)
}
