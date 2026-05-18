<script setup lang="ts">
defineProps<{ img: string; name: string; position: string; href: string }>();
</script>

<template>
  <div class="bg-gray-50 rounded-[20px] overflow-hidden relative shrink-0">
    <InstagramBtn
      :href="href"
      class="absolute top-5 left-5"
    />
    <NuxtImg
      :src="img"
      width="324"
      height="404"
      class="w-[324px] h-[400px]"
    />
    <div class="py-6 px-9">
      <div class="text-subtitle2 font-medium">
        {{ name }}
      </div>
      <div class="text-p2">
        {{ position }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
