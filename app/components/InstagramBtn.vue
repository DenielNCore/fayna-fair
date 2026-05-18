<script setup lang="ts">
import IconInstagram from 'assets/icons/insta.svg';

defineProps<{ href: string }>();
</script>

<template>
  <ButtonLevel
    :href="href"
    target="_blank"
    class="bg-green-100 w-[44px] h-[44px] rounded-full hover:bg-green-100/80"
  >
    <IconInstagram class=" " />
  </ButtonLevel>
</template>
