<template>
  <div
    class="grid gap-4 grid-cols-2 xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 p-2"
  >
    <CoordinatesComponent
      v-for="(coord, index) of endCoords"
      :coord="coord"
      :key="index"
      @refreshData="refreshEnd"
    />
  </div>
</template>

<script setup lang="ts">
import CoordinatesComponent from '@/components/CoordinatesComponent.vue';
import useCoords from '@/composables/useCoords';

const { endCoords, refreshEnd } = useCoords();
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
