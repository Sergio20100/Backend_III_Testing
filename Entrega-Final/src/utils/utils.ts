import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export class Utils {
  static async createHash(password: string): Promise<string> {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
  }

  static async passwordValidation(user: { password: string }, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  static getDirname(metaUrl: string): string {
    const __filename = fileURLToPath(metaUrl);
    return dirname(__filename);
  }

  static async generateUser(numOfUsers: number): Promise<any[]> {
    const users = [];
    const roles = ['admin', 'user'];

    for (let i = 0; i < numOfUsers; i++) {
      const hashedPassword = await Utils.createHash('coder123');
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        pets: [],
        _id: faker.database.mongodbObjectId(),
        role: roles[Math.floor(Math.random() * roles.length)],
      });
    }

    return users;
  }

  static async generatePets(numOfPets: number): Promise<any[]> {
    const pets = [];

    for (let i = 0; i < numOfPets; i++) {
      pets.push({
        name: faker.person.firstName(),
        specie: faker.animal.dog(),
        birthDate: faker.date.birthdate(),
        adopted: false,
        _id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
      });
    }

    return pets;
  }
}
