<script setup lang="ts">
import IconLogo from 'assets/logo-footer.svg';
</script>

<template>
  <footer class="h-[112px] max-md:h-[246px] flex max-md:flex-col items-center justify-between px-12 pt-6 max-md:px-2 max-md:pt-2">
    <IconLogo class="w-[149px] h-12" />

    <div class="text-small font-light">
      {{ $t('footer.copyright') }}
    </div>

    <InstagramBtn href="https://www.instagram.com/" />

    <ButtonLevel
      class="fixed bottom-6 md:hidden w-[calc(100%-32px)] "
      type="3"
    >
      {{ $t('footer.donate') }}
    </ButtonLevel>
  </footer>
</template>
