import { Controller, Get, Post, Body, Patch, Param, Delete, Res,Logger } from '@nestjs/common';
import { MocksService } from './mocks.service';
import { Response } from 'express';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';

@Controller()
export class MocksController {
  private readonly logger = new Logger(MocksController.name);
  
  constructor(private readonly mocksService: MocksService) {}

  // @Post('generateData/:users/:pets')
  // async create(@Param('users') users:string, @Param('pets') pets:string) {
  //   return this.mocksService.generateData({users,pets});
  // }

  @Get('/mockingusers/:numUsers')
  async getUsers(@Param('numUsers') numUsers:string, @Res() res:Response) {
    try {
      const users = await this.mocksService.getUsers(Number(numUsers));
      res.status(200).send(users);
    } catch (error) {
      this.logger.error('Error en el controlador mock',error.stack)
      res.status(500).send({
        status:'Error',message:'No se pudieron generar los usuarios'
      })
    }
  }

  @Get('/mockingpets/:numPets')
  async getPets(@Param('numPets') numPets:string, @Res() res:Response) {
    try {
      const pets = await this.mocksService.getPets(Number(numPets))
      res.status(200).send(pets);
    } catch (error) {
      this.logger.error('Error en controlador al generar pets',error.stack);
      res.status(500).send({
        status:'Error',message:'No se pudieron generar las mascotas'
      })
    }
  }
}
