<script setup lang="ts">
defineProps<{ title: string; text: string; num: string }>();
</script>

<template>
  <div class="rounded-3xl bg-gray-50 p-6 w-[334px] flex flex-col gap-8 relative">
    <div class="text-gray-50 text-subtitle1 font-semibold w-20 h-20 bg-green-700 rounded-full flex justify-center items-center">
      {{ num }}
    </div>
    <div class="text-subtitle2 font-medium">
      {{ title }}
    </div>
    <div class="text-p2">
      {{ text }}
    </div>

    <slot />
  </div>
</template>

<style scoped>

</style>
