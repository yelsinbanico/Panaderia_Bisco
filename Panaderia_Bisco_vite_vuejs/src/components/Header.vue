<template>
  <header class="nav-bar" id="btnMenu">
    <div class="menu-btn">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <div class="container" id="container">
      <nav class="nav-main">
        <img
          src="./img/favicon-pana.png"
          alt="logo panaderia"
          class="nav-brand"
        />
        <ul class="nav-menu">
          <li class="menu-item">
            <a class="emcabezado" href="index.html"
              ><i class="fa-solid fa-house"></i> INICIO</a
            >
          </li>
          <li class="menu-item">
            <a a class="emcabezado" href="/plantillas/nosotros.html"
              ><i class="fa-solid fa-user-group"></i> ACERCA DE NOSOSTROS</a
            >
          </li>
          <li class="menu-item">
            <a a class="emcabezado" href="/plantillas/producto.html"
              ><i class="fa-sharp fa-solid fa-cake-candles"></i> PRODUCTOS
            </a>
          </li>
          <li class="menu-item">
            <a a class="emcabezado" href="/plantillas/pedido.html"
              ><i class="fa-solid fa-mobile-screen-button"></i> PEDIDOS
              ONLINE</a
            >
          </li>
          <li class="menu-item">
            <a a class="emcabezado" href="/plantillas/contacto.html"
              ><i class="fa-solid fa-address-card"></i> CONTACTANOS</a
            >
          </li>
        </ul>

        <!--Navegacion derecha-->
        <section class="nav-menu-right">
          <li class="buscar">
            <a class="buscar1" href="#"
              ><i class="fa-sharp fa-solid fa-magnifying-glass"></i
            ></a>
          </li>
          <li class="horario">
            <a class="horario1" href="#">
              <i class="fa-sharp fa-solid fa-clock"></i
            ></a>
            <ul class="submenu1">
              <li class="menu-item1 container-submenu">
                <h1 class="horario2">Visítanos en los siguientes horarios</h1>
              </li>
              <li class="menu-item1">
                <p class="horario2">
                  Lunes a sábado: 9 a.m. - 10 p.m. <br />Domingo: 9 a.m. - 3
                  p.m.
                </p>
              </li>
            </ul>
          </li>
          <li class="login">
            <a class="boton" href="/plantillas/login.html">
              <i class="fa-solid fa-user"></i
            ></a>
            <ul class="submenu1">
              <li class="menu-item1 container-submenu">
                <a class="menu-link1" href="./plantillas/login.html"
                  >Iniciar Sesión</a
                >
              </li>
              <li class="menu-item1 container-sub">
                <a class="menu-link1" href="./plantillas/registrarse.html"
                  >Registrarse</a
                >
              </li>
            </ul>
          </li>
          <li class="carrito">
            <a href="./plantillas/producto.html" class="carrito1">
              <i class="fa-solid fa-cart-shopping"></i> Carrito</a
            >
          </li>
        </section>
      </nav>
      <hr />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  // Aquí puedes añadir la lógica de tu componente
};
</script>
