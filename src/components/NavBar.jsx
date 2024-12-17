import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav2.css'
import Buscador from './Buscador.jsx'
import { IoIosArrowDown } from 'react-icons/io'

//Components
import { NextPage } from './Buttons/NextPage.jsx'

//Assets
import LogoKM from '../assets/logos/LogoKM.png'

const NavBarReact = React.memo(() => {
	const location = useLocation()
	const [isMenuOpen, setMenuOpen] = useState(false)
	const shouldShowBuscador = location.pathname === '/'

	const menuItems = [
		{
			label: 'Inicio',
			to: '/',
		},
		{
			label: 'Carreras',
			to: '/carrera',
			subMenu: [
				{ label: 'Área salud', to: '/carrera#salud' },
				// { label: 'Ingenierías', to: '#tecnologia' },
				// { label: 'Carreras empresariales', to: '#' },
				{ label: 'Carreras Tecnológicas', to: '/carrera#tecnologia' },
				{ label: 'Area economica', to: '/carrera#economia' },
				{ label: 'Urbanismo y territorio', to: '/carrera#territorio' },
			],
		},
		/* {
      label: 'Universidades',
      to: '/facultad',
      subMenu: [
        { label: 'Universidades públicas', to: '#' },
        { label: 'Universidades privadas', to: '#' },
        { label: 'Normales', to: '#' },
      ],
    },
    {
      label: 'Institutos',
      to: '/instituto',
      subMenu: [
        { label: 'Institutos públicos', to: '#' },
        { label: 'Institutos privados', to: '#' },
        ],
    }, */
		{
			label: 'Donde estudiar',
			to: '/instituto',
			subMenu: [
				{ label: 'Universidades', to: '#' },
				{ label: 'Institutos', to: '#' },
				{ label: 'Institutos policiales', to: '#' },
				{ label: 'Normales', to: '#' },
			],
		},
		{
			label: 'Becas',
			to: '/becas',
		},
	]

	const toggleMenu = () => setMenuOpen((prev) => !prev)
	const closeMenu = () => setMenuOpen(false)

	const renderMenu = (items) =>
		items.map((item, index) => (
			<li className="nav-link" style={{ '--i': `${0.6 + index * 0.25}s` }} key={item.label}>
				<div className="navbar-sections">
					<NavLink to={item.to} onClick={closeMenu}>
						{item.label} {(item.label == 'Carreras' || item.label == 'Donde estudiar') && <IoIosArrowDown className="arrowDown" />}
						{item.subMenu && <i className="fas fa-caret-down"></i>}
					</NavLink>
				</div>
				{item.subMenu && (
					<div className="dropdown">
						<ul>
							{item.subMenu.map((subItem) => (
								<li className="dropdown-link" key={subItem.label}>
									<a href={subItem.to} onClick={closeMenu}>
										{subItem.label}
									</a>
								</li>
							))}
							<div className="arrow"></div>
						</ul>
					</div>
				)}
			</li>
		))

	return (
		<header>
			<div className="container2">
				{/* <div className="search-bar">{shouldShowBuscador && <Buscador />}</div> */}
				<div className="logo-KM-navbar">
					<img src={LogoKM} alt="Logo KM" />
				</div>
				<input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} aria-label="Toggle menu" />
				<div className="nav-btn">
					<div className="nav-links">
						<ul>{renderMenu(menuItems)}</ul>
					</div>
					<div className="search-bar">
						{shouldShowBuscador && (
							<Buscador
								updateFilteredCarreras={(data) => {
									console.log('Resultados recibidos:', data)
									updateFilteredCarreras(data)
								}}
							/>
						)}
					</div>
					<div className="btn-ingresar">
						<NextPage to="/login" value="Ingresar" className="btn-ingresar" />
					</div>
				</div>
				<div className="hamburger-menu-container">
					<button className="hamburger-menu" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu">
						<div></div>
					</button>
				</div>
			</div>
		</header>
	)
})

export default NavBarReact
