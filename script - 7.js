const thumbs = document.querySelectorAll(".thumbs img");
    const mainImage = document.getElementById("mainImage");
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
      });
    });