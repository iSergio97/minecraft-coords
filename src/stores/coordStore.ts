import { defineStore } from 'pinia';
import type { Coordinates } from '../interfaces/coordinates.interface';
import { computed, ref, type Ref } from 'vue';
import type { DocumentData } from 'firebase/firestore';

export const coordStore = defineStore('coordStore', () => {
  const overworldCoords: Ref<Coordinates[]> = ref([]);
  const netherCoords: Ref<Coordinates[]> = ref([]);
  const endCoords: Ref<Coordinates[]> = ref([]);

  const setOverworldCoords = (newData: DocumentData[]) => {
    overworldCoords.value = newData.map((col) => {
      const c: Coordinates = {
        id: col.id,
        x: col.x,
        y: col.y,
        z: col.z,
        alias: col.alias,
        dimension: col.dimension,
        favorite: col.favorite
      };
      return c;
    });
  };
  const setNetherCoords = (newData: DocumentData[]) => {
    netherCoords.value = newData.map((col) => {
      const c: Coordinates = {
        id: col.id,
        x: col.x,
        y: col.y,
        z: col.z,
        alias: col.alias,
        dimension: col.dimension,
        favorite: col.favorite
      };
      return c;
    });
  };
  const setEndCoords = (newData: DocumentData[]) => {
    endCoords.value = newData.map((col) => {
      const c: Coordinates = {
        id: col.id,
        x: col.x,
        y: col.y,
        z: col.z,
        alias: col.alias,
        dimension: col.dimension,
        favorite: col.favorite
      };
      return c;
    });
  };

  return {
    overworldCoords: computed(() => overworldCoords.value),
    netherCoords: computed(() => netherCoords.value),
    endCoords: computed(() => endCoords.value),

    setOverworldCoords,
    setNetherCoords,
    setEndCoords
  };
});
