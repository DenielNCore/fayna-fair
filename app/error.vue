<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });

const isDev = process.env.NODE_ENV === 'development';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="text-center max-w-md">
      <h1 class="text-6xl font-bold text-green-600 mb-4">
        {{ error.statusCode || 500 }}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        {{ error.statusCode === 404 ? 'Сторінку не знайдено' : 'Щось пішло не так' }}
      </h2>
      <p class="text-gray-600 mb-8">
        {{ error.statusCode === 404
          ? 'Схоже, такої сторінки не існує.'
          : 'Виникла несподівана помилка. Спробуйте пізніше.'
        }}
      </p>

      <div
        v-if="isDev && error.message"
        class="mb-6 p-4 bg-red-50 rounded-lg text-left"
      >
        <p class="text-sm text-red-600 font-mono break-all">
          {{ error.message }}
        </p>
      </div>

      <button
        class="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
        @click="handleError"
      >
        На головну
      </button>
    </div>
  </div>
</template>
