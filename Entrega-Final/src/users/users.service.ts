import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ){}

  create(createUserDto: CreateUserDto) {
    this.logger.log(`Se solicita insertar usuario: ${createUserDto.toString()}`)
    try {
    const newUser = this.userModel.create(createUserDto);
    return {status:'Success',payload: newUser}  
    } catch (error) {
      this.logger.error('Error al insertar usuario en la DB',error.stack)
      throw error;
    }
    
  }

  findAll() {
    this.logger.log('Se solicita listar todos los usuarios')
    try {
      return this.userModel.find().populate('pets').exec();
    } catch (error) {
      this.logger.error('Error al listar los usuarios de la DB',error.stack);
      throw error
    }
  }

  findOne(id:string) {
    this.logger.log(`Se solicita busqueda del usuario con id ${id}`);
    try {
      return this.userModel.findOne({_id:id});
    } catch (error) {
      this.logger.error('Error al buscar en la DB',error.stack)
      throw error;
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.log(`Actualizacion del usuario con id ${id}`);
    try {
      return this.userModel.findByIdAndUpdate(id,{$set:updateUserDto})
    } catch (error) {
      this.logger.error('Error al actualizar usuario en la DB',error.stack);
      throw error;
    }
  }

  remove(id: string) {
    this.logger.log(`se solicita borrar el usuario con id ${id}`);
    try {
      return this.userModel.findByIdAndDelete({_id:id})
    } catch (error) {
      this.logger.error('Error al eliminar usuario en la DB',error.stack);
      throw error;
    }
  }
}
