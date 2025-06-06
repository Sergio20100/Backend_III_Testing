import { ApiProperty } from "@nestjs/swagger";
import {Types } from 'mongoose';
export class CreatePetDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    specie: string;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty({ default: false })
    adopted?: boolean;

    @ApiProperty()
    owner?:Types.ObjectId;

    @ApiProperty()
    image?: string;
}
