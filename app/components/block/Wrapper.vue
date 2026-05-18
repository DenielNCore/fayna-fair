<script setup lang="ts">

</script>

<template>
  <div class="p-12 pt-24 flex flex-col items-center gap-10 max-md:p-0 max-md:pt-12 max-md:pb-6">
    <div class="text-h2 font-semibold max-md:text-center">
      <slot name="title" />
    </div>
    <slot name="default" />
  </div>
</template>

<style scoped>

</style>
