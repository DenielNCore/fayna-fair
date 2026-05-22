<script setup lang="ts">
import IconCopy from 'assets/icons/copy.svg';
import IconDone from 'assets/icons/done-all.svg';

defineProps<{
  content: string;
}>();
const isCopied = ref(false);
</script>

<template>
  <ButtonLevel>
    <div class="flex gap-4 items-center font-bold">
      <template v-if="!isCopied">
        <div>{{ $t('donate.copy') }}</div>
        <IconCopy />
      </template>
      <template v-else>
        <div class="text-green-700">
          {{ $t('donate.copied') }}
        </div>
        <IconDone />
      </template>
    </div>
  </ButtonLevel>
</template>

<style scoped>

</style>
