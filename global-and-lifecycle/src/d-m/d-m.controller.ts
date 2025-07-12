import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { DMService } from './d-m.service';
import { CreateDMDto } from './dto/create-d-m.dto';
import { UpdateDMDto } from './dto/update-d-m.dto';

@Controller('d-m')
export class DMController implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(private readonly dMService: DMService) {}

  onModuleInit() {
    console.log('DMController: onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('DMController: onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('DMController: onModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    console.log('DMController: beforeApplicationShutdown', signal);
  }
  onApplicationShutdown() {
    console.log('DMController: onApplicationShutdown');
  }

  @Post()
  create(@Body() createDMDto: CreateDMDto) {
    return this.dMService.create(createDMDto);
  }

  @Get()
  findAll() {
    return this.dMService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dMService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDMDto: UpdateDMDto) {
    return this.dMService.update(+id, updateDMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dMService.remove(+id);
  }
}
