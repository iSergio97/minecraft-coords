import { db } from '@/firebase/config';
import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import type { Coordinates } from '../interfaces/coordinates.interface';

export const getCoords = (dbCollection: string): Coordinates[] => {
  const data = useCollection(collection(db, dbCollection));
  const coords: Coordinates[] = data.value.map((col) => {
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
  return coords;
};
