export interface Drawable {
  location: LocationCoords;
  markerContent(): string;
}

interface LocationCoords {
  lat: number;
  lng: number;
}
