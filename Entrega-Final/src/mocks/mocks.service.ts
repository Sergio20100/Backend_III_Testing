import { Injectable,Logger } from '@nestjs/common';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';
import { Utils } from 'src/utils/utils';
@Injectable()
export class MocksService {
  
  private readonly logger = new Logger(MocksService.name);
  constructor(){};
 
  async generateData(createMockDto: CreateMockDto) {
    const numUsers = parseInt(createMockDto.users);
    const numPets = parseInt(createMockDto.pets);
    return 'This action adds a new mock';
  }

  async getUsers(numUsers:number) {
    try {
      this.logger.log(`Generando ${numUsers} usuarios`)
      const users = await Utils.generateUser(numUsers);
      return {status:'success',payload: users};
    } catch (error) {
      this.logger.error('Error al generar usuarios ',error.stack);
      throw error;
    }
    
  }

  async getPets(numPets: number) {
    try {
      this.logger.log(`Generando ${numPets} mascotas`);
      const pets = await Utils.generatePets(numPets);
      return {status:'success', payload: pets};
    } catch (error) {
      this.logger.error('Error al generar mascotas ', error.stack)
      throw error;
    }
  }

  update(id: number, updateMockDto: UpdateMockDto) {
    return `This action updates a #${id} mock`;
  }

  remove(id: number) {
    return `This action removes a #${id} mock`;
  }
}
