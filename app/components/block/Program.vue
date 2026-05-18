<script setup lang="ts">
const { t } = useI18n();

const eventList = computed(() => Array.from({ length: 10 }, (_, index) => {
  const key = index + 1;
  return {
    time: t(`program.events.${key}.time`),
    description: t(`program.events.${key}.description`),
  };
}));
</script>

<template>
  <BlockWrapper class="">
    <template #title>
      {{ $t('program.title') }}
    </template>

    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center">
      <table class="w-full border-separate border-spacing-y-4">
        <tbody>
          <tr
            v-for="event in eventList"
            :key="`${event.time}-${event.description}`"
            class="bg-gray-50 hover:bg-green-100 "
          >
            <td class="py-8 px-40 max-md:px-4  max-xl:px-16 w-1/2 text-subtitle2 rounded-l-3xl font-medium whitespace-nowrap text-center">
              {{ event.time }}
            </td>
            <td class="text-p2 py-8 max-md:px-4 max-xl:px-16 pr-40 w-1/2 rounded-r-3xl text-center">
              {{ event.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
