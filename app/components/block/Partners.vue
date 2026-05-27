<script setup lang="ts">
const pStore = usePartnersStore();

// const list = [
//   { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
//
// ];
</script>

<template>
  <BlockWrapper class="px-0 max-md:px-0">
    <template #title>
      {{ $t('partners.title') }}
    </template>

    <CarouselWrapper class="h-[172px]">
      <PartnerLogo
        v-for="partner in pStore.list"
        :key="partner.src"
        :src="partner.src"
        :height="partner.height"
        bordered
      />
    </CarouselWrapper>

    <ButtonLevel
      class="font-bold px-8"
      href="/partners/sponsor-packages.pdf"
      target="_blank"
      type="3"
    >
      {{ $t('partners.btn') }}
    </ButtonLevel>
  </BlockWrapper>
</template>

<style scoped>

</style>
