<template>
  <div class="grid gap-4 grid-cols-4 p-2">
    <CoordinatesComponent v-for="(coord, index) of endCords" :coord="coord" :key="index" />
  </div>
</template>

<script setup lang="ts">
import { initial_end_coords } from '@/data/coordinates';
import type { Coordinates } from '@/interfaces/coordinates.interface';
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';

let endCords: Coordinates[] = initial_end_coords;
</script>

<style scoped>
* {
  color: white;
}

.bg-end {
  background-image: url('../assets/images/end.jpg');
  background-size: cover;
}
</style>
