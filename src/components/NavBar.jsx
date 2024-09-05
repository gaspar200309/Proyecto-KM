import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav2.css';
import ImagenesApp from '../assets/ImagenesApp';

const NavBarReact = () => {
  return (
    <header>
      <div className="container2">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container2">
          <NavLink to="/">
            <img src={ImagenesApp.kawsay} alt="Logo" />
          </NavLink>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": ".6s" }}>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li className="nav-link" style={{ "--i": ".85s" }}>
                <NavLink to="/carrera">Carreras<i className="fas fa-caret-down"></i></NavLink>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#ÁREA DE SALUD">Área salud</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#ingenierias">Ingenierías</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#empresariales">Carreras empresariales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#tecnologicas">Carreras Tecnológicas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#sociales">Carreras sociales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#urbanismo">Urbanismo y territorio</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.1s" }}>
                <NavLink to="/facultad">Universidades<i className="fas fa-caret-down"></i></NavLink>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#universidades-publicas">Universidades públicas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#universidades-privadas">Universidades privadas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#normales">Normales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#institutos-publicos">Institutos públicos</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#institutos-privados">Institutos privados</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <NavLink to="/becas">Becas</NavLink>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              <li className='nav-link' style={{ "--i": "1.35s" }}>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarReact;