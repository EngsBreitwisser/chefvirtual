// Team.js
import React from 'react';
import brunojpg from './img/bruno.jpg';
import lucasjpg from './img/lucas.jpg';
import moysesjpg from './img/moyses.jpg';
import nathalyjpg from './img/nathaly.jpg';
import joaojpg from './img/joao.jpg';

const Team = () => (
  <div className="container-xxl pt-5 pb-3">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Nosso time</h5>
        <h1 className="mb-5">Master Chefs</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={brunojpg} alt="foto de Bruno Breitwisser" />
            </div>
            <h5 className="mb-0">Bruno Breitwisser</h5>
            <small>Chefe de cozinha</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={lucasjpg} alt="foto de Lucas Kaminski" />
            </div>
            <h5 className="mb-0">Lucas Kaminski</h5>
            <small>Chefe de cozinha</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={moysesjpg} alt="foto de Moyses Kaminski" />
            </div>
            <h5 className="mb-0">Moyses Kaminski</h5>
            <small>Chefe de cozinha</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={nathalyjpg} alt="foto de Nathaly Hoffmann" />
            </div>
            <h5 className="mb-0">Nathaly Hoffmann</h5>
            <small>Chefe de cozinha</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src={joaojpg} alt="foto de João Victor" />
            </div>
            <h5 className="mb-0">João Victor</h5>
            <small>Chefe de cozinha</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
