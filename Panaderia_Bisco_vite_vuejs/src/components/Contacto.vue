<template>
  <section class="contenedor">
    <!-- Aquí iría todo el contenido HTML del body de tu archivo contacto.html -->
    <div class="menu-btn">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <div class="container">
      <nav class="nav-main">
        <img
          src="../img/favicon-pana.png"
          alt="Udacity logo"
          class="nav-brand"
        />
        <ul class="nav-menu">
          <li>
            <a class="emcabezado" href="/index.html"
              ><i class="fa-solid fa-house"></i> INICIO</a
            >
          </li>
          <li>
            <a a class="emcabezado" href="nosotros.html"
              ><i class="fa-solid fa-user-group"></i> ACERCA DE NOSOSTROS</a
            >
          </li>
          <li>
            <a a class="emcabezado" href="producto.html"
              ><i class="fa-sharp fa-solid fa-cake-candles"></i> PRODUCTOS</a
            >
          </li>
          <li>
            <a a class="emcabezado" href="pedido.html"
              ><i class="fa-solid fa-mobile-screen-button"></i> PEDIDOS
              ONLINE</a
            >
          </li>
          <li>
            <a a class="emcabezado" href="contacto.html"
              ><i class="fa-solid fa-address-card"></i> CONTACTANOS</a
            >
          </li>
        </ul>
        <div class="login">
          <a href="./login.html" class="boton">
            <i class="fa-solid fa-user"></i
          ></a>
        </div>
        <!--Navegacion derecha-->
        <ul class="nav-menu-right">
          <li>
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      <!--formulario-->
      <div class="contacta">
        <div>
          <h2>Contacta</h2>
          <h1>Nuestra panaderia</h1>
          <p>Email. banicospan@gmail.com</p>
          <p>Cel:925 394 202</p>
          <p class="queremos">Queremos saber de ti!</p>
          <form class="datos" action="" method="post">
            <input class="text1" type="text" required="" value="Nombre" />
            <input class="text2" type="email" required="" value="Email" />
            <textarea class="area" name="" id="" cols="30" rows="10">
Escribe tu mensaje aqui</textarea
            >
            <input class="btn" type="submit" />
          </form>
        </div>
        <img class="imgcont" src="../img/contacta.jpg" alt="contacta" />
      </div>
      <div class="contacta">
        <img class="imgcont" src="../img/contacta.jpg" alt="contacta" />
        <div>
          <h2>Direccion</h2>
          <h1>Y Horarios</h1>
          <p>
            ASOC. LOS OLIVOS, JR. LAS DALIAS MZ O LT 17 - SAN JUAN BAUTISTA,
            Ayacucho, Peru, 05001
          </p>
          <p>Lunes - Viernes 7am - 7pm</p>
          <p>Sabados y Domingos 7am - 1pm</p>
        </div>
      </div>
      <section class="social">
        <p>Siguenos en nuestros redes</p>
        <div class="links">
          <a
            class="redes"
            href="https://www.facebook.com/Banicospan"
            target="_blank"
          >
            <i class="fab fa-square-facebook"></i>
          </a>
          <a
            class="redes"
            href="https://api.whatsapp.com/send?phone=51925394202&amp;text=Hola,%20deseo%20más%20información%20acerca%20de%20sus%20tortas%20🎂🍰"
            target="_blank"
          >
            <i class="fab fa-square-whatsapp"></i>
          </a>
          <a
            class="redes"
            href="https://www.instagram.com/banicospan/"
            target="_blank"
          >
            <i class="fab fa-square-instagram"></i>
          </a>
          <a class="redes" href="#" target="_blank">
            <i class="fab fa-square-twitter"></i>
          </a>
          <a class="redes" href="#" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacto",
  // Aquí puedes añadir la lógica de JavaScript específica para este componente
};
</script>

<style scoped>
/* Aquí irían los estilos específicos para este componente */
/* ... */
</style>
