<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  nextTick,
} from 'vue';

const props = withDefaults(defineProps<{
  gap?: number;
  speed?: number;
  pauseOnHover?: boolean;
}>(), {
  gap: 24,
  speed: 80,
  pauseOnHover: false,
});

const wrapperRef = ref<HTMLElement | null>(null);
const trackRef = ref<HTMLElement | null>(null);
const containerWidth = ref(0);
const contentWidth = ref(0);
const isPaused = ref(false);
const offsetX = ref(0);
const isReady = ref(false);

const canScroll = computed(() => {
  if (!isReady.value) return false;
  if (containerWidth.value <= 0) return false;
  if (contentWidth.value <= 0) return false;
  return contentWidth.value > containerWidth.value + 1;
});

const sequenceAdvance = computed(() => {
  return contentWidth.value + props.gap;
});

const trackStyle = computed(() => ({
  'column-gap': `${props.gap}px`,
  'transform': canScroll.value ? `translateX(-${offsetX.value}px)` : 'none',
}));

function measureLayout() {
  const nextContainerWidth = wrapperRef.value?.getBoundingClientRect().width ?? 0;
  const nextContentWidth = trackRef.value?.scrollWidth ?? 0;

  containerWidth.value = nextContainerWidth;
  // Content width is for one set of slides (total / 3)
  contentWidth.value = canScroll.value ? nextContentWidth / 3 : nextContentWidth;

  if (nextContainerWidth > 0 && nextContentWidth > 0) {
    isReady.value = true;
  }
}

let resizeObserver: ResizeObserver | null = null;
let rafId: number | null = null;
let lastTick = 0;

function onWindowResize() {
  measureLayout();
}

function stopLoop() {
  if (rafId === null) return;
  cancelAnimationFrame(rafId);
  rafId = null;
  lastTick = 0;
}

function runLoop(timestamp: number) {
  if (!canScroll.value) {
    stopLoop();
    return;
  }

  if (lastTick === 0) {
    lastTick = timestamp;
  }

  const delta = timestamp - lastTick;
  lastTick = timestamp;

  if (!isPaused.value) {
    const step = (Math.max(props.speed, 1) * delta) / 1000;
    offsetX.value += step;

    const resetPoint = sequenceAdvance.value * 2;
    if (offsetX.value >= resetPoint) {
      offsetX.value -= sequenceAdvance.value;
    }
  }

  rafId = requestAnimationFrame(runLoop);
}

function startLoop() {
  if (!canScroll.value) return;
  if (rafId !== null) return;
  rafId = requestAnimationFrame(runLoop);
}

function handleMouseEnter() {
  if (!props.pauseOnHover) return;
  isPaused.value = true;
}

function handleMouseLeave() {
  isPaused.value = false;
}

onMounted(async () => {
  resizeObserver = new ResizeObserver(() => {
    measureLayout();
  });

  if (wrapperRef.value) {
    resizeObserver.observe(wrapperRef.value);
  }

  window.addEventListener('resize', onWindowResize);

  await nextTick();
  measureLayout();
});

onBeforeUnmount(() => {
  stopLoop();
  resizeObserver?.disconnect();
  window.removeEventListener('resize', onWindowResize);
});

watch(canScroll, (enabled) => {
  if (!enabled) {
    offsetX.value = 0;
    stopLoop();
    return;
  }

  offsetX.value = sequenceAdvance.value;
  startLoop();
}, { immediate: true });

watch(() => props.speed, () => {
  if (!canScroll.value) return;
  startLoop();
});
</script>

<template>
  <div
    ref="wrapperRef"
    class="relative w-full overflow-hidden bg-gray-50 flex items-center"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="trackRef"
      class="flex"
      :style="trackStyle"
    >
      <!-- First copy -->
      <slot />
      <!-- Second copy (for infinite scroll) -->
      <template v-if="canScroll">
        <slot />
      </template>
      <!-- Third copy (for infinite scroll) -->
      <template v-if="canScroll">
        <slot />
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>
