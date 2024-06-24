import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import './Nav2.css';

const NavBarReact = () => {
  return (
    <header>
      <div className="container2">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container2">
          <NavLink to="/">
            <img src="public/Logo.png" alt="" />
          </NavLink>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": ".6s" }}>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li className="nav-link" style={{ "--i": ".85s" }}>
                <NavLink to="carrera">Carreras<i className="fas fa-caret-down"></i></NavLink>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">Área salud</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Ingenierías</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Carreras empresariales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Carreras Tecnológicas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Carreras sociales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#territorio">Urbanismo y territorio</Link>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                  <div className="arrow"></div>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.1s" }}>
                <NavLink to="facultad">Universidades<i className="fas fa-caret-down"></i></NavLink>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <NavLink to="#">universidades publicas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Univeridades privadas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Normales</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Institutos publicas</NavLink>
                    </li>
                    <li className="dropdown-link">
                      <NavLink to="#">Institutos privadas</NavLink>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <NavLink to="becas">Becas</NavLink>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <NavLink to="contacto">Contacto</NavLink>
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
