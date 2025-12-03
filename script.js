let numero = 0
    const texto = document.getElementById("valor")
    document.getElementById("mais").addEventListener("click", () => {
      numero++
      texto.textContent = numero
    })
    document.getElementById("menos").addEventListener("click", () => {
      numero--
      texto.textContent = numero
    })