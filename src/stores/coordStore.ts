import { defineStore } from 'pinia';
import type { Coordinates } from '../interfaces/coordinates.interface';
import { ref, type Ref } from 'vue';

export const coordStore = defineStore('coordStore', () => {
  const overworldCoords: Ref<Coordinates[]> = ref([]);
  const netherCoords: Ref<Coordinates[]> = ref([]);
  const endCoords: Ref<Coordinates[]> = ref([]);

  const setOverworldCoords = (newData: any[]) => {
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
  const setNetherCoords = (newData: any[]) => {
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
  const setEndCoords = (newData: any[]) => {
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
    overworldCoords,
    netherCoords,
    endCoords,

    setOverworldCoords,
    setNetherCoords,
    setEndCoords
  };
});
