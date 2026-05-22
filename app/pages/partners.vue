<script setup lang="ts">
const pStore = usePartnersStore();
</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('partners.page.title') }}
    </template>

    <div class="flex flex-wrap gap-7">
      <PartnerLogo
        v-for="partner in pStore.list"
        :key="partner.src"
        :src="partner.src"
        :height="partner.height"
        bordered
      />
    </div>

    <div class="bg-green-100 rounded-2xl p-16 max-md:p-4 w-full flex max-md:flex-col max-md:gap-6 justify-between items-center">
      <div class="w-1/2 max-md:w-full text-subtitle1 font-semibold max-md:font-medium">
        {{ $t('partners.page.description') }}
      </div>

      <div class="w-1/2 max-md:w-full flex justify-end max-md:justify-center">
        <ButtonLevel type="3">
          {{ $t('partners.btn') }}
        </ButtonLevel>
      </div>
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
