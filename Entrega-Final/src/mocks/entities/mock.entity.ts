import { PartialType } from "@nestjs/mapped-types";
import { PetEntity } from "src/pets/entities/pet.entity";
import { UserEntity } from "src/users/entities/user.entity";

export class UserMockEntity extends PartialType(UserEntity) {
    _id:string
}
export class PetMockEntity extends PartialType(PetEntity){
    _id:string
}