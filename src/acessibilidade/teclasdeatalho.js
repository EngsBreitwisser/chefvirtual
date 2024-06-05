import { useEffect } from 'react';

const TeclasdeAtalho = (key, callback) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [key, callback]);
};

export default TeclasdeAtalho;
