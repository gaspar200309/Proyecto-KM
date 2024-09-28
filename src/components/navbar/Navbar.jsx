import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerMenu from './HamburgerMenu';
import './Nav2.css';

const NavBar = () => (
  <header>
    <div className="container2">
      <input type="checkbox" id="check" />
      <Logo />
      <nav className="nav-btn">
        <NavLinks />
      </nav>
      <HamburgerMenu />
    </div>
  </header>
);

export default NavBar;