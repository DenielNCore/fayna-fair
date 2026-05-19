<script setup lang="ts">
const { t } = useI18n();

const initiatives = computed(() => [
  {
    title: t('home.initiatives.first.title'),
    text: t('home.initiatives.first.text'),
  },
  {
    title: t('home.initiatives.second.title'),
    text: t('home.initiatives.second.text'),
  },
  {
    title: t('home.initiatives.third.title'),
    text: t('home.initiatives.third.text'),
  },
]);

const ourValues = computed(() => [
  {
    img: '/goal-1.png',
    title: t('home.values.first.title'),
    text: t('home.values.first.text'),
  },
  {
    img: '/goal-2.png',
    title: t('home.values.second.title'),
    text: t('home.values.second.text'),
  },
  {
    img: '/goal-3.png',
    title: t('home.values.third.title'),
    text: t('home.values.third.text'),
  },
  {
    img: '/goal-4.png',
    title: t('home.values.fourth.title'),
    text: t('home.values.fourth.text'),
  },
]);
</script>

<template>
  <div>
    <!--  ГОЛОВНИЙ БЛОК  -->
    <BlockMain />
    <!--  ПРО ІНІЦІАТИВУ  -->
    <BlockWrapper>
      <div class="flex flex-col gap-8 max-md:justify-center">
        <div class="text-h2 font-semibold text-center">
          {{ t('home.about.title') }}
        </div>
        <div class="text-p1 max-md:text-justify text-center w-[760px] max-xl:w-full">
          {{ t('home.about.description') }}
        </div>
      </div>

      <div class="flex max-md:flex-col gap-8">
        <div
          v-for="initiative in initiatives"
          :key="initiative.title"
          class="bg-gray-50 rounded-3xl p-6 flex flex-col gap-8 w-1/3 max-md:w-full"
        >
          <div class="text-subtitle1 font-semibold">
            {{ initiative.title }}
          </div>
          <div class="text-p2">
            {{ initiative.text }}
          </div>
        </div>
      </div>

      <!--  ГАЛЕРЕЯ  -->
      <CarouselWrapper class="h-[220px]">
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-1.png"
        />
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-2.png"
        />
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-3.png"
        />
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-4.png"
        />
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-5.png"
        />
        <NuxtImg
          width="244"
          height="156"
          class="rounded-3xl"
          src="gallery/gallery-6.png"
        />
      </CarouselWrapper>
    </BlockWrapper>

    <!--  НАШІ ЦІННОСТІ 1 -->

    <BlockWrapper>
      <template #title>
        {{ t('home.values.title') }}
      </template>
      <div class="flex max-xl:flex-col gap-8">
        <div
          v-for="overValue in ourValues"
          :key="overValue.title"

          class="bg-gray-50 p-6 flex flex-col gap-8 w-1/4 max-xl:w-full rounded-3xl"
        >
          <NuxtImg
            class="h-16 w-fit"
            :src="overValue.img"
          />
          <div class="text-subtitle2 font-medium">
            {{ overValue.title }}
          </div>
          <div class="text-p2">
            {{ overValue.text }}
          </div>
        </div>
      </div>
    </BlockWrapper>

    <!--  НАШІ ЦІННОСТІ 2 -->
    <BlockOurValues2 />

    <!--  ПРОГРАМА ЯРМАРКУ -->
    <BlockProgram />

    <!--  КОМАНДА -->
    <BlockTeam />

    <!--  ПАРТНЕРИ -->
    <BlockPartners />
  </div>
</template>

<style scoped>

</style>
