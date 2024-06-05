import React from 'react';
import HeroReceitaPage from '../widgets/heroreceitapage';
import ReceitaDetalhes from '../widgets/receita';

const ReceitaPage = () => {
  return (
    <div>
      <HeroReceitaPage />
      <ReceitaDetalhes />
    </div>
  );
};

export default ReceitaPage;
