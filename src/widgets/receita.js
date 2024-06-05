import React from 'react';
import { Link } from 'react-router-dom';
import receitaImage from './img/brigadeiro.jpg'; 
import Favoritar from './favoritar';

const ReceitaDetalhes = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={receitaImage} alt="receita escolhida" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="mb-4">Ingredientes</h1>
            <ul>
              <li>1 caixa de leite condensado</li>
              <li>1 colher (sopa) de margarina sem sal</li>
              <li>chocolate granulado</li>
              <li>7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó</li>
            </ul>
            <h1 className="mb-4">Modo de preparo</h1>
            <ol>
              <li>Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.</li>
              <li>Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.</li>
              <li>Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.</li>
            </ol>
            <br />
            <br />
            <br />
            <div className="ps-3">
              <h6 className="mt-n1 mb-0">Receita de</h6>
              <small className="text-body">Bruno Breitwisser</small>
            </div>
        <br></br>
        <br></br>
        <div className="position-relative" style={{ maxWidth: '300px'}}>
            <Favoritar/>
          <Link to="/menu" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"><a>Voltar as receitas</a></Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceitaDetalhes;
