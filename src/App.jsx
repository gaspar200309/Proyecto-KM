import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import NavBarReact from "./components/NavBar";
import { Inicio}  from "./pages/Inicio/Inicio";
import Universidades from "./pages/Universidades/Universides";
import Carrera from "./pages/carreras/Carrera";
import { Contacto } from "./pages/Contacto/Contacto";
import LoginUser from "./pages/login/LoginUser";
import Chat from "./chat/Chat";
import Becas from "./pages/Becas/Becas";
import InformacionCarreras from "./pages/infoCarreras/InformacionCarreras";
import CareerForm from "./pages/forms/CareerForm";
import UniversidadForm from "./pages/forms/UniversidadForm";
import BecaForm from "./pages/forms/BecaForm";
import ListForms from "./pages/listForms/ListForms";
import ListUniversidades from './pages/list/ListUniversity';
import ListCareer from './pages/list/ListCareer';
import Listbeca from './pages/list/ListBecas';
import Institutos from './pages/institutos/Institutes';
import TestVocacional from './pages/testVocacional/TestVocacional';

export const App2 = () => {

  return (
    <>
      <NavBarReact />
      <Chat/>
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
        <Route path="/listUniversidades" element={<ListUniversidades/>}/>
        <Route path="/listCareers" element={<ListCareer/>}/>
        <Route path='/listBecas' element = {<Listbeca/>}/>
        <Route path="/instituto" element={<Institutos/>}/>
        <Route path="/testVocacional" element={<TestVocacional/>}/>

        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </>
  );
};
