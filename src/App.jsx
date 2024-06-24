import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBarReact from "./components/NavBar";
import { Inicio}  from "./pages/Inicio/Inicio";
import Universidades from "./pages/Universidades/Universides";
import Carrera from "./pages/carreras/Carrera";
import { Contacto } from "./pages/Contacto/Contacto";
import Chat from "./chat/Chat";
import Becas from "./pages/Becas/Becas";
import InformacionCarreras from "./pages/infoCarreras/InformacionCarreras";

export const App2 = () => {

  return (
    <>
      <Chat></Chat>
      <NavBarReact />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrera" element={<Carrera />} />
        {/* <Route path="/carrera/:area" element={<Carrera />} /> */}
        <Route path="/facultad" element={<Universidades />} />
        <Route path="/contacto" element={<Contacto/>} />
        
        <Route path="/becas" element={<Becas />} />

        <Route path="/carrera/:idCar" element={<InformacionCarreras />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
