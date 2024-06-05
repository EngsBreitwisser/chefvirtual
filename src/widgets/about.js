import React from 'react';
import about1jpg from './img/about-1.jpg';
import about2jpg from './img/about-2.jpg';
import about3jpg from './img/about-3.jpg';
import about4jpg from './img/about-4.jpg';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1jpg} alt="restaurante 1" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about2jpg} alt="restaurante 2" style={{ marginTop: '25%' }} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3jpg} alt="restaurante 3" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4jpg} alt="restaurante 4" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Quem somos</h5>
            <h1 className="mb-4">Bem-vindos ao <i className="fa fa-utensils text-primary me-2"></i>Chef virtual</h1>
            <p className="mb-4">
              O Chefe Virtual é um site inovador que reúne as melhores receitas para todos os gostos e ocasiões. Com uma interface amigável e intuitiva, nosso objetivo é tornar a culinária acessível e divertida para todos, desde iniciantes até chefs experientes. No Chefe Virtual, você encontrará uma vasta coleção de receitas brasileiras, incluindo pratos salgados, sobremesas irresistíveis e bebidas refrescantes. Cada receita é cuidadosamente selecionada e apresentada com descrições detalhadas e fotos atraentes, facilitando o passo a passo do preparo.
            </p>
            <p className="mb-4">
              Além disso, oferecemos dicas exclusivas e truques de cozinha para ajudar você a aprimorar suas habilidades culinárias. Seja para um jantar especial, um lanche rápido ou um almoço em família, o Chefe Virtual é o seu parceiro perfeito na cozinha. Explore, cozinhe e desfrute das maravilhas da culinária com o Chefe Virtual!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
