<script setup lang="ts">
import {
  cloneVNode,
  Comment,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  nextTick,
  type PropType,
  type VNode,
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

const slots = useSlots();
const wrapperRef = ref<HTMLElement | null>(null);
const measureSlideElements = ref<HTMLElement[]>([]);
const slideWidths = ref<number[]>([]);
const containerWidth = ref(0);
const isPaused = ref(false);
const offsetX = ref(0);

const VNodeRenderer = defineComponent({
  name: 'VNodeRenderer',
  props: {
    vnode: {
      type: Object as PropType<VNode>,
      required: true,
    },
  },
  setup(localProps) {
    return () => localProps.vnode;
  },
});

const baseSlides = computed(() => {
  const nodes = slots.default?.() ?? [];
  return nodes
    .filter(node => node.type !== Comment)
    .filter((node) => {
      if (typeof node.children !== 'string') return true;
      return node.children.trim().length > 0;
    })
    .map((node, index) => cloneVNode(node, { key: `slide-${index}` }));
});

const slidesCount = computed(() => baseSlides.value.length);

const sequenceContentWidth = computed(() => {
  if (slidesCount.value === 0) return 0;
  const itemsWidth = slideWidths.value.reduce((sum, width) => sum + width, 0);
  const gapsWidth = props.gap * Math.max(slidesCount.value - 1, 0);
  return itemsWidth + gapsWidth;
});

const sequenceAdvance = computed(() => {
  if (slidesCount.value === 0) return 0;
  return sequenceContentWidth.value + props.gap;
});

const canScroll = computed(() => {
  if (slidesCount.value <= 0) return false;
  if (containerWidth.value <= 0) return false;
  return sequenceContentWidth.value > containerWidth.value + 1;
});

const renderedSlides = computed(() => {
  if (!canScroll.value) return baseSlides.value;

  const left = baseSlides.value.map((slide, index) => cloneVNode(slide, { key: `left-${index}` }));
  const center = baseSlides.value.map((slide, index) => cloneVNode(slide, { key: `center-${index}` }));
  const right = baseSlides.value.map((slide, index) => cloneVNode(slide, { key: `right-${index}` }));

  return [...left, ...center, ...right];
});

const trackStyle = computed(() => ({
  'column-gap': `${props.gap}px`,
  'transform': `translateX(-${canScroll.value ? offsetX.value : 0}px)`,
}));

function measureLayout() {
  const nextContainerWidth = wrapperRef.value?.getBoundingClientRect().width ?? 0;
  const nextSlideWidths = measureSlideElements.value.map(el => el.getBoundingClientRect().width);

  if (Math.abs(nextContainerWidth - containerWidth.value) > 0.5) {
    containerWidth.value = nextContainerWidth;
  }

  const hasSameWidths = nextSlideWidths.length === slideWidths.value.length
    && nextSlideWidths.every((width, index) => Math.abs(width - (slideWidths.value[index] ?? 0)) <= 0.5);

  if (!hasSameWidths) {
    slideWidths.value = nextSlideWidths;
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

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    measureLayout();
  });

  if (wrapperRef.value) {
    resizeObserver.observe(wrapperRef.value);
  }

  window.addEventListener('resize', onWindowResize);
  measureLayout();
});

onBeforeUnmount(() => {
  stopLoop();
  resizeObserver?.disconnect();
  window.removeEventListener('resize', onWindowResize);
});

watch(() => [props.gap, slidesCount.value], async () => {
  await nextTick();
  measureLayout();
}, { immediate: true });

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
    class="relative w-full overflow-hidden"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="absolute invisible pointer-events-none -z-10">
      <div
        class="flex"
        :style="{ 'column-gap': `${gap}px` }"
      >
        <div
          v-for="(slide, index) in baseSlides"
          :key="`measure-${index}`"
          ref="measureSlideElements"
          class="shrink-0"
        >
          <VNodeRenderer :vnode="slide" />
        </div>
      </div>
    </div>

    <div
      class="flex"
      :style="trackStyle"
    >
      <div
        v-for="(slide, index) in renderedSlides"
        :key="slide.key ?? `slide-${index}`"
        class="shrink-0"
      >
        <VNodeRenderer :vnode="slide" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
