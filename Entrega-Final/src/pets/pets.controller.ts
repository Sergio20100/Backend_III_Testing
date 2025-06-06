import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva mascota' })
  @ApiResponse({ status: 200, description: 'Mascota creada correctamente.' })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las mascotas' })
  @ApiResponse({ status: 200, description: 'Lista de mascotas.' })
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar mascota por ID' })
  @ApiResponse({ status: 200, description: 'mascota encontrada.' })
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar mascota por ID' })
  @ApiResponse({ status: 200, description: 'datos de la mascota actualizados.' })
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar mascota por ID' })
  @ApiResponse({ status: 200, description: 'mascota eliminada' })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
