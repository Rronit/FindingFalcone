export interface falconePlanet {
  name: string;
  distance: number;
}

export interface falconeVehicle {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
}

export interface selectedValues {
  planet: string;
  vehicle: string;
  timeTaken: number;
  index: number;
}
