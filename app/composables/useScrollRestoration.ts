export function useScrollRestoration() {
  const SCROLL_POSITION_KEY = 'scroll_position';

  const saveScrollPosition = () => {
    const scrollY = window.scrollY;
    sessionStorage.setItem(SCROLL_POSITION_KEY, scrollY.toString());
  };

  const restoreScrollPosition = () => {
    if (import.meta.client) {
      const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
      if (savedPosition) {
        const position = parseInt(savedPosition, 10);
        window.scrollTo(0, position);
        sessionStorage.removeItem(SCROLL_POSITION_KEY);
      }
    }
  };

  const setupScrollSaving = () => {
    if (import.meta.client) {
      window.addEventListener('beforeunload', saveScrollPosition);
    }
  };

  const cleanupScrollSaving = () => {
    if (import.meta.client) {
      window.removeEventListener('beforeunload', saveScrollPosition);
    }
  };

  return {
    saveScrollPosition,
    restoreScrollPosition,
    setupScrollSaving,
    cleanupScrollSaving,
  };
}
