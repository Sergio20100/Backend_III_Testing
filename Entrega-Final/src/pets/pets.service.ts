import { Injectable, Logger } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetDocument } from './pet.schema';
import { Model } from 'mongoose';

@Injectable()
export class PetsService {
  private readonly logger = new Logger(PetsService.name);

  constructor(
    @InjectModel(Pet.name) private petModel: Model<PetDocument>
  ){}

  create(createPetDto: CreatePetDto) {
        this.logger.log(`Se solicita insertar usuario: ${createPetDto.toString()}`)
    try {
    const newPet = this.petModel.create(createPetDto);
    return {status:'Success',payload: newPet}  
    } catch (error) {
      this.logger.error('Error al insertar mascota en la DB',error.stack)
      throw error;
    }
  }

  findAll() {
    this.logger.log('Se solicita listar todas las mascotas')
    try {
      return this.petModel.find().populate('owner').exec();
    } catch (error) {
      this.logger.error('Error al listar las mascotas de la DB',error.stack);
      throw error
    }
  }

  findOne(id:string) {
        try {
      return this.petModel.findOne({_id:id});
    } catch (error) {
      this.logger.error('Error al buscar en la DB',error.stack)
      throw error;
    }
  }

  update(id: string, updatePetDto: UpdatePetDto) {
        this.logger.log(`Actualizacion del usuario con id ${id}`);
    try {
      return this.petModel.findByIdAndUpdate(id,{$set:updatePetDto})
    } catch (error) {
      this.logger.error('Error al actualizar usuario en la DB',error.stack);
      throw error;
    }
  }

  remove(id: string) {
        this.logger.log(`se solicita borrar la mascota con id ${id}`);
    try {
      return this.petModel.findByIdAndDelete({_id:id})
    } catch (error) {
      this.logger.error('Error al eliminar mascota en la DB',error.stack);
      throw error;
    }
  }
}
