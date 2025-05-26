import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MocksService } from './mocks.service';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';

@Controller('mocks')
export class MocksController {
  constructor(private readonly mocksService: MocksService) {}

  @Post('generateData/:users/:pets')
  create(@Param('users') users:string, @Param('pets') pets:string) {
    return this.mocksService.generateData({users,pets});
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
