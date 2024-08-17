import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
  <div className="logo-container2">
    <NavLink to="/">
      <img src="public/Logo.png" alt="Logo" />
    </NavLink>
  </div>
);

export default Logo;