interface GalleryPhoto {
  key: string;
  url: string;
  lastModified?: string;
  size?: number;
}

interface GalleryResponse {
  success: boolean;
  photos: GalleryPhoto[];
  error?: string;
}

export const useGalleryStore = defineStore('gallery', () => {
  const photos = ref<GalleryPhoto[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const photoUrls = computed(() => {
    return photos.value.map(item => item.url);
  });

  async function fetchPhotos() {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch<GalleryResponse>('/api/gallery');

      if (response.success) {
        photos.value = response.photos;
      }
      else {
        error.value = response.error || 'Failed to load gallery';
      }
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load gallery';
      console.error('Gallery fetch error:', e);
    }
    finally {
      isLoading.value = false;
    }
  }

  return {
    photos,
    photoUrls,
    isLoading,
    error,
    fetchPhotos,
  };
});
