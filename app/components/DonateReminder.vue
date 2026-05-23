<script setup lang="ts">

</script>

<template>
  <div class="bg-green-100 rounded-2xl p-16 max-md:p-4 w-full flex max-md:flex-col max-md:gap-6 justify-between items-center">
    <div class="w-1/2 max-md:w-full text-subtitle1 font-semibold max-md:font-medium">
      <slot name="description" />
    </div>

    <div class="w-1/2 max-md:w-full flex justify-end max-md:justify-center">
      <ButtonLevel type="3">
        <slot name="btn" />
      </ButtonLevel>
    </div>
  </div>
</template>

<style scoped>

</style>
