<script setup lang="ts">
import TeamMember from '~/components/TeamMember.vue';

const list = [
  { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
  { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
  { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
  { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
  { img: '/member-photo-1.png', name: 'Катерина', position: 'Волонтер', href: 'https://instagram.com' },
];
</script>

<template>
  <BlockWrapper class="">
    <template #title>
      {{ $t('team.title') }}
    </template>

    <div class="flex gap-4 flex-wrap">
      <TeamMember
        v-for="member in list"
        :key="member.img"
        :img="member.img"
        :name="member.name"
        :href="member.href"
        :position="member.position"
      />
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
