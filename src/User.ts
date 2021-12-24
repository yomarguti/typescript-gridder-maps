import faker from 'faker';
import { Drawable } from './Drawable';

export class User implements Drawable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h3>User name: ${this.name}</h3>
    </div>
    `;
  }
}
