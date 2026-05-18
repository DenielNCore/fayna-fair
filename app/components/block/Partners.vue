<script setup lang="ts">
import CarouselWrapper from '~/components/CarouselWrapper.vue';

// const list = [
//   { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
//
// ];
</script>

<template>
  <BlockWrapper class="">
    <template #title>
      {{ $t('team.title') }}
    </template>

    <CarouselWrapper>
      <div>111</div>
      <div>222</div>
      <div>333</div>
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
