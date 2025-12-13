import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  Query,
  UseInterceptors,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { TransformResponseInterceptor } from 'src/common/interceptor/transform-response.interceptor';
import { CacheInterceptor } from 'src/common/interceptor/cache.interceptor';

@Controller('cats')
@UseInterceptors(TransformResponseInterceptor, new CacheInterceptor())
// @UsePipes(new ValidationPipe()) // 管道：控制器级别
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @HttpCode(204)
  // @UsePipes(new ValidationPipe()) // 管道：方法级别
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @Header('Cache-Control', 'no-store')
  findAll(@Query('breed') breed?: string) {
    return this.catsService.findAll(breed);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // ParseIntPipe 管道：参数级别
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
