export const usePartnersStore = defineStore('partners', () => {
  const list = [
    { src: '/partners/prestij.png' },
    { src: '/partners/wookie.png', height: '58px' },
    { src: '/partners/mercedes-benz.png' },
    { src: '/partners/ducati.png' },
    { src: '/partners/event-help.png' },
    { src: '/partners/faina-clinic.png' },
    { src: '/partners/bww.png', height: '44px' },
    { src: '/partners/pinchakovskyi.png', height: '32px' },
    { src: '/partners/uk.png', height: '54px' },
  ];

  return {
    list,
  };
});
