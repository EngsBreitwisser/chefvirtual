import { NavLink } from 'react-router-dom';
import React from 'react';
import moquecaImg from './img/moquecadepeixe.jpg';
import escondidinhoImg from './img/escondidinho.jpg';
import brigadeiroImg from './img/brigadeiro.jpg';

const ReceitasFavoritas  = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">♡</h5>
          <h1 className="mb-5">Receitas Favoritas</h1>
          <ul id="favorite-recipes-list" className="list-group">
          <li><div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={moquecaImg} alt="moqueca de peixe" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Moqueca de peixe</a>
                    </h5>
                    <small className="fst-italic">Uma deliciosa iguaria do litoral, com peixe cozido em leite de coco, pimentões e temperos frescos, transportando você direto para as praias brasileiras.</small>
                  </div>
                </div>
              </div></li>
              <br/>
              <br/>
              <li><div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={escondidinhoImg} alt="escondidinho de carne seca" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Escondidinho de carne seca</a>
                    </h5>
                    <small className="fst-italic">Um cremoso purê de mandioca cobrindo uma camada suculenta de carne seca desfiada, proporcionando uma explosão de sabores em cada garfada.</small>
                  </div>
                </div>
              </div></li>
              <br/>
              <br/>
              <li>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={brigadeiroImg} alt="brigadeiro" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      {/* <a href="" className="nav-item nav-link">Brigadeiro</a> */}
                      <NavLink to="/receita" className="nav-item nav-link">Brigadeiro</NavLink>
                    </h5>
                    <small className="fst-italic">Pequenas bolas de chocolate cremoso e granulados, um clássico brasileiro que derrete na boca e é perfeito para qualquer ocasião.</small>
                  </div>
                </div>
              </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceitasFavoritas;