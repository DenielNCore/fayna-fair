<script setup lang="ts">

</script>

<template>
  <BlockWrapper>
    <template #title>
      {{ $t('donate.title') }}
    </template>

    <div class="rounded-2xl bg-gray-50 p-12 flex flex-col gap-12 w-full">
      <!--   BANK   -->
      <div class="flex flex-col gap-6 ">
        <div class="text-subtitle2 font-medium">
          {{ $t('donate.transfer') }}
        </div>
        <div class="flex flex-col gap-2">
          <!--    MONO      -->
          <div class="flex flex-col gap-1">
            <div class="text-p2">
              {{ $t('donate.mono.title') }}
            </div>
            <div class="flex justify-between">
              <div class="text-p1">
                {{ $t('donate.mono.account') }}
              </div>
              <CopyBtn :content=" $t('donate.mono.account')" />
            </div>
          </div>
          <!--    PRIVAT      -->
          <div class="flex flex-col gap-1">
            <div class="text-p2">
              {{ $t('donate.privat.title') }}
            </div>
            <div class="flex justify-between">
              <div class="text-p1">
                {{ $t('donate.privat.account') }}
              </div>
              <CopyBtn :content=" $t('donate.privat.account')" />
            </div>
          </div>
        </div>
      </div>

      <!--   PAYPAL   -->
      <div class="flex flex-col gap-6 ">
        <div class="text-subtitle2 font-medium">
          {{ $t('donate.paypal.title') }}
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1">
            <div class="text-p2">
              {{ $t('donate.paypal.email', { at: '@' }) }}
            </div>
            <div class="flex justify-between">
              <div class="text-p1">
                {{ $t('donate.paypal.account') }}
              </div>
              <CopyBtn :content=" $t('donate.paypal.account')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlockWrapper>
</template>

<style scoped>

</style>
