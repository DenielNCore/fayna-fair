<script setup lang="ts">
import IconArrow from 'assets/arrow.svg';
</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('valuesFlow.title') }}
    </template>
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center max-xl:hidden ">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
      >
        <IconArrow
          :style="{ scale: '-1 1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 bottom-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
      >
        <IconArrow
          :style="{ scale: '-1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 top-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 right-1/2"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
      >
        <IconArrow
          :style="{ scale: '1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 top-0 -right-10"
        />
      </PointOurValue>

      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
      />
    </div>
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center max-lg:hidden xl:hidden  *:w-[343px]">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
      >
        <IconArrow
          :style="{ scale: '-1 1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 bottom-0 -right-10"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>
      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>

      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
      >
        <IconArrow
          :style="{ scale: '1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 top-0 -left-10"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
      />
    </div>
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center lg:hidden *:w-full">
      <PointOurValue
        num="1"
        :title="$t('valuesFlow.1.title')"
        :text="$t('valuesFlow.1.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>
      <PointOurValue
        num="2"
        :title="$t('valuesFlow.2.title')"
        :text="$t('valuesFlow.2.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 left-0"
        />
      </PointOurValue>
      <PointOurValue
        num="3"
        :title="$t('valuesFlow.3.title')"
        :text="$t('valuesFlow.3.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 right-0"
        />
      </PointOurValue>

      <PointOurValue
        num="4"
        :title="$t('valuesFlow.4.title')"
        :text="$t('valuesFlow.4.text')"
      >
        <IconArrow
          :style="{ rotate: '-90deg', scale: '1 -1' }"
          class="absolute z-10 stroke-red-500 w-16 h-10 -bottom-10 left-0"
        />
      </PointOurValue>

      <PointOurValue
        num="5"
        :title="$t('valuesFlow.5.title')"
        :text="$t('valuesFlow.5.text')"
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
