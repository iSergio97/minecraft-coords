<template>
  <div class="w-full h-full">
    <h3 class="text-5xl pl-2 dark_green shadow pb-1">Overworld</h3>
    <OverworldComponent />
  </div>
  <div class="w-full h-full pt-4">
    <h3 class="text-5xl pl-2 dark_red shadow pb-1">Nether</h3>
    <NetherCompnent />
  </div>
  <div class="w-full h-full pt-4">
    <h3 class="text-5xl pl-2 yellow shadow pb-1">End</h3>
    <EndComponent />
  </div>
</template>

<script setup lang="ts">
/* Imports */
import OverworldComponent from '@/components/OverworldComponent.vue';
import NetherCompnent from '@/components/NetherComponent.vue';
import EndComponent from '@/components/EndComponent.vue';
</script>
