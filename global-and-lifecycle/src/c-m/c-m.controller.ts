import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CMService } from './c-m.service';
import { CreateCMDto } from './dto/create-c-m.dto';
import { UpdateCMDto } from './dto/update-c-m.dto';

@Controller('c-m')
export class CMController implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(private readonly cMService: CMService) {}

  onModuleInit() {
    console.log('CMController: onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('CMController: onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CMController: onModuleDestroy');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('CMController: beforeApplicationShutdown', signal);
  }

  onApplicationShutdown() {
    console.log('CMController: onApplicationShutdown');
  }

  @Post()
  create(@Body() createCMDto: CreateCMDto) {
    return this.cMService.create(createCMDto);
  }

  @Get()
  findAll() {
    return this.cMService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cMService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCMDto: UpdateCMDto) {
    return this.cMService.update(+id, updateCMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cMService.remove(+id);
  }
}
