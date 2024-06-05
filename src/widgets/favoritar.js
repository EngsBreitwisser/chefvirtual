import React, { useState } from 'react';

import { FaHeart } from 'react-icons/fa';

const Favoritar = () => {
  const [savedRecipesCount, setSavedRecipesCount] = useState(0);

  const handleSaveRecipe = () => {
    setSavedRecipesCount(prevCount => {
        const newCount = prevCount + 1;
  
        alert(`${newCount} receita(s) salva(s) com sucesso`);
  
        return newCount;
      });
  };

  return (
    <div>
      <button onClick={handleSaveRecipe} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none', padding: '0' }}>
        <FaHeart size={64} color="red" />
        {/* <span style={{ marginLeft: '8px' }}>Favoritar</span> */}
      </button>
    </div>
  );
};

export default Favoritar;
