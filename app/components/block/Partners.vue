<script setup lang="ts">
import CarouselWrapper from '~/components/CarouselWrapper.vue';

// const list = [
//   { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
//
// ];
</script>

<template>
  <BlockWrapper class="px-0 max-md:px-0">
    <template #title>
      {{ $t('team.title') }}
    </template>

    <CarouselWrapper>
      <NuxtImg
        width="243"
        height="108"
        src="partner.png"
      />
      <NuxtImg
        width="243"
        height="108"
        src="partner.png"
      />
      <NuxtImg
        width="243"
        height="108"
        src="partner.png"
      />
      <NuxtImg
        width="243"
        height="108"
        src="partner.png"
      />
      <NuxtImg
        width="243"
        height="108"
        src="partner.png"
      />
    </CarouselWrapper>

    <ButtonLevel
      class="font-bold px-8"
      type="3"
    >
      {{ $t('partners.btn') }}
    </ButtonLevel>
  </BlockWrapper>
</template>

<style scoped>

</style>
