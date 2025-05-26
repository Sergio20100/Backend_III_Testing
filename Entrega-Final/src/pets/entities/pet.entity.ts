import { Types } from "mongoose";

export class PetEntity {
        name:String;        
        specie:String;
        birthDate:Date;
        adopted:Boolean;
        owner:Types.ObjectId;
        image:String;
}
