// Hero.js
import React from 'react';
import herojpg from './img/hero.png';

const HeroHomePage = () => (
  <div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white animated slideInLeft">Descubra o sabor da vida<br />em cada receita.</h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">Transforme sua cozinha em um palco de sabores e emoções com nossas receitas inspiradoras.</p>
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img className="img-fluid" src={herojpg} alt="churrasqueira com carnes assando" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroHomePage;
