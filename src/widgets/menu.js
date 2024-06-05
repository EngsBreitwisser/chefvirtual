// Menu.js
import { NavLink } from 'react-router-dom';
import React from 'react';
import feijoadaImg from './img/feijoada.jpg';
import moquecaImg from './img/moquecadepeixe.jpg';
import escondidinhoImg from './img/escondidinho.jpg';
import acarajeImg from './img/acaraje.jpg';
import brigadeiroImg from './img/brigadeiro.jpg';
import pudimImg from './img/pudim.jpg';
import quindimImg from './img/quindim.jpg';
import boloderoloImg from './img/boloderolo.jpg';
import caipirinhaImg from './img/caipirinha.jpg';
import batidadecocoImg from './img/batidadecoco.jpg';
import cajuinaImg from './img/cajuina.jpg';
import caldodecanaImg from './img/caldodecana.jpg';


const Menu = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Receitas</h5>
        <h1 className="mb-5">Escolha sua receita</h1>
      </div>
      <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">        
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={feijoadaImg} alt="Feijoada" style={{ width: '80px' }} />

                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">                    
                      <a href="" className="nav-item nav-link">Feijoada</a>
                    </h5>
                    <small className="fst-italic">Um prato robusto e saboroso, feito com uma variedade de carnes suínas e feijão preto, perfeito para um almoço de domingo.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={moquecaImg} alt="moqueca de peixe" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Moqueca de peixe</a>
                    </h5>
                    <small className="fst-italic">Uma deliciosa iguaria do litoral, com peixe cozido em leite de coco, pimentões e temperos frescos, transportando você direto para as praias brasileiras.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={escondidinhoImg} alt="escondidinho de carne seca" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Escondidinho de carne seca</a>
                    </h5>
                    <small className="fst-italic">Um cremoso purê de mandioca cobrindo uma camada suculenta de carne seca desfiada, proporcionando uma explosão de sabores em cada garfada.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={acarajeImg} alt="acarajé" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Acarajé</a>
                    </h5>
                    <small className="fst-italic">Bolinho crocante de feijão-fradinho, recheado com vatapá e camarão seco, que traz o verdadeiro sabor da Bahia.</small>
                  </div>
                </div>
              </div>
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
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={pudimImg} alt="pudim de leite condensado" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Pudim de leite condensado</a>
                    </h5>
                    <small className="fst-italic">Uma sobremesa suave e aveludada, com uma calda de caramelo que adiciona um toque doce e irresistível.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={quindimImg} alt="quindim" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Quindim</a>
                    </h5>
                    <small className="fst-italic">Delicado e brilhante, esse doce de gema de ovo e coco é uma verdadeira joia da confeitaria brasileira.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={boloderoloImg} alt="bolo de rolo" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Bolo de rolo</a>
                    </h5>
                    <small className="fst-italic">Finas camadas de massa enroladas com goiabada, criando um bolo visualmente impressionante e delicioso em cada mordida.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={caipirinhaImg} alt="caipirinha" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Caipirinha</a>
                    </h5>
                    <small className="fst-italic">A clássica e refrescante mistura de cachaça, limão, açúcar e gelo, que captura a essência do Brasil em um copo.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={batidadecocoImg} alt="batida de coco" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Batida de coco</a>
                    </h5>
                    <small className="fst-italic">Uma deliciosa combinação de cachaça, leite de coco e leite condensado, perfeita para uma tarde na praia.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={cajuinaImg} alt="cajuína" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Cajuína</a>
                    </h5>
                    <small className="fst-italic">Uma bebida levemente gaseificada e não alcoólica, feita de suco de caju clarificado, ideal para refrescar em dias quentes.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="flex-shrink-0 img-fluid rounded" src={caldodecanaImg} alt="caldo de cana" style={{ width: '80px' }} />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <a href="" className="nav-item nav-link">Caldo de cana</a>
                    </h5>
                    <small className="fst-italic">Suco de cana-de-açúcar fresco, servido bem gelado, oferecendo uma doçura natural que é difícil de resistir.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
