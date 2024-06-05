import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './widgets/navbar';
import HomePage from './pages/homepage';
import Menupage from './pages/menupage';
import ReceitaPage from './pages/receitapage';
import Footer from './widgets/footer';
import QuemSomosPage from './pages/quemsomospage';
import MeuPerfilPage from './pages/meuperfil';
import LoginPage from './pages/login';
import CadastroPage from './pages/cadastro';
import ScrollToTop from './scrolltotop';
import useTeclasdeAtalho from './acessibilidade/teclasdeatalho';
import useLeitordeTexto from './acessibilidade/leitordetexto';

const App = () => {
  const navigate = useNavigate();

  useTeclasdeAtalho('1', () => navigate('/'));
  useTeclasdeAtalho('2', () => navigate('/menu'));
  useTeclasdeAtalho('3', () => navigate('/about'));
  useTeclasdeAtalho('4', () => navigate('/user'));
  useTeclasdeAtalho('5', () => navigate('/login'));
  useTeclasdeAtalho('6', () => navigate('/cadastro'));
  useTeclasdeAtalho('7', () => navigate('/receita'));

  useLeitordeTexto('i', 'p');

  return (
    <div className="container-xxl bg-white p-0">
      <ScrollToTop />
      <div className="container-xxl position-relative p-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/about" element={<QuemSomosPage />} />
        <Route path="/user" element={<MeuPerfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/receita" element={<ReceitaPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
