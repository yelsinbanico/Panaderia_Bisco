/*para poner el slider  en movimiento ' destacadas' vista index*/
const slider3 = document.querySelector("#news-cards3");
let items3 = document.querySelectorAll(".items3");
let items3Last = items3[items3.length - 1];
const btnLeft3 = document.querySelector("#btn-left3");
const btnRight3 = document.querySelector("#btn-right3");
slider3.insertAdjacentElement("afterbegin", items3Last);
function moverDerecha3() {
  let items3First = document.querySelectorAll(".items3")[0];
  slider3.style.marginLeft = "-200%";
  slider3.style.transition = "all 0.5s";
  setTimeout(function () {
    slider3.style.transition = "none";
    slider3.insertAdjacentElement("beforeend", items3First);
    slider3.style.marginLeft = "-100%";
  }, 500);
}
function moverIzquierda3() {
  let items3 = document.querySelectorAll(".items3");
  let items3Last = items3[items3.length - 1];
  slider3.style.marginLeft = "0";
  slider3.style.transition = "all 0.5s";
  setTimeout(function () {
    slider3.style.transition = "none";
    slider3.insertAdjacentElement("afterbegin", items3Last);
    slider3.style.marginLeft = "-100%";
  }, 500);
}
btnRight3.addEventListener("click", function () {
  moverDerecha3();
});
btnLeft3.addEventListener("click", function () {
  moverIzquierda3();
});
setInterval(function () {
  moverDerecha3();
}, 5000);
/* redireccionar de la pagina index parte 'relevantes'a la vista detalle_compra mediante el id de los nombres de los productos*/
var relavante1 = document.querySelector("#id-producto13");
relavante1.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante2 = document.querySelector("#id-producto14");
relevante2.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante3 = document.querySelector("#id-producto15");
relevante3.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante4 = document.querySelector("#id-producto16");
relevante4.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante5 = document.querySelector("#id-producto17");
relevante5.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante6 = document.querySelector("#id-producto18");
relevante6.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante7 = document.querySelector("#id-producto19");
relevante7.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante8 = document.querySelector("#id-producto20");
relevante8.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante9 = document.querySelector("#id-producto21");
relevante9.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante10 = document.querySelector("#id-producto22");
relevante10.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante11 = document.querySelector("#id-producto23");
relevante11.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
var relevante12 = document.querySelector("#id-producto24");
relevante12.addEventListener("click", function () {
  window.location.href = "../plantillas/detalle_compra.html";
});
