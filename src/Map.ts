export interface Mappable {
  name: string;
  location: { lat: number; lng: number };
  markerContent(): string;
  color: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: { lat: 0, lng: 0 },
    });
  }
  pinSymbol(color) {
    return {
      path:
        'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#000',
      strokeWeight: 2,
      scale: 1,
    };
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      title: mappable.name,
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      icon: this.pinSymbol(mappable.color), //{
      //   url: `http://maps.google.com/mapfiles/ms/icons/${mappable.color}-dot.png`,
      // },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
