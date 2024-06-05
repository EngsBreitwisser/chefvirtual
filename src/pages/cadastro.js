import React from 'react';
import { NavLink } from 'react-router-dom';

const RegistrationSection = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container" style={{paddingTop: '100px'}}>
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Torne-se um 
                <span className="text-primary"> Chefe</span><br /> hoje mesmo
              </h1>
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                O nosso site oferece uma ampla variedade de receitas, 
                desde deliciosas opções salgadas até tentadores
                pratos doces e refrescantes bebidas. Com uma interface
                intuitiva, você pode facilmente explorar e
                descobrir receitas para satisfazer seus desejos culinários.
                Além disso, o site oferece recursos úteis, como listas de 
                ingredientes e instruções passo a passo, tornando a experiência
                de cozinhar ainda mais acessível e divertida.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <h2>Cadastro</h2>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">Primeiro nome</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Último nome</label>
                        </div>
                      </div>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email </label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Senha</label>
                    </div>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                    <NavLink to="/" className="nav-item nav-link">Cadastrar</NavLink>
                    </button>
                    <div className="text-center">
                    <NavLink to="/login" className="nav-item nav-link">Já possui um cadastro? Clique aqui!</NavLink>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RegistrationSection;
