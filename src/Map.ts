import { Drawable } from './Drawable';

export class Map {
  private googleMap: google.maps.Map;
  constructor(div: HTMLElement) {
    this.googleMap = new google.maps.Map(div, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(point: Drawable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: point.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: point.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
