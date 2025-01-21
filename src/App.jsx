import React, { lazy, Suspense } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBarReact from './components/NavBar';
import Chat from './chat/Chat';

const Inicio = lazy(() => import('./pages/home/Inicio'));
const Universidades = lazy(() => import('./pages/Universidades/Universides'));
const Carrera = lazy(() => import('./pages/carreras/Carrera'));
const Contacto = lazy(() => import('./pages/Contacto/Contacto'));
const LoginUser = lazy(() => import('./pages/login/LoginUser'));
const Becas = lazy(() => import('./pages/Becas/Becas'));
const InformacionCarreras = lazy(() => import('./pages/infoCarreras/InformacionCarreras'));
const CareerForm = lazy(() => import('./pages/forms/CareerForm'));
const UniversidadForm = lazy(() => import('./pages/forms/UniversidadForm'));
const BecaForm = lazy(() => import('./pages/forms/BecaForm'));
const ListForms = lazy(() => import('./pages/listForms/ListForms'));
const ListUniversidades = lazy(() => import('./pages/list/ListUniversity'));
const ListCareer = lazy(() => import('./pages/list/ListCareer'));
const ListBecas = lazy(() => import('./pages/list/ListBecas'));
const Institutos = lazy(() => import('./pages/institutos/Institutes'));

export const App2 = () => {
  return (
    <>
      <NavBarReact />
      <Chat />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carrera" element={<Carrera />} />
          <Route path="/facultad" element={<Universidades />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/becas" element={<Becas />} />
          <Route path="/carrera/:idCar" element={<InformacionCarreras />} />
          <Route path="/listForm" element={<ListForms />} />
          <Route path="/career/new" element={<CareerForm />} />
          <Route path="/editcareer/:id" element={<CareerForm />} />

          <Route path="/university/new" element={<UniversidadForm />} />
          <Route path="/editUniversidad/:id" element={<UniversidadForm />} />

          <Route path="/beca/new" element={<BecaForm />} />
          <Route path="/editBeca/:id" element={<BecaForm />} />

          <Route path="/listUniversidades" element={<ListUniversidades />} />
          <Route path="/listCareers" element={<ListCareer />} />
          <Route path="/listBecas" element={<ListBecas />} />
          <Route path="/instituto" element={<Institutos />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
