const input = document.getElementById("nomeInput")
    const addBtn = document.getElementById("addBtn")
    const clearBtn = document.getElementById("clearBtn")
    const lista = document.getElementById("lista")

    addBtn.addEventListener("click", () => {
      const nome = input.value.trim()
      if (nome !== "") {
        const li = document.createElement("li")
        li.textContent = nome
        lista.appendChild(li)
        input.value = ""
      }
    })

    clearBtn.addEventListener("click", () => {
      lista.innerHTML = ""
    })