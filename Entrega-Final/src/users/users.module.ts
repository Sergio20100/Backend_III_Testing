import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Pet, PetSchema } from 'src/pets/pet.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:User.name, schema: UserSchema},
    {name:Pet.name,schema:PetSchema}
  ])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
