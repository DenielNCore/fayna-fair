<script setup lang="ts">
const { t } = useI18n();

const reportInfo = computed(() => Array.from({ length: 3 }, (_, index) => {
  const key = index + 1;
  return {
    title: t(`report.info.${key}.title`),
    text: t(`report.info.${key}.text`),
  };
}));

const reportPhotos = [
  '/report/report-1.png',
  '/report/report-2.png',
  '/report/report-1.png',
  '/report/report-2.png',
  '/report/report-1.png',
  '/report/report-2.png',
  '/report/report-1.png',
  '/report/report-2.png',
  '/report/report-1.png',
  '/report/report-2.png',
];
</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('report.title') }}
    </template>

    <div class="w-full flex max-md:flex-wrap gap-3.5 justify-between">
      <div
        v-for="(item, index) in reportInfo"
        :key="index"
        class="w-full bg-green-100 rounded-2xl p-4 flex flex-col gap-2 text-center"
      >
        <div class="text-subtitle1 font-medium">
          {{ item.title }}
        </div>
        <div class="text-p2 font-light">
          {{ item.text }}
        </div>
      </div>
    </div>

    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <NuxtImg
        v-for="(photo, index) in reportPhotos"
        :key="photo"
        :src="photo"
        :alt="`${$t('gallery.title')} ${index + 1}`"
        class="h-[315px] w-full rounded-3xl object-cover"
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
