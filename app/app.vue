<script setup lang="ts">
const containerRef = ref<HTMLElement | null>(null);
const { width } = useElementSize(containerRef);
const padding = useBigLayoutPadding();
const { setupScrollSaving, restoreScrollPosition } = useScrollRestoration();

useHead({
  title: 'ФАЙНИЙ ЯРМАРОК',
  htmlAttrs: {
    lang: 'uk',
  },
});

onMounted(() => {
  // Встановити зберігання скролу при закритті сторінки
  setupScrollSaving();

  // Відновити скрол після завантаження
  nextTick(() => {
    restoreScrollPosition();
  });
});

watch(width, (newWidth) => {
  let p = 120;
  if (newWidth > 1990 + 240) p = ~~(newWidth - 1990) / 2;
  if (newWidth < 1280) p = 80;
  if (newWidth < 768) p = 16;
  padding.value = p;
}, { immediate: true });
</script>

<template>
  <div ref="containerRef">
    <NuxtLoadingIndicator />
    <NuxtLayout name="default" />
    <NuxtRouteAnnouncer />
    <!--    <NuxtWelcome /> -->
  </div>
</template>
