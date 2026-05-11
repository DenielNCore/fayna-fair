<script setup lang="ts">
import IconLogo from 'assets/logo-full.svg';
import IconInstagram from 'assets/icons/insta.svg';

// const { isScrolled } = useHeaderScroll(50);

// const menuIsOpen = ref(false);

// const handleAnchorClick = (e: MouseEvent, href: string) => {
//   if (href.startsWith('#')) {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//       menuIsOpen.value = false;
//     }
//   }
// };

const links = [
  { name: 'Хто ми',
    href: '/about',
  },
  {
    name: 'Програма',
    href: '/program',
  },
  {
    name: 'Допомога армія',
    href: '/help',
  },
  {
    name: 'Галерея',
    href: '/gallery',
  },
  {
    name: 'Партнерам',
    href: '/partners',
  },
];

const isOpen = ref(true);
</script>

<template>
  <div class="w-full px-12 pt-6 max-md:px-2 max-md:pt-2 fixed left-0">
    <div
      :class="{
        'max-md:h-[calc(100dvh_-_16px)]': isOpen,
        '': !isOpen,

      }"
      class="bg-gray-50 max-md:flex max-md:flex-col max-md:justify-between px-3 py-2 rounded-xl drop-shadow-md "
    >
      <div class="h-[50px] flex gap-6 justify-between items-center">
        <a href="/">
          <IconLogo
            class="h-[54px] min-w-[242px] cursor-pointer"
          />
        </a>

        <div class="flex gap-6 max-md:hidden">
          <ButtonLevel
            v-for="link in links"
            :key="link.name"
            class="text-button font-semibold text-gray-900 hover:text-gray-900/70"
            :href="link.href"
          >
            {{ link.name }}
          </ButtonLevel>
        </div>

        <div class="flex gap-4 items-center max-md:hidden">
          <ButtonLevel class="bg-green-100 w-[44px] h-[44px] rounded-full hover:bg-green-100/80">
            <IconInstagram class="text-gray-900 " />
          </ButtonLevel>
          <ButtonLevel
            class="w-[216px]"
            type="2"
          >
            Підтримати
          </ButtonLevel>
        </div>

        <div class="md:hidden">
          <BurgerBtn v-model:is-open="isOpen" />
        </div>
      </div>

      <template v-if="isOpen">
        <div class="flex flex-col gap-6">
          <ButtonLevel
            v-for="link in links"
            :key="link.name"
            class="text-button font-semibold text-gray-900 hover:text-gray-900/70"
            :href="link.href"
          >
            {{ link.name }}
          </ButtonLevel>
        </div>

        <div class="flex flex-col gap-4 items-center">
          <ButtonLevel class="bg-green-100 w-[44px] h-[44px] rounded-full hover:bg-green-100/80">
            <IconInstagram class="text-gray-900 " />
          </ButtonLevel>
          <ButtonLevel
            class="w-[216px]"
            type="2"
          >
            Підтримати
          </ButtonLevel>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
