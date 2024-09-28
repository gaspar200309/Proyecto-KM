import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const NavLinks = () => (
  <ul>
    <li className="nav-link" style={{ "--i": ".6s" }}>
      <NavLink to="/">Inicio</NavLink>
    </li>
    <li className="nav-link" style={{ "--i": ".85s" }}>
      <NavLink to="/carrera">
        Carreras <i className="fas fa-caret-down"></i>
      </NavLink>
      <Dropdown items={carreraItems} />
    </li>
    <li className="nav-link" style={{ "--i": "1.1s" }}>
      <NavLink to="/facultad">
        Universidades <i className="fas fa-caret-down"></i>
      </NavLink>
      <Dropdown items={universidadItems} />
    </li>
    <li className="nav-link" style={{ "--i": "1.35s" }}>
      <NavLink to="/instituto">Institutos</NavLink>
    </li>
    <li className="nav-link" style={{ "--i": "1.35s" }}>
      <NavLink to="/becas">Becas</NavLink>
    </li>
    <li className="nav-link" style={{ "--i": "1.35s" }}>
      <NavLink to="/contacto">Contacto</NavLink>
    </li>
    <li className="nav-link" style={{ "--i": "1.35s" }}>
      <NavLink to="/login">Login</NavLink>
    </li>
    
  </ul>
);

const carreraItems = [
  { path: "#", label: "Área salud" },
  { path: "#", label: "Ingenierías" },
  { path: "#", label: "Carreras empresariales" },
  { path: "#", label: "Carreras Tecnológicas" },
  { path: "#", label: "Carreras sociales" },
  { path: "#territorio", label: "Urbanismo y territorio" }
];

const universidadItems = [
  { path: "#", label: "Universidades públicas" },
  { path: "#", label: "Universidades privadas" },
  { path: "#", label: "Normales" },
  { path: "#", label: "Institutos públicos" },
  { path: "#", label: "Institutos privados" }
];

export default NavLinks;