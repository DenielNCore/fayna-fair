<script setup lang="ts">
import IconArrow from 'assets/arrow.svg';
</script>

<template>
  <div class="mx-12 bg-green-100 flex max-md:flex-col max-md:gap-16 items-center rounded-[32px] p-12 max-md:p-4 max-md:pt-8">
    <div class="w-1/2 flex flex-col gap-9 max-md:w-full">
      <div class="text-green-700 text-subtitle2 font-medium">
        {{ $t('home.hero.subtitle') }}
      </div>
      <div class="text-h1 max-xl:text-h3 font-semibold ">
        {{ $t('home.hero.title') }}
      </div>
      <div class="text-p2">
        {{ $t('home.hero.description') }}
      </div>
      <div class="max-md:hidden">
        <div class="w-full h-full  flex items-center gap-16 ">
          <NuxtImg
            class="rounded-lg min-w-[105px] min-h-[105px]"
            src="/donate-qr.png"
            width="105"
            height="105"
          />
          <div class="font-[caveat] text-p1 text-green-700 font-bold whitespace-nowrap relative">
            {{ $t('home.hero.scanDonate') }}
            <IconArrow class="absolute -left-[80px] -bottom-5 w-36 h-8 stroke-green-700" />
          </div>
        </div>
      </div>
    </div>
    <NuxtImg
      class="w-1/2 max-md:w-full"
      src="/main.png"
    />
  </div>
</template>

<style scoped>

</style>
