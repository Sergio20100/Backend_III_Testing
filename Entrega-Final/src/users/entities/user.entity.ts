import {Types } from 'mongoose';


export class UserEntity {
    first_name: string;
    last_name: string;
    email: string;    
    password: string;    
    role: string;
    pets:{_id:Types.ObjectId }[];    
}
