<script setup lang="ts">

</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('gallery.title') }}
    </template>

    <div>
      //
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
