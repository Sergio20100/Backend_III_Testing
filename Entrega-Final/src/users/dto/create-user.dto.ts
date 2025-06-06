import { ApiProperty } from '@nestjs/swagger';

import {Types } from 'mongoose';
export class CreateUserDto {
        @ApiProperty()
        first_name: string;

        @ApiProperty()
        last_name: string;

        @ApiProperty()
        email: string;    
        
        @ApiProperty()
        password: string;

        @ApiProperty({default:'user'})
        role?: string;
        
        @ApiProperty()
        pets?:{_id:Types.ObjectId }[];
}
