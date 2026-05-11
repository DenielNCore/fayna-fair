<script setup lang="ts">
export type TButtonType = 1 | 2 | 3 | '1' | '2' | '3';

type TButtonStyles = {
  normal: string;
  hover: string;
  active: string;
  disabled: string;
};

const props = withDefaults(
  defineProps<{ disabled?: boolean; type?: TButtonType; ariaLabel?: string; href?: string; target?: string }>(),
  {
    disabled: false,
    type: 1,
    ariaLabel: 'button',
    href: '',
    target: '_self',
  },
);

const styleClasses: Record<TButtonType, TButtonStyles> = {
  1: {
    normal: '',
    hover: '',
    active: 'active:translate-y-[1px]',
    disabled: 'disabled:pointer-events-none',
  },

  2: {
    normal: 'bg-red-500 text-gray-50 text-button px-2 py-4 font-bold h-[52px]',
    hover: 'hover:bg-red-500/90',
    active: 'active:translate-y-[1px]',
    disabled: 'disabled:pointer-events-none disabled:bg-gray-800 disabled:text-gray-500/50',
  },

  3: {
    normal: 'bg-red-500 text-gray-50 text-button px-2 py-4 font-bold h-[52px]',
    hover: 'hover:bg-red-500/90',
    active: 'active:translate-y-[1px]',
    disabled: 'disabled:pointer-events-none disabled:bg-gray-800 disabled:text-gray-500/50',
  },
};

const typedStyles = computed(
  () =>
    `${styleClasses[props.type].normal} `
    + `${styleClasses[props.type].hover} `
    + `${styleClasses[props.type].active} `
    + `${styleClasses[props.type].disabled} `,
);
</script>

<template>
  <button
    :aria-label="ariaLabel"
    :disabled="disabled"
    class="cursor-pointer select-none text-center outline-none rounded  whitespace-nowrap"
    :class="typedStyles"
  >
    <a
      v-if="href"
      :target="target"
      class="flex gap-2 justify-center items-center"
      :href="href"
    >
      <slot name="default" />
    </a>
    <div
      v-else
      class="flex gap-2 justify-center items-center"
    >
      <slot name="default" />
    </div>
  </button>
</template>

<style scoped lang="scss"></style>
