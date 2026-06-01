<script setup lang="ts">
import IconArrow from 'assets/arrow.svg';
</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('valuesFlow.title') }}
    </template>
    <!-- XL+ layout (desktop) -->
    <!-- Порядок: 1 (0) -> стрілка (250) -> 2 (500) -> стрілка (750) -> 3 (1000) -> стрілка (1250) -> 4 (1500) -> стрілка (1750) -> 5 (2000) -->
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center items-stretch max-xl:hidden max-w-[1200px]">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
        :delay="0"
        :arrow-delay="250"
      >
        <IconArrow
          :style="{ scale: '-1 1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 bottom-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
        :delay="500"
        :arrow-delay="750"
      >
        <IconArrow
          :style="{ scale: '-1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 top-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
        :delay="1000"
        :arrow-delay="1250"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 right-1/2"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
        :delay="2000"
      />

      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
        :delay="1500"
        :arrow-delay="1750"
      >
        <IconArrow
          :style="{ scale: '1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 top-0 -left-10"
        />
      </PointOurValue>
    </div>
    <!-- LG-XL layout (tablet landscape) -->
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center items-stretch max-lg:hidden xl:hidden *:w-[343px]">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
        :delay="0"
        :arrow-delay="250"
      >
        <IconArrow
          :style="{ scale: '-1 1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 bottom-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
        :delay="500"
        :arrow-delay="750"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>
      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
        :delay="1500"
        :arrow-delay="1750"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>

      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
        :delay="1000"
        :arrow-delay="1250"
      >
        <IconArrow
          :style="{ scale: '1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 top-0 -left-10"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
        :delay="2000"
      />
    </div>
    <!-- Mobile layout -->
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center items-stretch lg:hidden *:w-full">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
        :delay="0"
        :arrow-delay="200"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
        :delay="400"
        :arrow-delay="600"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 left-0"
        />
      </PointOurValue>
      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
        :delay="800"
        :arrow-delay="1000"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>

      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
        :delay="1200"
        :arrow-delay="1400"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-50 stroke-red-500 w-16 h-10 -bottom-10 left-0"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
        :delay="1600"
      />
    </div>

    <!--  ВІДЕО  -->
    <div>
      <NuxtImg
        width="1014"
        height="570"
        src="video.png"
      />
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
