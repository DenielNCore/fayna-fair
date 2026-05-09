import type { DirectiveBinding } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  const clickOutsideDirective = {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      el.clickOutsideEvent = (event: MouseEvent) => {
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event);
        }
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: HTMLElement) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.body.removeEventListener('click', el.clickOutsideEvent);
    },
  };

  nuxtApp.vueApp.directive('click-outside', clickOutsideDirective);
});
