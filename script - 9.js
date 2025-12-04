const form = document.getElementById('formContato');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagemCampo = document.getElementById('mensagemCampo');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (nome.value === '' || email.value === '' || mensagemCampo.value === '') {
        alert('Por favor, preencha todos os campos.');
        mensagem.textContent = 'Erro: todos os campos são obrigatórios.';
        mensagem.className = 'erro';
      } else {
        alert('Formulário enviado com sucesso!');
        mensagem.textContent = 'Sucesso: formulário enviado!';
        mensagem.className = 'sucesso';
      }
    });