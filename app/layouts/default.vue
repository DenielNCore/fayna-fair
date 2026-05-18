<script setup lang="ts">
import FooterComponent from '~/components/FooterComponent.vue';
</script>

<template>
  <div>
    <HeaderComponent />

    <main class="pt-[120px] max-md:pt-[96px]">
      <NuxtPage />
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped>

</style>
