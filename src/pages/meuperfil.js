import React from 'react';
import HeroMeuPerfilPage from '../widgets/heromeuperfilpage';
import MeuPerfilDetalhes from '../widgets/meuperfildetalhes';
import MinhasReceitasFavoritas from '../widgets/minhasreceitas';

const Meuperfil = () => {
  return (
    <div>
      <HeroMeuPerfilPage />
      <MeuPerfilDetalhes/>
      <MinhasReceitasFavoritas/>
    </div>
  );
};

export default Meuperfil;
