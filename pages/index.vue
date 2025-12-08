<script setup lang="ts">
interface Activity {
  id: string
  date: string
  time: string
  title: string
  organizer?: string
  price: string
  age: string
  spots: string
  duration: string
}

interface FormData {
  // name: string
  // phone: string
  selectedActivities: string[]
  termsAccepted: boolean
}

const userName = useLocalStorage('name', '');
const userPhone = useLocalStorage('phone', '');

const form = reactive<FormData>({
  // name: '',
  // phone: '',
  selectedActivities: [],
  termsAccepted: false,
})

const errors = reactive({
  name: '',
  phone: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Collapsible dates state - all expanded by default
const expandedDates = reactive<Record<string, boolean>>({})

// Toggle date expansion
const toggleDate = (date: string) => {
  expandedDates[date] = !expandedDates[date]
}

// Activities data
const activities: Activity[] = [
  {
    id: '1',
    date: '14.12.2025 (неділя)',
    time: '12:00 - 14:00',
    title: 'Творча зустріч. Майстер-клас з виготовлення брелока',
    organizer: 'CoffeeTunes',
    price: '800 грн',
    age: '6+',
    spots: '7',
    duration: '2 години',
  },
  {
    id: '2',
    date: '16.12.2025 (вівторок)',
    time: '18:00 - 20:00',
    title: 'Гра на соціальну дедукцію "Кров на годинниковій вежі"',
    organizer: 'Gараж',
    price: 'донат від 500 грн',
    age: '18+',
    spots: '15',
    duration: '2 години',
  },
  {
    id: '3',
    date: '16.12.2025 (вівторок)',
    time: '20:00 - 22:00',
    title: 'Гра на соціальну дедукцію "Кров на годинниковій вежі"',
    organizer: 'Gараж',
    price: 'донат від 500 грн',
    age: '18+',
    spots: '15',
    duration: '2 години',
  },
  {
    id: '4',
    date: '16.12.2025 (вівторок)',
    time: '19:00 - 21:00',
    title: 'Майстер-клас із створення різдвяного віночка',
    organizer: 'TserTsek',
    price: '2500 грн',
    age: '16+',
    spots: '8',
    duration: '2 години',
  },
  {
    id: '5',
    date: '17.12.2025 (середа)',
    time: '18:00 - 19:00',
    title: 'Виготовлення маски "Різдвяна коза"',
    organizer: 'БоХліб',
    price: '500 грн',
    age: '8+',
    spots: '8',
    duration: '1 година',
  },
  {
    id: '6',
    date: '17.12.2025 (середа)',
    time: '19:00 - 22:00',
    title: 'Майстер-клас "Мініатюрна шафа дивовиж"',
    organizer: 'Місцеві',
    price: '800 грн',
    age: '14+',
    spots: '8',
    duration: '3 години',
  },
  {
    id: '7',
    date: '18.12.2025 (четвер)',
    time: '17:00 - 20:00',
    title: 'Художній майстер-клас по створенню новорічної листівки',
    organizer: 'Cactus',
    price: '500 грн',
    age: '8+',
    spots: '10',
    duration: '3 години',
  },
  {
    id: '8',
    date: '21.12.2025 (неділя)',
    time: '12:00 - 14:00',
    title: 'Майстер-клас по виготовленню новорічної POP-UP листівки',
    organizer: 'Місцеві',
    price: '700 грн',
    age: '10+',
    spots: '8',
    duration: '2 години',
  },
]

// Group activities by date
const activitiesByDate = computed(() => {
  const grouped: Record<string, Activity[]> = {}
  activities.forEach((activity) => {
    if (!grouped[activity.date]) {
      grouped[activity.date] = []
    }
    grouped[activity.date].push(activity)
  })
  return grouped
})

// Initialize all dates as expanded when activities are loaded
watchEffect(() => {
  const dates = Object.keys(activitiesByDate.value)
  dates.forEach((date) => {
    if (!(date in expandedDates)) {
      expandedDates[date] = true
    }
  })
})

// Validation
const validateForm = (): boolean => {
  errors.name = ''
  errors.phone = ''

  if (!userName.value.trim()) {
    errors.name = 'Ім\'я та прізвище обов\'язкові'
    return false
  }

  if (!userPhone.value.trim()) {
    errors.phone = 'Номер телефону обов\'язковий'
    return false
  }

  const phoneRegex = /^[\d\s+\-()]+$/
  if (!phoneRegex.test(userPhone.value)) {
    errors.phone = 'Введіть коректний номер телефону'
    return false
  }

  return true
}

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  if (form.selectedActivities.length === 0) {
    alert('Будь ласка, оберіть хоча б одну активність')
    return
  }

  isSubmitting.value = true

  try {
    // Here you would typically send data to PocketBase or your backend
    // const pb = usePocketBase()
    // await pb.collection('registrations').create({
    //   name: form.name,
    //   phone: form.phone,
    //   activities: form.selectedActivities,
    //   termsAccepted: form.termsAccepted,
    // })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show success message
    showSuccess.value = true

    // Reset form
    userName.value = '';
    userPhone.value = '';
    form.selectedActivities = []
    form.termsAccepted = false

    // Scroll to success message
    setTimeout(() => {
      const successElement = document.querySelector('.bg-gradient-to-br.from-green-50')
      successElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }
  catch (error) {
    console.error('Error submitting form:', error)
    alert('Помилка при відправці форми. Спробуйте ще раз.')
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
    <!-- Decorative background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <!-- Logo and Header -->
      <div class="text-center mb-6 sm:mb-8 md:mb-12">
        <FairLogo />
        <div class="mt-4 sm:mt-6 md:mt-8">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
            Реєстрація на благодійні активності
          </h2>
          <div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-sm sm:text-base">
            <svg
              class="w-5 h-5 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-gray-700 font-semibold">
              13 - 21 грудня 2025
            </span>
          </div>
        </div>
      </div>

      <!-- Instructions Card -->
      <div class="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/50">
        <div class="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Як забронювати місце?
            </h3>
            <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
              <li class="flex items-start gap-2 sm:gap-3">
                <span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold mt-0.5">
                  1
                </span>
                <span class="flex-1">Відмітьте бажані активності в формі нижче та надішліть її*</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <span class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold mt-0.5">
                  2
                </span>
                <span class="flex-1">Оплатіть вартість участі (інформацію про банку для оплати кожного майстер-класу/активності очікуйте від наших волонтерів)</span>
              </li>
            </ul>
            <p class="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 italic bg-gray-50 p-2 sm:p-3 rounded-lg">
              * при реєстрації декількох осіб, будь ласка, заповнюйте форму на кожного окремо
            </p>
          </div>
        </div>
      </div>

      <!-- Registration Form -->
      <form
        class="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-white/50"
        @submit.prevent="handleSubmit"
      >
        <!-- Personal Information -->
        <div class="mb-6 sm:mb-8 md:mb-10">
          <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div class="w-1 h-6 sm:h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
              Ваші контактні дані
            </h3>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name -->
            <div class="md:col-span-2">
              <label
                for="name"
                class="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
              >
                Ваше ім'я та прізвище <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <svg
                    class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  id="name"
                  v-model="userName"
                  type="text"
                  required
                  class="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                  placeholder="Введіть ваше ім'я та прізвище"
                >
              </div>
              <p
                v-if="errors.name"
                class="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ errors.name }}
              </p>
            </div>

            <!-- Phone -->
            <div class="md:col-span-2">
              <label
                for="phone"
                class="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
              >
                Контактний номер телефону <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <svg
                    class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  id="phone"
                  v-model="userPhone"
                  type="tel"
                  required
                  class="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white"
                  placeholder="+380 XX XXX XX XX"
                >
              </div>
              <p
                v-if="errors.phone"
                class="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ errors.phone }}
              </p>
            </div>
          </div>
        </div>

        <!-- Activities -->
        <div class="mb-6 sm:mb-8 md:mb-10">
          <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div class="w-1 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
              Оберіть активності
            </h3>
          </div>
          <div class="space-y-6 sm:space-y-8">
            <!-- Activity Group by Date -->
            <div
              v-for="(dateActivities, date) in activitiesByDate"
              :key="date"
              class="relative bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                class="w-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 hover:bg-gray-50/50 transition-colors"
                @click="toggleDate(date)"
              >
                <div class="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words text-left">
                    {{ date }}
                  </h4>
                  <span class="text-xs sm:text-sm text-gray-500 font-medium flex-shrink-0">
                    ({{ dateActivities.length }} {{ dateActivities.length === 1 ? 'активність' : 'активностей' }})
                  </span>
                </div>
                <div class="flex-shrink-0">
                  <svg
                    class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedDates[date] }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[5000px]"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[5000px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-show="expandedDates[date]"
                  class="overflow-hidden"
                >
                  <div class="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div
                      v-for="activity in dateActivities"
                      :key="activity.id"
                      class="group relative bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border-2 border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                    >
                      <label class="flex items-start cursor-pointer gap-2 sm:gap-3 md:gap-4">
                        <div class="flex-shrink-0 pt-0.5 sm:pt-1">
                          <input
                            v-model="form.selectedActivities"
                            :value="activity.id"
                            type="checkbox"
                            class="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 focus:ring-amber-500 border-gray-300 rounded focus:ring-2"
                          >
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                            <div class="flex-1 min-w-0">
                              <p class="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 break-words">
                                {{ activity.title }}
                              </p>
                              <p
                                v-if="activity.organizer"
                                class="text-xs sm:text-sm text-amber-600 font-semibold"
                              >
                                {{ activity.organizer }}
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <span class="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md whitespace-nowrap">
                                {{ activity.price }}
                              </span>
                            </div>
                          </div>
                          <div class="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-600">
                            <span class="flex items-center gap-1.5">
                              <svg
                                class="w-4 h-4 text-amber-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span class="font-medium">{{ activity.time }}</span>
                            </span>
                            <span class="flex items-center gap-1.5">
                              <svg
                                class="w-4 h-4 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <span class="font-medium">Вік: {{ activity.age }}</span>
                            </span>
                            <span class="flex items-center gap-1.5">
                              <svg
                                class="w-4 h-4 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <span class="font-medium">Місць: {{ activity.spots }}</span>
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Terms Checkbox -->
        <div class="mb-6 sm:mb-8 p-3 sm:p-4 md:p-5 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg sm:rounded-xl">
          <label class="flex items-start cursor-pointer gap-2 sm:gap-3">
            <input
              v-model="form.termsAccepted"
              type="checkbox"
              required
              class="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-amber-600 focus:ring-amber-500 border-gray-300 rounded focus:ring-2 flex-shrink-0"
            >
            <span class="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Я розумію, що усі активності є благодійними і в разі відмови після оплати бронювання місця, гроші не повертаються.
              <span class="text-red-500 font-semibold">*</span>
            </span>
          </label>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center sm:justify-end">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              <span v-if="!isSubmitting">Надіслати форму</span>
              <span
                v-else
                class="flex items-center gap-2"
              >
                <svg
                  class="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Відправка...
              </span>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div
          v-if="showSuccess"
          class="mt-6 sm:mt-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-xl"
        >
          <div class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-3 sm:mb-4 shadow-lg">
            <svg
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-2">
            Форму успішно відправлено!
          </h3>
          <p class="text-green-700 text-sm sm:text-base md:text-lg">
            Дякуємо за реєстрацію. Наші волонтери зв'яжуться з вами для підтвердження та оплати.
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>
