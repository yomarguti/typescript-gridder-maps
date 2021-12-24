import faker from 'faker';
import { Drawable } from './Drawable';

export class Company implements Drawable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.catchPhrase = faker.company.catchPhrase();
    this.companyName = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3>Company name: ${this.companyName}</h3>
    <p>Company phrase: ${this.catchPhrase}</p>
    </div>
    `;
  }
}
