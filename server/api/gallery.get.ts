import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  // Перевіряємо чи налаштовані змінні
  if (!config.doSpacesKey || !config.doSpacesSecret || !config.doSpacesBucket) {
    console.warn('S3 credentials not configured, returning empty gallery');
    return {
      success: true,
      photos: [],
      warning: 'S3 not configured',
    };
  }

  const s3Client = new S3Client({
    endpoint: `https://${config.doSpacesRegion}.digitaloceanspaces.com`,
    region: config.doSpacesRegion,
    credentials: {
      accessKeyId: config.doSpacesKey,
      secretAccessKey: config.doSpacesSecret,
    },
  });

  try {
    const command = new ListObjectsV2Command({
      Bucket: config.doSpacesBucket,
      Prefix: 'gallery/', // папка з фото
    });

    const response = await s3Client.send(command);

    const photos = (response.Contents || [])
      .filter(item => item.Key && !item.Key.endsWith('/')) // прибираємо папки
      .filter(item => /\.(jpg|jpeg|png|webp|gif)$/i.test(item.Key!)) // тільки зображення
      .map(item => ({
        key: item.Key,
        url: `https://${config.doSpacesBucket}.${config.doSpacesRegion}.digitaloceanspaces.com/${item.Key}`,
        lastModified: item.LastModified,
        size: item.Size,
      }))
      .sort((a, b) => {
        // Сортуємо за датою (новіші першими)
        const dateA = a.lastModified ? new Date(a.lastModified).getTime() : 0;
        const dateB = b.lastModified ? new Date(b.lastModified).getTime() : 0;
        return dateB - dateA;
      });

    return {
      success: true,
      photos,
    };
  }
  catch (error) {
    console.error('S3 list error:', error);
    return {
      success: false,
      photos: [],
      error: error instanceof Error ? error.message : 'Failed to list photos',
    };
  }
});
