/*variables que mantine el esatdo visible del carrito*/
var carritoVisible = false;
/**esperamos que todos los elementos de la pagian se carguen para continuar con el script*/
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  //agregando funcionalidad a los botones eliminar del carrito
  var botonesEliminarItem = document.getElementsByClassName("btn-eliminar");
  for (var i = 0; i < botonesEliminarItem.length; i++) {
    var button = botonesEliminarItem[i];
    button.addEventListener("click", eliminarItemCarrito);
  }
  //agregamos funcionalidad al boton sumar cantidad
  var botonesSumarCantidad = document.getElementsByClassName("sumar-cantidad");
  for (var i = 0; i < botonesSumarCantidad.length; i++) {
    var button = botonesSumarCantidad[i];
    button.addEventListener("click", sumarCantidad);
  }
  //agregamos funcionalidad al boton restar cantidad
  var botonesRestarCantidad =
    document.getElementsByClassName("restar-cantidad");
  for (var i = 0; i < botonesRestarCantidad.length; i++) {
    var button = botonesRestarCantidad[i];
    button.addEventListener("click", restarCantidad);
  }
  //agregamos funcionalidad a los botones agregar al carrito
  var botonesAgregarAlCarrito = document.getElementsByClassName("btn-comprar");
  for (var i = 0; i < botonesAgregarAlCarrito.length; i++) {
    var button = botonesAgregarAlCarrito[i];
    button.addEventListener("click", agregarAlCarritoClicked);
  }
  //Agregamos funcionalidad al botón comprar
  document
    .getElementsByClassName("btn-pagar")[0]
    .addEventListener("click", pagarClicked);
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked() {
  alert("Gracias por la compra");
  //Elimino todos los elmentos del carrito
  var carritoItems = document.getElementsByClassName("carrito-items")[0];
  while (carritoItems.hasChildNodes()) {
    carritoItems.removeChild(carritoItems.firstChild);
  }
  actualizarTotalCarrito();
  ocultarCarrito();
}
//elimino el item seleccionado del carrito
function eliminarItemCarrito(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  //actualizamos el total del carrito una vez que hemos eliminado un item
  actualizarTotalCarrito();
  //la siguiente funcion controla si hay productos en el carrito una vez que se elimino
  //si no hay debe ocultarse el carrito
  ocultarCarrito();
}
//aumento en uno la cantidad del elemnto seleccioando
function sumarCantidad(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  var cantidadActual = selector.getElementsByClassName(
    "carrito-items-cantidad"
  )[0].value;
  console.log(cantidadActual);
  cantidadActual++;
  selector.getElementsByClassName("carrito-items-cantidad")[0].value =
    cantidadActual;
  //actualizamos el total
  actualizarTotalCarrito();
}
function restarCantidad(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  var cantidadActual = selector.getElementsByClassName(
    "carrito-items-cantidad"
  )[0].value;
  console.log(cantidadActual);
  cantidadActual--;
  //controlamos que no se a menor que uno
  if (cantidadActual >= 1) {
    selector.getElementsByClassName("carrito-items-cantidad")[0].value =
      cantidadActual;
    //actualizamos el total
    actualizarTotalCarrito();
  }
}
function agregarAlCarritoClicked(event) {
  var button = event.target;
  var item = button.parentElement;
  var titulo = item.getElementsByClassName("nombre-producto")[0].innerText;
  var precio = item.getElementsByClassName("precio")[0].innerText;
  // var precioTotal=item.getElementsByClassName('carrito-precio-total')[0].innerText;
  var imagenSrc = item.getElementsByClassName("img-producto")[0].src;
  console.log(imagenSrc);

  //la siguiente funcion es agregar el producto al carrito, se manda por parametros los valores
  agregarItemAlCarrito(titulo, precio, imagenSrc);
  hacerVisibleCarrito();
}
//Funcion que hace visible el carrito
function hacerVisibleCarrito() {
  carritoVisible = true;
  var carrito = document.getElementsByClassName("carrito-compras")[0];
  carrito.style.marginRight = "0";
  carrito.style.opacity = "1";

  var producto = document.getElementsByClassName("news-cards")[0];
  producto.style.width = "60%";
}
//funcion que agrega un producto al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc) {
  var item = document.createElement("div");
  item.classList.add = "items";
  var itemsCarrito = document.getElementsByClassName("carrito-items")[0];
  //vamos a controlar que el producto que este ingresando no se encuentra ya en el carrito
  var nombresItemsCarrito = itemsCarrito.getElementsByClassName(
    "carrito-item-titulo"
  );
  for (var i = 0; i < nombresItemsCarrito.length; i++) {
    if (nombresItemsCarrito[i].innerText == titulo) {
      alert("el producto ya se encuentra en el carrito");
      return;
    }
  }
  var itemCarritoContenido = `
    <div class="carrito-item">
        <img src="${imagenSrc}" width="80px">
        <div class="carrito-items-detalles">
            <h3 class="carrito-item-titulo">${titulo}</h3>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" name="" id="" value="1" class="carrito-items-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <h3 class="carrito-item-precio">${precio}</h3>
        </div>
        <h3 class="btn-eliminar">
            <i class="fa-solid fa-trash "></i>
        </h3>                
    </div>
    `;
  item.innerHTML = itemCarritoContenido;
  itemsCarrito.append(item);
  //Agregamos la funcionalidad eliminar al nuevo item
  item
    .getElementsByClassName("btn-eliminar")[0]
    .addEventListener("click", eliminarItemCarrito);
  //Agregmos al funcionalidad restar cantidad del nuevo item
  var botonRestarCantidad = item.getElementsByClassName("restar-cantidad")[0];
  botonRestarCantidad.addEventListener("click", restarCantidad);
  //Agregamos la funcionalidad sumar cantidad del nuevo item
  var botonSumarCantidad = item.getElementsByClassName("sumar-cantidad")[0];
  botonSumarCantidad.addEventListener("click", sumarCantidad);
  //Actualizamos total
  actualizarTotalCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito() {
  var carritoItems = document.getElementsByClassName("carrito-items")[0];
  if (carritoItems.childElementCount == 0) {
    var carrito = document.getElementsByClassName("carrito-compras")[0];
    carrito.style.marginRight = "-100%";
    carrito.style.opacity = "0";
    carritoVisible = false;
    var items = document.getElementsByClassName("news-cards")[0];
    items.style.width = "100%";
  }
}
//actulaizar el total del carrito
//metodo 2 para actualizar carrito
function actualizarTotalCarrito() {
  //seleccionamos el contenedor del carrito
  var carritoContenedor = document.getElementsByClassName("carrito-compras")[0];
  var carritoItems = carritoContenedor.getElementsByClassName("carrito-item");
  var total = 0;
  //rrecorremos cada elemnto del carrito para actualizar el total;
  for (var i = 0; i < carritoItems.length; i++) {
    var item = carritoItems[i];
    var precioProductoTexto = item.getElementsByClassName(
      "carrito-item-precio"
    )[0];
    var partePrecio = precioProductoTexto.split("/");
    var precioProducto = parseFloat(partePrecio[1]);
    console.log("precioProducto", precioProducto);
    //quitamos el simbolo de soles y el punto de milesimo
    // var precio=parseFloat(precioProducto.innerText.replace('S/','').replace('.',''));
    //console.log('precio',precio);
    var cantidadItem = item.getElementsByClassName("carrito-items-cantidad")[0];
    var cantidad = parseFloat(cantidadItem.value);
    console.log(cantidad);
    total = total + precioProducto * cantidad;
  }
  total = Math.round(total);
  document.getElementsByClassName("carrito-precio-total")[0].innerText =
    "S/" + total.toLocaleString("es") + ".00";
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito() {
  //seleccionamos el contenedor carrito
  var carritoContenedor = document.getElementsByClassName("carrito-compras")[0];
  var carritoItems = carritoContenedor.getElementsByClassName("carrito-item");
  var total = 0;
  //recorremos cada elemento del carrito para actualizar el total
  for (var i = 0; i < carritoItems.length; i++) {
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName("carrito-item-precio")[0];
    //quitamos el simobolo peso y el punto de milesimos.
    var precio = parseFloat(precioElemento.innerText.replace("S/", ""));
    var cantidadItem = item.getElementsByClassName("carrito-items-cantidad")[0];
    console.log(precio);
    var cantidad = cantidadItem.value;
    total = parseFloat(total + precio * cantidad);
  }
  total = parseFloat(total);
  document.getElementsByClassName("carrito-precio-total")[0].innerText =
    "S/ " + total.toLocaleString("es") + ".00";
}
