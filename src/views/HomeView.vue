<template>
  <div class="w-full h-full">
    <h3 class="text-2xl flex flex-initial pl-2 dark_green shadow">Overworld</h3>
    <OverworldComponent />
  </div>
  <div class="w-full h-full">
    <h3 class="text-2xl flex flex-initial pl-2 dark_red shadow">Nether</h3>
    <NetherCompnent />
  </div>
  <div class="w-full h-full">
    <h3 class="text-2xl flex flex-initial pl-2 yellow shadow">End</h3>
    <EndComponent />
  </div>
</template>

<script setup lang="ts">
/* Imports */
import OverworldComponent from '@/components/OverworldComponent.vue';
import NetherCompnent from '@/components/NetherComponent.vue';
import EndComponent from '@/components/EndComponent.vue';
</script>
