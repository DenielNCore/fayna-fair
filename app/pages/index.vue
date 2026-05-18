<script setup lang="ts">
import IconArrow from 'assets/arrow.svg';

const initiatives = [
  { title: '1 500 000+ грн', text: 'зібрано на останніх ярмарках' },
  { title: '100+', text: 'об’єднуються для організації кожної події' },
  { title: 'Сотні учасників', text: 'роблять внесок у нашу спільну безпеку' },
];

const ourValues = [
  { img: '/goal-1.png', title: 'Відповідальність', text: 'Ми усвідомлюємо важливість підтримки війська і беремо на себе відповідальність діяти.' },
  { img: '/goal-2.png', title: 'Прозорість', text: 'Довіра будується на цифрах. Кожна гривня з ярмарку має свій шлях: від донату до звіту про закупленю. Відкрито. Публічно. Чесно.' },
  { img: '/goal-3.png', title: 'Довіра', text: 'Файний ярмарок тримається на довірі між людьми, які організовують подію, беруть у ній участь і підтримують її.' },
  { img: '/goal-4.png', title: 'Спільнота', text: 'Файний ярмарок виріс із сусідської ініціативи і залишається простором, де люди підтримують одне одного і разом роблять важливу справу.' },
];
</script>

<template>
  <div>
    <!--  ГОЛОВНИЙ БЛОК  -->
    <div class="bg-green-100 flex items-center rounded-[32px] p-12">
      <div class=" w-1/2 flex flex-col gap-9">
        <div class="text-green-700 text-subtitle2 font-medium">
          Благодійний Файний ярмарок
        </div>
        <div class="text-h1 font-semibold ">
          Безперервна допомога війську
        </div>
        <div class="text-p2">
          Спільнота мешканців «Файна Таун» об’єдналися, щоб підтримувати українських захисників.
        </div>
        <div class="">
          <div class="w-full h-full  flex items-center gap-16 ">
            <NuxtImg
              class="rounded-lg min-w-[105px] min-h-[105px]"
              src="/donate-qr.png"
              width="105"
              height="105"
            />
            <div class="font-[caveat] text-p1 text-green-700 font-bold whitespace-nowrap relative">
              Відскануй, щоб задонатити
              <IconArrow class="absolute -left-[80px] -bottom-5 w-36 h-8" />
            </div>
          </div>
        </div>
      </div>
      <NuxtImg
        class="w-1/2"
        src="/main.png"
      />
    </div>

    <!--  ПРО ІНІЦІАТИВУ  -->
    <BlockWrapper>
      <div class="flex flex-col gap-8 max-md:justify-center">
        <div class="text-h2 font-semibold text-center">
          Про ініціативу
        </div>
        <div class="text-p1 max-md:text-justify text-center w-[760px]">
          Віримо, що сила громади — у спільній дії. Формат простий: сусіди діляться талантами, часом і творчістю, а гості ярмарку відвідують локації за донат.
        </div>
      </div>

      <div class="flex max-md:flex-col gap-8">
        <div
          v-for="initiative in initiatives"
          :key="initiative.title"
          class="bg-gray-50 rounded-3xl p-6 flex flex-col gap-8 w-1/3 max-md:w-full"
        >
          <div class="text-subtitle1 font-semibold">
            {{ initiative.title }}
          </div>
          <div class="text-p2">
            {{ initiative.text }}
          </div>
        </div>
      </div>

      <!--  ГАЛЕРЕЯ  -->
      <div>GALLERY</div>
    </BlockWrapper>

    <!--  НАШІ ЦІННОСТІ 1 -->

    <BlockWrapper>
      <template #title>
        Наші цінності
      </template>
      <div class="flex max-xl:flex-col gap-8">
        <div
          v-for="overValue in ourValues"
          :key="overValue.title"

          class="bg-gray-50 p-6 flex flex-col gap-8 w-1/4 max-xl:w-full rounded-3xl"
        >
          <NuxtImg
            class="h-16 w-fit"
            :src="overValue.img"
          />
          <div class="text-subtitle2 font-medium">
            {{ overValue.title }}
          </div>
          <div class="text-p2">
            {{ overValue.text }}
          </div>
        </div>
      </div>
    </BlockWrapper>

    <!--  НАШІ ЦІННОСТІ 2 -->

    <OurValues2 />
  </div>
</template>

<style scoped>

</style>
