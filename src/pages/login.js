import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginSection = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container" style={{paddingTop: '100px'}}>
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Seja bem-vindo <br />
                <span className="text-primary">Chef virtual</span>
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <h2>Login</h2>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email </label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Senha</label>
                    </div>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                      
                      <NavLink to="/" className="nav-item nav-link">Entrar</NavLink>
                    </button>
                    <div className="text-center">                                       
                      <NavLink to="/cadastro" className="nav-item nav-link">Ainda não possui um cadastro? Clique aqui!</NavLink>
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

export default LoginSection;
