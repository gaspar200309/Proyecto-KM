import React from 'react'
import CarreraRecomendada from '../carreras/CarRecomendadas'
import UniversidadesRec from '../Universidades/UniversidadesRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import { Informacion } from '../../components/Informacion'
import ImagenesApp from '../../assets/ImagenesApp'

export const Inicio = () => {
  return (
    <>
      <img src = {ImagenesApp.imgFondo} className='fondo'></img>
      <Informacion></Informacion>
      <hr></hr>
      <CarreraRecomendada></CarreraRecomendada>
      <hr></hr>
      <UniversidadesRec></UniversidadesRec>
      <Contacto></Contacto>
    </>
  )
}

