import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MocksService } from './mocks.service';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';

@Controller('mocks')
export class MocksController {
  constructor(private readonly mocksService: MocksService) {}

  @Post()
  create(@Body() createMockDto: CreateMockDto) {
    return this.mocksService.create(createMockDto);
  }

  @Get()
  findAll() {
    return this.mocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMockDto: UpdateMockDto) {
    return this.mocksService.update(+id, updateMockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mocksService.remove(+id);
  }
}
