<template>
  <div
    class="grid gap-4 grid-cols-2 xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 p-2"
  >
    <CoordinatesComponent
      v-for="(coord, index) of netherCoords"
      :coord="coord"
      :key="index"
      @refreshData="refreshNether"
    />
  </div>
</template>

<script setup lang="ts">
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';
import useCoords from '@/composables/useCoords';

const { netherCoords, refreshNether } = useCoords();
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
