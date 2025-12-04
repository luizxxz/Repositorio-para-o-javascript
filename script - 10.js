const tabela = document.getElementById('tabela');
    const addBtn = document.getElementById('add');
    const removeBtn = document.getElementById('remove');

    let contador = 1;

    addBtn.addEventListener('click', () => {
      contador++;
      const novaLinha = tabela.insertRow();
      const novaCelula = novaLinha.insertCell();
      novaCelula.textContent = 'Linha ' + contador;
    });

    removeBtn.addEventListener('click', () => {
      if (tabela.rows.length > 0) {
        tabela.rows[tabela.rows.length - 1].remove();
        contador--;
      }
    });