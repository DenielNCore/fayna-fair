<script setup lang="ts">
defineProps<{ title: string; text: string; num: string; delay?: number; arrowDelay?: number }>();

const isVisible = ref(false);
const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 },
  );

  if (elementRef.value) {
    observer.observe(elementRef.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div
    ref="elementRef"
    class="value-card-wrapper"
    :class="{ 'is-visible': isVisible }"
    :style="{ '--delay': `${delay ?? 0}ms`, '--arrow-delay': `${arrowDelay ?? (delay ?? 0) + 600}ms` }"
  >
    <!-- Картка з анімацією -->
    <div class="rounded-3xl bg-gray-50 p-6 w-[334px] h-full flex flex-col gap-4 value-card">
      <div class="text-gray-50 text-subtitle1 font-semibold w-14 h-14 bg-green-700 rounded-full flex justify-center items-center num-badge">
        {{ num }}
      </div>
      <div class="text-subtitle2 font-medium card-title">
        {{ title }}
      </div>
      <div class="text-p2 card-text">
        {{ text }}
      </div>
    </div>
    <!-- Стрілка ЗА межами картки, але в wrapper -->
    <div class="arrow-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.value-card-wrapper {
  position: relative;
  width: 334px;
}

.value-card {
  position: relative;
  overflow: visible;
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay);
}

.value-card-wrapper.is-visible .value-card {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.value-card .num-badge {
  transform: scale(0);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(var(--delay) + 200ms);
}

.value-card-wrapper.is-visible .num-badge {
  transform: scale(1);
}

.value-card .card-title {
  opacity: 0;
  transform: translateX(-20px);
  transition:
    opacity 0.4s ease-out,
    transform 0.4s ease-out;
  transition-delay: calc(var(--delay) + 350ms);
}

.value-card-wrapper.is-visible .card-title {
  opacity: 1;
  transform: translateX(0);
}

.value-card .card-text {
  opacity: 0;
  transform: translateX(-20px);
  transition:
    opacity 0.4s ease-out,
    transform 0.4s ease-out;
  transition-delay: calc(var(--delay) + 450ms);
}

.value-card-wrapper.is-visible .card-text {
  opacity: 1;
  transform: translateX(0);
}

/* Контейнер для стрілки - поза transform елементом */
.arrow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
}

/* Стрілки */
.arrow-container :deep(svg) {
  opacity: 0;
  transform: scale(0.5);
  transition:
    opacity 0.4s ease-out,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--arrow-delay);
}

.value-card-wrapper.is-visible .arrow-container :deep(svg) {
  opacity: 1;
  transform: scale(1);
}
</style>
