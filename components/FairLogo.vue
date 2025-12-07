<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Logo Icon with Christmas/Charity theme -->
    <div class="relative mb-3 sm:mb-4">
      <div class="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        <!-- Main circle with gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300" />
        <!-- Inner decorative circle -->
        <div class="absolute inset-2 bg-white/20 rounded-full backdrop-blur-sm" />
        <!-- Heart icon for charity -->
        <svg
          class="absolute inset-0 w-full h-full text-white p-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <!-- Decorative stars -->
        <div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full opacity-90 animate-pulse" />
        <div class="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-300 rounded-full opacity-70" />
        <div class="absolute top-1/2 -left-2 w-2 h-2 bg-red-300 rounded-full opacity-60" />
      </div>
    </div>
    <!-- Logo Text -->
    <div class="text-center px-2">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
        <span class="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Файний Ярмарок
        </span>
      </h1>
      <div class="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-600 font-medium">
        <svg
          class="w-4 h-4 text-amber-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span>Благодійна подія</span>
      </div>
    </div>
  </div>
</template>
