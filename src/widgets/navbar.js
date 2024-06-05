import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Chef virtual</h1>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink to="/" className="nav-item nav-link text-black">Home</NavLink>
          <NavLink to="/menu" className="nav-item nav-link text-black">Receitas</NavLink>
          <NavLink to="/about" className="nav-item nav-link text-black">Quem somos</NavLink>
          <NavLink to="/user" className="nav-item nav-link text-black">Meu perfil</NavLink>
          <NavLink to="/login" className="nav-item nav-link text-black">Sair</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
