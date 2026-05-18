<script setup lang="ts">
import IconLogo from 'assets/logo-footer.svg';
</script>

<template>
  <footer class="h-[112px] max-md:h-[246px] flex max-md:flex-col items-center justify-between">
    <IconLogo class="w-[149px] h-12" />

    <div class="text-small font-light">
      © 2026 Файний ярмарок. Зроблено сусідами для перемоги.
    </div>

    <InstagramBtn />

    <ButtonLevel
      class="fixed bottom-6 md:hidden"
      type="3"
    >
      Задонатити
    </ButtonLevel>
  </footer>
</template>
