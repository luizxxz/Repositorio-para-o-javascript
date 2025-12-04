const button = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
      const isVisible = menu.style.display === 'block';
      menu.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'Abrir Menu' : 'Fechar Menu';
    });