export interface Coordinates {
  x: number;
  y: number | undefined; // Nether coords could be only x and z to nether portals tps
  z: number;
  alias: string | undefined;
  dimension: string;
  favorite: boolean;
}
