var verOpciones=false;
/**esperamos que todos los elementos de la pagian se carguen para continuar con el script*/
if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

function verOpciones(event){
    var button =event.target;
    var item=button.parentElement;
    var titulo=item.getElementsByClassName('nombre-producto')[0].innerText;
    var precio=item.getElementsByClassName('precio')[0].innerText;
   // var precioTotal=item.getElementsByClassName('carrito-precio-total')[0].innerText;
    var imagenSrc=item.getElementsByClassName('img-producto')[0].src;
    console.log(imagenSrc);
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    //hacerVisibleCarrito();

}
window.onload = mostrarDetalles; 
