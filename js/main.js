document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});

document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.login').classList.toggle('show');
})

/*para poner el slider  en movimiento  'categorias principales' vista index*/
const slider =document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSectionLast=sliderSection[sliderSection.length-1];

const btnLeft=document.querySelector('#btn-left');
const btnRight=document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast); 

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft='-200%';
    slider.style.transition='all 0.5s';
    setTimeout(function(){
        slider.style.transition='none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft='-100%';       
    },500);

}
function moverIzquierda(){
    let sliderSection=document.querySelectorAll(".slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
    slider.style.marginLeft='0';
    slider.style.transition='all 0.5s';
    setTimeout(function(){
        slider.style.transition='none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
        slider.style.marginLeft='-100%';       
    },500);

}

btnRight.addEventListener('click', function(){
    moverDerecha();
});
btnLeft.addEventListener('click', function(){
    moverIzquierda();
});

/*setInterval(function(){
    moverDerecha();
}, 5000);*/

/*para poner el slider  en movimiento ' las mas pedidas' vista index*/
const slider2 =document.querySelector("#news-cards2");
let items2=document.querySelectorAll(".items2");
let items2Last=items2[items2.length-1];

const btnLeft2=document.querySelector('#btn-left2');
const btnRight2=document.querySelector('#btn-right2');

slider2.insertAdjacentElement('afterbegin', items2Last); 

function moverDerecha2(){
    let items2First = document.querySelectorAll(".items2")[0];
    slider2.style.marginLeft='-200%';
    slider2.style.transition='all 0.5s';
    setTimeout(function(){
        slider2.style.transition='none';
        slider2.insertAdjacentElement('beforeend', items2First)
        slider2.style.marginLeft='-100%';       
    },500);

}
function moverIzquierda2(){
    let items2=document.querySelectorAll(".items2");
    let items2Last=items2[items2.length-1];
    slider2.style.marginLeft='0';
    slider2.style.transition='all 0.5s';
    setTimeout(function(){
        slider2.style.transition='none';
        slider2.insertAdjacentElement('afterbegin', items2Last); 
        slider2.style.marginLeft='-100%';       
    },500);

}

btnRight2.addEventListener('click', function(){
    moverDerecha2();
});
btnLeft2.addEventListener('click', function(){
    moverIzquierda2();
});

setInterval(function(){
    moverDerecha2();
}, 5000); 
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicia el desplazamiento automático al cargar la página
startAutoSlide();

// Detiene el desplazamiento automático cuando el cursor pasa sobre el slider
slider2.addEventListener('mouseenter', stopAutoSlide);
slider2.addEventListener('mouseleave', startAutoSlide);

/* redireccionar de la pagina index parte categorias principales a la vista producto mediante el id de las imagenes*/
const biscochuelos = document.querySelector("#id-biscochuelos");
biscochuelos.addEventListener("click", function () {  // Agregamos el evento click para redirigir al hacer clic en la imagen
  window.location.href = "../plantillas/producto.html"; 
});

const merengados=document.querySelector('#id-merengados');
merengados.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

const tortas=document.querySelector('#id-tortas');
tortas.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

const tresLeches=document.querySelector('#id-tres-leches');
tresLeches.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

const souffles=document.querySelector('#id-souffles');
souffles.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

const bruselinas=document.querySelector('#id-bruselinas');
bruselinas.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

/*cajita de biscochuelos y tajada de pastel */
const cajitaBiscochuelos=document.querySelector('#id-cajita');
cajitaBiscochuelos.addEventListener("click", function() {
    window.location.href="../plantillas/producto.html";
});

const tajadaPastel=document.querySelector('#id-tajada');
tajadaPastel.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

/* redireccionar de la pagina index parte 'las mas pedidas'a la vista detalle_compra mediante el id de los nombres de los productos*/
const biscochueloHuamanguino=document.querySelector('#id-biscochuelo-huamanguino');
biscochueloHuamanguino.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const quequeNaranja=document.querySelector('#id-queque-naranja');
quequeNaranja.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const merengadoChirimoya=document.querySelector('#id-merengado-chirimoya');
merengadoChirimoya.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaChocolate=document.querySelector('#id-torta-chocolate');
tortaChocolate.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaBrazilera=document.querySelector('#id-torta-brazilera');
tortaBrazilera.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaFresa=document.querySelector('#id-torta-fresa');
tortaFresa.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaGuanabana=document.querySelector('#id-torta-guanabana');
tortaGuanabana.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaEncanelado=document.querySelector('#id-torta-encanelado');
tortaEncanelado.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaLucuma=document.querySelector('#id-torta-lucuma');
tortaLucuma.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaDurazno=document.querySelector('#id-torta-durazno');
tortaDurazno.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaSelvaNegra=document.querySelector('#id-torta-selva-negra');
tortaSelvaNegra.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

const tortaHawaiana=document.querySelector('#id-torta-hawaina');
tortaHawaiana.addEventListener("click", function() {
    window.location.href="../plantillas/detalle_compra.html";
});

