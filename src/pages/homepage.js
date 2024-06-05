import React from 'react';
import HeroHomePage from '../widgets/herohomepage';
import Menu from '../widgets/menu';
import Time from '../widgets/time';

const HomePage = () => {
  return (
    <div>
      <HeroHomePage />
      <Menu />
      <Time/>
    </div>
  );
};

export default HomePage;
