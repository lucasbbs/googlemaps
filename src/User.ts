import { faker } from '@faker-js/faker/locale/pt_BR';

import { Mappable } from './Map';
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h1>User Name: ${this.name}</h1>
    </div>
  `;
  }
}
