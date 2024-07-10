import { coordStore } from '@/stores/coordStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

import { db } from '@/firebase/config';
import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';

const getCoords = (dbCollection: string) => {
  const data = useCollection(collection(db, dbCollection));
  return data;
};

const useCoords = () => {
  const store = coordStore();
  const { overworldCoords, netherCoords, endCoords } = storeToRefs(store);

  let dataOW = getCoords('Overworld');
  let dataNether = getCoords('Nether');
  let dataEnd = getCoords('End');

  watch(
    dataOW,
    (newData) => {
      if (newData) store.setOverworldCoords(newData);
    },
    { immediate: true }
  );

  watch(
    dataNether,
    (newData) => {
      if (newData) store.setNetherCoords(newData);
    },
    { immediate: true }
  );

  watch(
    dataEnd,
    (newData) => {
      if (newData) store.setEndCoords(newData);
    },
    { immediate: true }
  );

  const refreshOW = (): void => {
    dataOW = getCoords('Overworld');
  };

  const refreshNether = (): void => {
    dataNether = getCoords('Nether');
  };

  const refreshEnd = (): void => {
    dataEnd = getCoords('End');
  };

  return {
    overworldCoords,
    netherCoords,
    endCoords,
    refreshOW,
    refreshNether,
    refreshEnd
  };
};

export default useCoords;
