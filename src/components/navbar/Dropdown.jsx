import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Dropdown = ({ items }) => (
  <div className="dropdown">
    <ul>
      {items.map((item, index) => (
        <li key={index} className="dropdown-link">
          <NavLink to={item.path}>{item.label}</NavLink>
        </li>
      ))}
      <div className="arrow"></div>
    </ul>
  </div>
);

export default Dropdown;