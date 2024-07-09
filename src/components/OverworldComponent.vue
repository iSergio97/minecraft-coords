<template>
  <div class="grid gap-4 grid-cols-4 p-2">
    <CoordinatesComponent v-for="(coord, index) of overworldCoords" :coord="coord" :key="index" />
  </div>
</template>

<script setup lang="ts">
import { initial_overworlds_coords } from '@/data/coordinates';
import type { Coordinates } from '@/interfaces/coordinates.interface';
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';

let overworldCoords: Coordinates[] = initial_overworlds_coords;
</script>

<style scoped>
* {
  color: white;
}

.bg-overworld {
  background-image: url('../assets/images/overworld.jpg');
  background-size: cover;
}
</style>
