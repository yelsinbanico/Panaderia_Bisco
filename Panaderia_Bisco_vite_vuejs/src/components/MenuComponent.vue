<template>
  <div>
    <!-- Aquí iría el HTML de tu menú -->
    <button id="btnMenu" @click="toggleMenu">Menu</button>
    <div id="menu" :class="{ mostrar: isMenuVisible }">
      <!-- Contenido del menú -->
      <button
        class="submenu-btn"
        v-for="(item, index) in subMenuItems"
        :key="index"
        @click="toggleSubMenu(index)"
      >
        {{ item.name }}
      </button>
      <div
        class="submenu"
        v-for="(item, index) in subMenuItems"
        :key="index"
        :class="{ desplegar: item.isSubMenuVisible }"
        :style="{ height: item.isSubMenuVisible ? item.height + 'px' : 'auto' }"
      >
        <!-- Contenido del submenu -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
      subMenuItems: [
        { name: "Submenu 1", isSubMenuVisible: false, height: 0 },
        { name: "Submenu 2", isSubMenuVisible: false, height: 0 },
        // Agrega más submenús aquí
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    toggleSubMenu(index) {
      if (window.innerWidth < 1024) {
        const subMenu = this.subMenuItems[index];
        if (subMenu.isSubMenuVisible) {
          subMenu.isSubMenuVisible = false;
          subMenu.height = 0;
        } else {
          subMenu.isSubMenuVisible = true;
          subMenu.height = subMenu.scrollHeight; // Aquí puedes asignar el valor correcto
        }
      }
    },
  },
};
</script>

<style scoped>
/* Aquí irían los estilos específicos para este componente */
</style>
