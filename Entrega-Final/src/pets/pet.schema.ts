import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, HydratedDocument, ObjectId, Types } from "mongoose";
import { User } from "src/users/schema/user.schema";




export type PetDocument = HydratedDocument<Pet>

@Schema({collection:'Pets'})
export class Pet{
    @Prop({required:true})
    name:String;
    
    @Prop({required:true})
    specie:String;
    
    @Prop({type:Date})
    birthDate:Date;
    
    @Prop({default:false})
    adopted:Boolean;
    
    @Prop({type:Types.ObjectId, ref: 'User'})
    owner:Types.ObjectId;
    
    @Prop({type:String})
    image:String;
}

export const PetSchema = SchemaFactory.createForClass(Pet);