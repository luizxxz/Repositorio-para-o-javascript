const quadrado = document.getElementById("meuQuadrado");
    const botao = document.getElementById("toggleBtn");

    botao.addEventListener("click", () => {
      quadrado.classList.toggle("hidden");
    });