<script setup lang="ts">
import IconLogo from 'assets/logo-full.svg';
import IconLogoMob from 'assets/logo-mob.svg';
import InstagramBtn from '~/components/InstagramBtn.vue';

const { t } = useI18n();

const links = computed(() => [
  {
    name: t('header.links.about'),
    href: '/about',
  },
  {
    name: t('header.links.program'),
    href: '/program',
  },
  {
    name: t('header.links.help'),
    href: '/help',
  },
  {
    name: t('header.links.gallery'),
    href: '/gallery',
  },
  {
    name: t('header.links.partners'),
    href: '/partners',
  },
]);

const isOpen = ref(false);
</script>

<template>
  <header class="w-full px-12 pt-6 max-md:px-2 max-md:pt-2 fixed left-0 z-20">
    <div
      :class="{
        'max-md:h-[calc(100dvh_-_16px)]': isOpen,
        'max-md:h-[66px]': !isOpen,
      }"
      class="bg-gray-50 max-md:flex max-md:flex-col max-md:justify-between px-3 py-2 rounded-xl drop-shadow-md transition-all duration-300"
    >
      <div class="h-[50px] flex gap-6 justify-between items-center">
        <a href="/">
          <IconLogo
            class="h-[54px] min-w-[242px] cursor-pointer max-md:hidden"
          />
          <IconLogoMob
            class="h-[54px] min-w-[242px] cursor-pointer md:hidden"
          />
        </a>

        <div class="flex gap-6 max-md:hidden">
          <ButtonLevel
            v-for="link in links"
            :key="link.name"
            class="text-button font-semibold hover:text-gray-900/70"
            :href="link.href"
          >
            {{ link.name }}
          </ButtonLevel>
        </div>

        <div class="flex gap-4 items-center max-md:hidden">
          <InstagramBtn />
          <ButtonLevel
            class="w-[216px]"
            type="2"
          >
            {{ t('header.support') }}
          </ButtonLevel>
        </div>

        <div class="md:hidden">
          <BurgerBtn v-model:is-open="isOpen" />
        </div>
      </div>

      <template v-if="isOpen">
        <div class="flex flex-col gap-6 md:hidden">
          <ButtonLevel
            v-for="link in links"
            :key="link.name"
            class="text-button font-semibold hover:text-gray-900/70"
            :href="link.href"
          >
            {{ link.name }}
          </ButtonLevel>
        </div>

        <div class="flex flex-col gap-4 items-center md:hidden">
          <InstagramBtn />
          <ButtonLevel
            class="w-[216px]"
            type="2"
          >
            {{ t('header.support') }}
          </ButtonLevel>
        </div>
      </template>
    </div>
  </header>
</template>

<style scoped>

</style>
