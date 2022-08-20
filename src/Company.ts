import { faker } from '@faker-js/faker/locale/pt_BR';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = '#0Fea1F';

  constructor() {
    this.name = `${faker.company.name()} ${faker.company.suffixes()}`;
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
          <div>
            <h1>Company Name: ${this.name}</h1>
            <h2>CatchPhrase: ${this.catchPhrase}</h2>
          </div>
        `;
  }
}
