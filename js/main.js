document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});
ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".login").classList.toggle("show");
});
/*para poner el slider  en movimiento  'categorias principales' vista index*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.insertAdjacentElement("afterbegin", sliderSectionLast);
function moverDerecha() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function moverIzquierda() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}
btnRight.addEventListener("click", function () {
  moverDerecha();
});
btnLeft.addEventListener("click", function () {
  moverIzquierda();
});
setInterval(function () {
  moverDerecha();
}, 5000);
/*para poner el slider  en movimiento ' las mas pedidas' vista index*/
const slider2 = document.querySelector("#news-cards2");
let items2 = document.querySelectorAll(".items2");
let items2Last = items2[items2.length - 1];
const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");
slider2.insertAdjacentElement("afterbegin", items2Last);
function moverDerecha2() {
  let items2First = document.querySelectorAll(".items2")[0];
  slider2.style.marginLeft = "-200%";
  slider2.style.transition = "all 0.5s";
  setTimeout(function () {
    slider2.style.transition = "none";
    slider2.insertAdjacentElement("beforeend", items2First);
    slider2.style.marginLeft = "-100%";
  }, 500);
}
function moverIzquierda2() {
  let items2 = document.querySelectorAll(".items2");
  let items2Last = items2[items2.length - 1];
  slider2.style.marginLeft = "0";
  slider2.style.transition = "all 0.5s";
  setTimeout(function () {
    slider2.style.transition = "none";
    slider2.insertAdjacentElement("afterbegin", items2Last);
    slider2.style.marginLeft = "-100%";
  }, 500);
}
btnRight2.addEventListener("click", function () {
  moverDerecha2();
});
btnLeft2.addEventListener("click", function () {
  moverIzquierda2();
});
setInterval(function () {
  moverDerecha2();
}, 5000);
/* redireccionar de la pagina index parte categorias principales a la vista producto mediante el id de las imagenes*/
const biscochuelos = document.querySelector("#id-biscochuelos");
biscochuelos.addEventListener("click", function () {
  // Agregamos el evento click para redirigir al hacer clic en la imagen
  window.location.href = "../plantillas/producto.html";
});
const merengados = document.querySelector("#id-merengados");
merengados.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html";
});
const tortas = document.querySelector("#id-tortas");
tortas.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html";
});
const tresLeches = document.querySelector("#id-tres-leches");
tresLeches.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html";
});
const souffles = document.querySelector("#id-souffles");
souffles.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html";
});
const bruselinas = document.querySelector("#id-bruselinas");
bruselinas.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html";
});
/*cajita de biscochuelos y tajada de pastel */
const cajitasBiscochuelos = document.querySelector("#id-cajita");
cajitasBiscochuelos.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
const tajadaPastel = document.querySelector("#id-tajada");
tajadaPastel.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
/* redireccionar de la pagina index parte 'las mas pedidas'a la vista detalle_compra mediante el id de los nombres de los productos*/
var pedido1 = document.querySelector("#id-producto1");
pedido1.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido2 = document.querySelector("#id-producto2");
pedido2.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido3 = document.querySelector("#id-producto3");
pedido3.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido4 = document.querySelector("#id-producto4");
pedido4.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido5 = document.querySelector("#id-producto5");
pedido5.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido6 = document.querySelector("#id-producto6");
pedido6.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido7 = document.querySelector("#id-producto7");
pedido7.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido8 = document.querySelector("#id-producto8");
pedido8.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido9 = document.querySelector("#id-producto9");
pedido9.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido10 = document.querySelector("#id-producto10");
pedido10.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido11 = document.querySelector("#id-producto11");
pedido11.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var pedido12 = document.querySelector("#id-producto12");
pedido12.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
/**personaliza tus cajitas de biscochuelo u tus tortas vista index */
const personalizaCajita = document.querySelector("#id-personaliza-cajita");
personalizaCajita.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
const personalizaBiscochuelo = document.querySelector(
  "#id-personaliza-biscochuelo"
);
personalizaBiscochuelo.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
const personalizaTorta = document.querySelector("#id-personaliza-torta");
personalizaTorta.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
