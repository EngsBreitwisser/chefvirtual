import React from 'react';
import euJpg from '../widgets/img/bruno.jpg';

const MeuPerfilDetalhes = () => {
  return (
    <section className="profile-section" style={{ backgroundColor: 'hsl(0, 0%, 96%)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="text-center">
              <h2>Perfil de usuario</h2>
              <img src={euJpg} alt="minha foto de perfil" className="profile-img" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }} />
            </div>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" value="Bruno Braga de Moura Breitwisser" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" value="engs-brunobreitwisser@camporeal.edu.br" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="data-ingresso" className="form-label">Data de Ingresso:</label>
                <input type="text" className="form-control" id="data-ingresso" value="04/06/2024" readOnly />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeuPerfilDetalhes;