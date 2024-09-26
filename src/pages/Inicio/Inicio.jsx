import CarreraRecomendada from '../carreras/CarRecomendadas'
import UniversidadesRec from '../Universidades/UniversidadesRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import ImagenesApp from '../../assets/ImagenesApp'
import { Informacion } from '../../components/header/Informacion'

export const Inicio = () => {
  return (
    <>
      <Informacion/>
      <hr></hr>
      <CarreraRecomendada></CarreraRecomendada>
      <hr></hr>
      <UniversidadesRec></UniversidadesRec>
      <Contacto></Contacto>
    </>
  )
}

