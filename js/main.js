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

setInterval(function(){
    moverDerecha();
}, 5000);

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

/* redireccionar de la ppagina index a la pagina producto*/
const biscochuelos = document.querySelector("#id-biscochuelos");

// Agrega el evento click para redirigir al hacer clic en la imagen
biscochuelos.addEventListener("click", function () {
  window.location.href = "../plantillas/producto.html"; // Reemplaza con la ruta correcta
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

