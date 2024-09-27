import React, { useState } from 'react';
import ScrollToTop from '../../components/scrooll/Scrooll';
import "./EstilosContacto.css"

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validarFormulario = () => {
    
    const nombreRegex = /^[a-zA-Z]{3,}$/;
    const correoRegex = /@gmail\.com$/;
    const telefonoRegex = /^[0-9]{8,}$/;

    if (!nombre.match(nombreRegex)) {
      alert('Por favor, ingrese un nombre válido.');
      return false;
    }

    if (!correo.match(correoRegex)) {
      alert('Por favor, ingrese un correo válido de Gmail (ejemplo: tucorreo@gmail.com).');
      return false;
    }

    if (!telefono.match(telefonoRegex)) {
      alert('Por favor, ingrese un número de teléfono válido con al menos 8 dígitos.');
      return false;
    }

    if (mensaje.length < 5) {
      alert('El mensaje debe tener al menos 5 caracteres.');
      return false;
    }

    return true;
  };

  return (
    <>
      <section className="contacto" id="contacto">
        <ScrollToTop></ScrollToTop>
        <h2>Contactanos</h2>
        <p>En caso de requerir mayor información sobre admisiones, fechas, entre otros, no dudes en consultar.</p>
        <div className="contenido-contacto">
          <div className="informacion-contacto">
            <h3>Información de contacto</h3>
            <p>fundacion44@gmail.com</p>
            <p>+591 62982552</p>
          </div>
          <form className="formulario-contacto" action="https://formsubmit.co/gaspararmando44@gmail.com" method="POST">
            <div className="input-contacto">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="input-contacto">
              <label htmlFor="correo">Correo</label>
              <input type="text" id="correo" placeholder="tucorreo@gmail.com" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className="input-contacto">
              <label htmlFor="telefono">Teléfono</label>
              <input type="number" id="telefono" placeholder="Ingrese su numero de telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="input-contacto">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
            </div>
            <div className="input-contacto">
              <input type="submit" value="Enviar" className="btnC" onClick={validarFormulario} />
            </div>
            <input type="hidden" name="_next" value="http://localhost:5173/"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="box"></input>
          </form>
        </div>
      </section>
    </>
  );
};
