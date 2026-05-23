<script setup lang="ts">
const galleryPhotos = [
  '/gallery/gallery-1.png',
  '/gallery/gallery-2.png',
  '/gallery/gallery-3.png',
  '/gallery/gallery-4.png',
  '/gallery/gallery-5.png',
  '/gallery/gallery-6.png',
];
</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('gallery.title') }}
    </template>

    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <NuxtImg
        v-for="(photo, index) in galleryPhotos"
        :key="photo"
        :src="photo"
        :alt="`${$t('gallery.title')} ${index + 1}`"
        class="h-[220px] w-full rounded-3xl object-cover"
        loading="lazy"
      />
    </div>

    <DonateReminder>
      <template #description>
        {{ $t('report.description') }}
      </template>
      <template #btn>
        {{ $t('report.btn') }}
      </template>
    </DonateReminder>
  </BlockWrapper>
</template>

<style scoped>

</style>
