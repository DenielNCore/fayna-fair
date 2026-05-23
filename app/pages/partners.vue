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

    <DonateReminder>
      <template #description>
        {{ $t('partners.page.description') }}
      </template>
      <template #btn>
        {{ $t('partners.btn') }}
      </template>
    </DonateReminder>
  </BlockWrapper>
</template>

<style scoped>

</style>
