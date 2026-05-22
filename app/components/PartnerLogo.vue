<script setup lang="ts">
withDefaults(defineProps<{ src: string; bordered?: boolean; height?: string }>(), {
  bordered: false, height: '70px',
});
</script>

<template>
  <div
    :class="{
      'border border-gray-100': bordered,
    }"
    class="w-[244px] h-[108px] bg-gray-50 flex justify-center items-center rounded-[20px]"
  >
    <NuxtImg
      :style="{ height }"
      :src="src"
    />
  </div>
</template>

<style scoped>

</style>
