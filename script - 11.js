let pontos = 10;

    function alterar(atributo, valor) {
      const span = document.getElementById(atributo);
      let atual = parseInt(span.textContent);

      if (valor === 1 && pontos > 0) {
        atual++;
        pontos--;
      } else if (valor === -1 && atual > 0) {
        atual--;
        pontos++;
      }

      span.textContent = atual;
      document.getElementById('pontosRestantes').textContent = 'Pontos restantes: ' + pontos;
    }

    document.getElementById('confirmar').addEventListener('click', () => {
      alert('Distribuição confirmada!\nForça: ' + document.getElementById('forca').textContent +
            '\nAgilidade: ' + document.getElementById('agilidade').textContent +
            '\nInteligência: ' + document.getElementById('inteligencia').textContent +
            '\nPontos restantes: ' + pontos);
    });