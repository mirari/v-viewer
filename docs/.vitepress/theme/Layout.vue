<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'

const HomeViewer = defineAsyncComponent(() => import('./HomeViewer.vue'))
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-after>
      <ClientOnly><HomeViewer /></ClientOnly>
    </template>
  </DefaultTheme.Layout>
</template>
