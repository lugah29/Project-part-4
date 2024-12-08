import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src="projectlogo.png" alt="Logo" className="logo" />
      </div>
      
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signin" activeClassName="active">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
        </li>   

        <li>
         <NavLink to="/survey" activeClassName="active">Survey</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
