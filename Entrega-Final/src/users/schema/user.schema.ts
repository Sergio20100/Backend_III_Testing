import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument,Types } from 'mongoose';
import { Pet } from 'src/pets/pet.schema';


export type UserDocument = HydratedDocument<User>

@Schema({collection:'Users'})
export class User {

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, unique: true })
    email: string;
    
    @Prop({ required: true })
    password: string;
    
    @Prop({default:'user'})
    role: string;

    @Prop({
        type: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Pet'  }],
        default:[]})
    pets:Types.ObjectId[];
}


export const UserSchema = SchemaFactory.createForClass(User);

