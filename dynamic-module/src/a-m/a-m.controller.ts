import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AMService } from './a-m.service';
import { CreateAMDto } from './dto/create-a-m.dto';
import { UpdateAMDto } from './dto/update-a-m.dto';
import { Inject } from '@nestjs/common';

@Controller('a-m')
export class AMController {
  constructor(
    private readonly aMService: AMService,
    @Inject('CONFIG_OPTIONS')
    private readonly configOptions: Record<string, any>,
  ) {}

  @Post()
  create(@Body() createAMDto: CreateAMDto) {
    return this.aMService.create(createAMDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.aMService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aMService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAMDto: UpdateAMDto) {
    return this.aMService.update(+id, updateAMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aMService.remove(+id);
  }
}
