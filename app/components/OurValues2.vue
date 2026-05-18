<script setup lang="ts">
const ourValues2 = [
  { num: 1, title: 'Визначаємо запит', text: 'Дізнаємось про актуальні потреби на передовій та в тилу' },
  { num: 2, title: 'Планування', text: 'Готуємо концепцію та детальне наповнення заходу.' },
  { num: 3, title: 'Ярмарок', text: 'Проводимо файну подію та збираємо донати.' },
  { num: 5, title: 'Звіт', text: 'Доставляємо необхідне на фронт і звітуємо.' },
  { num: 4, title: 'Закупівля', text: 'Оперативно закуповуємо все необхідне за запитом.' },

];
</script>

<template>
  <BlockWrapper>
    <template #title>
      Наші цінності
    </template>
    <div class="flex gap-x-8 gap-y-10 flex-wrap justify-center">
      <BlockOurValue
        num="1"
        title="111"
        text="111"
      />

      <div />
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
