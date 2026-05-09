<script setup lang="ts">
const padding = useBigLayoutPadding();
// const { isScrolled } = useHeaderScroll(50);

// const menuIsOpen = ref(false);

// const handleAnchorClick = (e: MouseEvent, href: string) => {
//   if (href.startsWith('#')) {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//       menuIsOpen.value = false;
//     }
//   }
// };
</script>

<template>
  <div
    :style="{
      'padding-left': `${padding}px`,
      'padding-right': `${padding}px`,
    }"
  >
    header
  </div>
</template>

<style scoped>

</style>
