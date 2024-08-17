import { coordStore } from '@/stores/coordStore';
import { storeToRefs } from 'pinia';
import { watch, type Ref } from 'vue';

import { db } from '@/firebase/config';
import { collection, type DocumentData } from 'firebase/firestore';
import { useCollection } from 'vuefire';

const getCoords = (dbCollection: string) => {
  const data = useCollection(collection(db, dbCollection));
  return data;
};

const useCoords = () => {
  const store = coordStore();
  const { overworldCoords, netherCoords, endCoords } = storeToRefs(store);

  const dataOW: Ref<DocumentData[]> = getCoords('Overworld');
  const dataNether: Ref<DocumentData[]> = getCoords('Nether');
  const dataEnd: Ref<DocumentData[]> = getCoords('End');

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
    dataOW.value = getCoords('Overworld').value;
  };

  const refreshNether = (): void => {
    dataNether.value = getCoords('Nether').value;
  };

  const refreshEnd = (): void => {
    dataEnd.value = getCoords('End').value;
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
