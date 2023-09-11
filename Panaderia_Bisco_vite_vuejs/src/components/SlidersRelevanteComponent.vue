<template>
  <div>
    <!-- Slider -->
    <div id="news-cards3" :style="{ marginLeft: sliderMargin }">
      <!-- Aquí irían los elementos del slider -->
      <div class="items3" v-for="(item, index) in sliderItems" :key="index">
        <!-- Contenido del item del slider -->
      </div>
    </div>
    <button id="btn-left3" @click="moverIzquierda3">Left</button>
    <button id="btn-right3" @click="moverDerecha3">Right</button>

    <!-- Productos Relevantes -->
    <div
      v-for="(producto, index) in productosRelevantes"
      :key="index"
      @click="redirectToDetalleCompra(producto.id)"
    >
      {{ producto.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderMargin: "-100%",
      sliderItems: [
        // Aquí irían los elementos del slider
      ],
      productosRelevantes: [
        { id: "id-producto13", name: "Producto 13" },
        { id: "id-producto14", name: "Producto 14" },
        // ... Agrega más productos aquí
      ],
    };
  },
  methods: {
    moverDerecha3() {
      this.sliderMargin = "-200%";
      setTimeout(() => {
        const firstItem = this.sliderItems.shift();
        this.sliderItems.push(firstItem);
        this.sliderMargin = "-100%";
      }, 500);
    },
    moverIzquierda3() {
      this.sliderMargin = "0";
      setTimeout(() => {
        const lastItem = this.sliderItems.pop();
        this.sliderItems.unshift(lastItem);
        this.sliderMargin = "-100%";
      }, 500);
    },
    redirectToDetalleCompra(id) {
      window.location.href = `../plantillas/detalle_compra.html?producto=${id}`;
    },
  },
  mounted() {
    setInterval(this.moverDerecha3, 5000);
  },
};
</script>

<style scoped>
/* Aquí irían los estilos específicos para este componente */
</style>
