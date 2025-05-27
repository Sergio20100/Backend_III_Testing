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
      return this.userModel.find().populate('pets._id').exec();
    } catch (error) {
      this.logger.error('Error al listar los usuarios de la DB',error.stack);
      throw error
    }
  }

  findOne(params:any) {
    try {
      return this.userModel.findOne(params);
    } catch (error) {
      this.logger.error('Error al buscar en la DB',error.stack)
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log(`Actualizacion del usuario con id ${id}`);
    try {
      return this.userModel.findByIdAndUpdate(id,{$set:updateUserDto})
    } catch (error) {
      this.logger.error('Error al actualizar en la DB',error.stack);
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
