import { db } from '@/firebase/config';
import type { Coordinates } from '@/interfaces/coordinates.interface';
import { doc, setDoc } from 'firebase/firestore';

export const saveCoords = async (c: Coordinates, id: string | undefined) => {
  if (!id) {
    id = window.crypto.randomUUID();
  }
  await setDoc(doc(db, c.dimension, id), {
    x: c.x,
    y: c.y,
    z: c.z,
    alias: c.alias,
    dimension: c.dimension,
    favorite: c.favorite
  });
};
