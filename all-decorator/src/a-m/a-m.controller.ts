import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AMService } from './a-m.service';
import { CreateAMDto } from './dto/create-a-m.dto';
import { UpdateAMDto } from './dto/update-a-m.dto';

@Controller('a-m')
export class AMController {
  constructor(private readonly aMService: AMService) {}

  @Post()
  create(@Body() createAMDto: CreateAMDto) {
    return this.aMService.create(createAMDto);
  }

  @Post('test-post')
  testPost(@Body() createAMDto: CreateAMDto) {
    return 'test-post';
  }

  @Get()
  findAll() {
    return this.aMService.findAll();
  }

  @Get('test-get/:id')
  testGet(@Param('id') id: string, @Query('name') name: string) {
    return 'test-get' + id + name;
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
