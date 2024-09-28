import CarreraRecomendada from '../carreras/CarRecomendadas'
import UniversidadesRec from '../Universidades/UniversidadesRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import { Informacion } from '../../components/header/Informacion'
import InfTest from '../../components/testVocacionalDesc/InfTest'

export const Inicio = () => {
  return (
    <>
      <Informacion/>
      <hr></hr>
      <CarreraRecomendada></CarreraRecomendada>
      <hr></hr>
      <UniversidadesRec></UniversidadesRec>
      <InfTest/>
      <Contacto/>
    </>
  )
}

