<script setup lang="ts">
import IconCopy from 'assets/icons/copy.svg';
import IconDone from 'assets/icons/done-all.svg';

const props = defineProps<{
  content: string;
}>();
const isCopied = ref(false);

let copiedStateTimer: ReturnType<typeof setTimeout> | null = null;

async function handleCopyClick() {
  if (!props.content) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(props.content);
    }
    else {
      const textarea = document.createElement('textarea');
      textarea.value = props.content;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    isCopied.value = true;

    if (copiedStateTimer) {
      clearTimeout(copiedStateTimer);
    }

    copiedStateTimer = setTimeout(() => {
      isCopied.value = false;
    }, 1800);
  }
  catch {
    isCopied.value = false;
  }
}

onBeforeUnmount(() => {
  if (!copiedStateTimer) return;
  clearTimeout(copiedStateTimer);
});
</script>

<template>
  <ButtonLevel @click="handleCopyClick">
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
