import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Cripto Web
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link" aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/movimientos' className="nav-link" href="#">
                Movimientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/mercado' className="nav-link" href="#">
                Mercado
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/login' className="nav-link" href="#">
                Iniciar Sesion / Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
