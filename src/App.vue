<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <NavComponent />
  <div class="h-full">
    <RouterView />
  </div>
</template>

<style></style>
