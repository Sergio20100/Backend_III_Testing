import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './pet.schema';
import { User, UserSchema } from 'src/users/schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:User.name, schema: UserSchema},
    {name:Pet.name,schema:PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
