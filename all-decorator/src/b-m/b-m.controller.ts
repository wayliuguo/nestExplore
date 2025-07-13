import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HostParam,
} from '@nestjs/common';
import { BMService } from './b-m.service';
import { CreateBMDto } from './dto/create-b-m.dto';
import { UpdateBMDto } from './dto/update-b-m.dto';

@Controller({
  host: ':host.0.0.1',
  path: 'b-m',
})
export class BMController {
  constructor(private readonly bMService: BMService) {}

  @Post()
  create(@Body() createBMDto: CreateBMDto) {
    return this.bMService.create(createBMDto);
  }

  @Get()
  findAll(@HostParam('host') host: string) {
    console.log('Host:', host);
    return this.bMService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bMService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBMDto: UpdateBMDto) {
    return this.bMService.update(+id, updateBMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bMService.remove(+id);
  }
}
