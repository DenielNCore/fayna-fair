<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen', { default: false });
</script>

<template>
  <div
    class="menu-btn  rounded-round"
    :class="{ open: isOpen }"
    @click="isOpen = !isOpen"
  >
    <div class="menu-btn__burger" />
  </div>
</template>

<style scoped>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  margin-left: max(16px, env(safe-area-inset-left));
}
.menu-btn__burger {
  width: 30px;
  height: 1.5px;
  background: black;
  border-radius: 5px;

  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 1.5px;
  background: black;
  border-radius: 5px;

  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-10px);
}
.menu-btn__burger::after {
  transform: translateY(10px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>
