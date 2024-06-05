// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Rua Tiradentes, Guarapuava, BR</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+55 (42) 98888-8888</p>
          <p className="mb-2"><i className="fa fa-envelope me-3"></i>engs-brunobreitwisser@camporeal.edu.br</p>
          
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <Link to="/">Chef virtual</Link>, todos os direitos reservados.
            Criado por, <a>Bruno, Lucas, Moyses, Nathaly e João</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <Link to="/">Home</Link>
              <Link to="/menu">Receitas</Link>
              <Link to="/about">Quem somos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
