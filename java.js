    const p1 = document.getElementById("paragrafo1");
    const p2 = document.getElementById("paragrafo2");
    const p3 = document.getElementById("paragrafo3");
    const p4 = document.getElementById("paragrafo4");

   
    document.getElementById("btn1").addEventListener("click", () => {
      p1.textContent = "vou";
    });

    document.getElementById("btn2").addEventListener("click", () => {
      p2.textContent = "me";
    });

    document.getElementById("btn3").addEventListener("click", () => {
      p3.textContent = "matar";
    });

    document.getElementById("btn4").addEventListener("click", () => {
        p4.textContent = "Vitória Camili - 2025";
      });