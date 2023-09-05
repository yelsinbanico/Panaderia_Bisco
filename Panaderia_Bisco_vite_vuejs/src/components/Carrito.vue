<template>
  <div>
    <button @click="hacerVisibleCarrito">Mostrar Carrito</button>
    <div v-if="carritoVisible" class="carrito-compras">
      <!-- Aquí iría el HTML del carrito -->
      <div v-for="item in carritoItems" :key="item.titulo" class="carrito-item">
        <img :src="item.imagenSrc" width="80px" />
        <div class="carrito-items-detalles">
          <h3 class="carrito-item-titulo">{{ item.titulo }}</h3>
          <div class="selector-cantidad">
            <button @click="restarCantidad(item)">-</button>
            <input type="text" :value="item.cantidad" disabled />
            <button @click="sumarCantidad(item)">+</button>
          </div>
          <h3 class="carrito-item-precio">{{ item.precio }}</h3>
        </div>
        <button @click="eliminarItemCarrito(item)">Eliminar</button>
      </div>
      <button @click="pagarClicked">Pagar</button>
      <div>Total: {{ totalCarrito }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carritoVisible: false,
      carritoItems: [],
    };
  },
  computed: {
    totalCarrito() {
      return (
        this.carritoItems
          .reduce((acc, item) => {
            return (
              acc + parseFloat(item.precio.replace("S/", "")) * item.cantidad
            );
          }, 0)
          .toLocaleString("es") + ".00"
      );
    },
  },
  methods: {
    hacerVisibleCarrito() {
      this.carritoVisible = true;
    },
    eliminarItemCarrito(item) {
      this.carritoItems = this.carritoItems.filter(
        (i) => i.titulo !== item.titulo
      );
    },
    sumarCantidad(item) {
      item.cantidad++;
    },
    restarCantidad(item) {
      if (item.cantidad > 1) {
        item.cantidad--;
      }
    },
    agregarAlCarritoClicked(titulo, precio, imagenSrc) {
      const itemExistente = this.carritoItems.find(
        (item) => item.titulo === titulo
      );
      if (itemExistente) {
        alert("El producto ya está en el carrito");
        return;
      }
      this.carritoItems.push({ titulo, precio, imagenSrc, cantidad: 1 });
    },
    pagarClicked() {
      alert("Gracias por la compra");
      this.carritoItems = [];
    },
  },
};
</script>

<style scoped>
/* Aquí irían los estilos específicos para este componente */
</style>
