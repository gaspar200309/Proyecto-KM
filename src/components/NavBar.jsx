import { NavLink, Link, useLocation } from 'react-router-dom'
import { Button } from './Buttons/button.jsx'
import './Nav2.css'
import Buscador from './Buscador.jsx'
import { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'

const NavBarReact = () => {
	const location = useLocation()
	const [isMenuOpen, setMenuOpen] = useState(false)

	const shouldShowBuscador = location.pathname === '/'

	// Función para cerrar el menú
	const closeMenu = () => setMenuOpen(false)

	return (
		<header>
			<div className="container2">
				<input
					type="checkbox"
					id="check"
					checked={isMenuOpen}
					onChange={() => setMenuOpen(!isMenuOpen)} // Toggle del menú
				/>
				<div className="nav-btn">
					<div className="nav-links">
						<ul>
							<li className="nav-link" style={{ '--i': '.6s' }}>
								<NavLink to="/" onClick={closeMenu}>
									Inicio
								</NavLink>
							</li>
							<li className="nav-link" style={{ '--i': '.85s' }}>
								<NavLink to="/carrera" onClick={closeMenu}>
									Carreras <IoIosArrowDown className='arrow-down'/> <i className="fas fa-caret-down"></i>
								</NavLink>
								<div className="dropdown">
									<ul>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Área salud
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Ingenierías
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Carreras empresariales
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Carreras Tecnológicas
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Carreras sociales
											</NavLink>
										</li>
										<li className="dropdown-link">
											<Link to="#territorio" onClick={closeMenu}>
												Urbanismo y territorio
											</Link>
										</li>
										<div className="arrow"></div>
									</ul>
									<div className="arrow"></div>
								</div>
							</li>
							<li className="nav-link" style={{ '--i': '1.1s' }}>
								<NavLink to="/facultad" onClick={closeMenu}>
									Universidades <IoIosArrowDown className='arrow-down'/>
									<i className="fas fa-caret-down"></i>
								</NavLink>
								<div className="dropdown">
									<ul>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Universidades públicas
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Universidades privadas
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Normales
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Institutos públicos
											</NavLink>
										</li>
										<li className="dropdown-link">
											<NavLink to="#" onClick={closeMenu}>
												Institutos privados
											</NavLink>
										</li>
										<div className="arrow"></div>
									</ul>
								</div>
							</li>
							<li className="nav-link" style={{ '--i': '1.35s' }}>
								<Link to="/instituto" onClick={closeMenu}>
									Institutos
								</Link>
							</li>
							<li className="nav-link" style={{ '--i': '1.35s' }}>
								<NavLink to="/becas" onClick={closeMenu}>
									Becas
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<ul className="navBar-search">
							{shouldShowBuscador && (
								<li>
									<Buscador />
								</li>
							)}
							{/* <li className="nav-link" style={{ '--i': '1.35s' }}>
                <NavLink to="/login" onClick={closeMenu}>
                  <Button texto="Ingresar" />
                </NavLink>
              </li> */}
						</ul>
					</div>
				</div>

				<div className="hamburger-menu-container">
					<div className="hamburger-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
						<div></div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default NavBarReact
