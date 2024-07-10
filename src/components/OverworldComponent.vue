<template>
  <div
    class="grid gap-4 grid-cols-2 xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 p-2"
    v-if="overworldCoords.length !== 0"
  >
    <CoordinatesComponent
      v-for="(coord, index) of overworldCoords"
      :coord="coord"
      :key="index"
      @refreshData="refreshOW"
    />
  </div>
  <div v-if="overworldCoords.length === 0">Cargando...</div>
</template>

<script setup lang="ts">
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';
import useCoords from '@/composables/useCoords';

const { overworldCoords, refreshOW } = useCoords();
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
