import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import NavBarReact from "./components/NavBar";
import { Inicio}  from "./pages/Inicio/Inicio";
import Universidades from "./pages/Universidades/Universides";
import Carrera from "./pages/carreras/Carrera";
import { Contacto } from "./pages/Contacto/Contacto";
import LoginUser from "./pages/login/LoginUser";
//import Chat from "./chat/Chat";
import Becas from "./pages/Becas/Becas";
import InformacionCarreras from "./pages/infoCarreras/InformacionCarreras";
import CareerForm from "./pages/forms/CareerForm";
import UniversidadForm from "./pages/forms/UniversidadForm";
import BecaForm from "./pages/forms/BecaForm";
import ListForms from "./pages/listForms/ListForms";

export const App2 = () => {

  return (
    <>
      <NavBarReact />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrera" element={<Carrera />} />
        {/* <Route path="/carrera/:area" element={<Carrera />} /> */}
        <Route path="/facultad" element={<Universidades />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path = "/login" element = {<LoginUser/>}/>
        <Route path="/becas" element={<Becas />} />

        <Route path="/carrera/:idCar" element={<InformacionCarreras />} />

        <Route path = "/listForm" element = {<ListForms/>}/>
        <Route path="/career/new" element= {<CareerForm/>}/>
        <Route path="/university/new" element= {<UniversidadForm/>}/>
        <Route path="/beca/new" element= {<BecaForm/>}/>

        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </>
  );
};
