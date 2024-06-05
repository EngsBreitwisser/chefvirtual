import { useEffect } from 'react';

const LeitordeTexto = (teclaInicio, teclaFim) => {
  useEffect(() => {
    const leitor = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    };

    const teclaPressionada = (evento) => {
      if (evento.key === teclaInicio) {
        const texto = document.body.innerText;
        leitor(texto);
      } else if (evento.key === teclaFim) {
        speechSynthesis.cancel();
      }
    };

    window.addEventListener('keydown', teclaPressionada);

    return () => {
      window.removeEventListener('keydown', teclaPressionada);
    };
  }, [teclaInicio, teclaFim]);
};

export default LeitordeTexto;
