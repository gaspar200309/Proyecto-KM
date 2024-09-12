import CarreraRecomendada from '../carreras/CarRecomendadas'
import UniversidadesRec from '../Universidades/UniversidadesRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import { Informacion } from '../../components/Informacion'

export const Inicio = () => {
  return (
    <>
      <Informacion></Informacion>
      <hr></hr>
      <CarreraRecomendada></CarreraRecomendada>
      <hr></hr>
      <UniversidadesRec></UniversidadesRec>
      <Contacto></Contacto>
    </>
  )
}

