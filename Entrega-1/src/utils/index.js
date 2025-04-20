import bcrypt from 'bcrypt';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import { faker } from '@faker-js/faker';

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;



export const generateUser = async (numOfUsers) => {
    
    let users = []
    for (let i = 0; i < numOfUsers; i++) {
        // let numOfPets = parseInt(faker.random.numeric(1, { bannedDigits: ['0'] }));
        const roles = ['admin', 'user'];
        const hashedPassword = await createHash("coder123");
        users.push({
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            // pets: generatePets(numOfPets),
            pets: [],
            _id: faker.database.mongodbObjectId(),
            role: roles[Math.floor(Math.random() * roles.length)]
        });    
    }
    return users;
};

export const generatePets = async (numOfPets) => {
    
    let pets = [];
    for (let i = 0; i < numOfPets; i++) {
        pets.push(
            {
                name: faker.name.firstName(),
                specie:faker.animal.dog(),
                birthDate: faker.date.birthdate(),
                adopted:false,
                _id: faker.database.mongodbObjectId(),
                image: faker.image.image()
            }
        );
    }

    return pets
};