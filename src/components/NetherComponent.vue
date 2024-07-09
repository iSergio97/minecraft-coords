<template>
  <div class="grid gap-4 grid-cols-4 p-2">
    <CoordinatesComponent v-for="(coord, index) of netherCords" :coord="coord" :key="index" />
  </div>
</template>

<script setup lang="ts">
import { initial_nether_coords } from '@/data/coordinates';
import type { Coordinates } from '@/interfaces/coordinates.interface';
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';

let netherCords: Coordinates[] = initial_nether_coords;
</script>

<style scoped>
* {
  color: white;
}

.bg-nether {
  background-image: url('../assets/images/nether.png');
  background-size: cover;
}
</style>
