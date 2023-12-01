const carrossel = document.querySelector(".carrossel");
const slides = carrossel.querySelectorAll(".slide");
const controles = document.querySelector(".controles");

let slideAtual = 0;

controles.querySelector(".anterior").addEventListener("click", function() {
  if (slideAtual > 0) {
    slideAtual--;
    animarSlide(slideAtual);
  }
});

controles.querySelector(".proximo").addEventListener("click", function() {
  if (slideAtual < slides.length - 1) {
    slideAtual++;
    animarSlide(slideAtual);
  }
});

function animarSlide(slide) {
  slides.forEach(function(slide) {
    slide.style.display = "none";
  });

  slides[slide].style.display = "block";

  const legenda = slides[slide].querySelector("figcaption");
  legenda.textContent = "Legenda do slide " + slide;
}

animarSlide(0);
