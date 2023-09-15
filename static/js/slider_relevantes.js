/*para poner el slider  en movimiento ' destacadas' vista index*/
const slider3 =document.querySelector("#news-cards3");
let items3=document.querySelectorAll(".items3");
let items3Last=items3[items3.length-1];

const btnLeft3=document.querySelector('#btn-left3');
const btnRight3=document.querySelector('#btn-right3');

slider3.insertAdjacentElement('afterbegin', items3Last); 

function moverDerecha3(){
    let items3First = document.querySelectorAll(".items3")[0];
    slider3.style.marginLeft='-200%';
    slider3.style.transition='all 0.5s';
    setTimeout(function(){
        slider3.style.transition='none';
        slider3.insertAdjacentElement('beforeend', items3First)
        slider3.style.marginLeft='-100%';       
    },500);

}
function moverIzquierda3(){
    let items3=document.querySelectorAll(".items3");
    let items3Last=items3[items3.length-1];
    slider3.style.marginLeft='0';
    slider3.style.transition='all 0.5s';
    setTimeout(function(){
        slider3.style.transition='none';
        slider3.insertAdjacentElement('afterbegin', items3Last); 
        slider3.style.marginLeft='-100%';       
    },500);

}

btnRight3.addEventListener('click', function(){
    moverDerecha3();
});
btnLeft3.addEventListener('click', function(){
    moverIzquierda3();
});

setInterval(function(){
    moverDerecha3();
}, 5000); 

