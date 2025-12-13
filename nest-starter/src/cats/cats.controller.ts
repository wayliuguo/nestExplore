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
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { TransformResponseInterceptor } from 'src/common/interceptor/transform-response.interceptor';
import { CacheInterceptor } from 'src/common/interceptor/cache.interceptor';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout.interceptor';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseInterceptors(
  TransformResponseInterceptor,
  new CacheInterceptor(),
  new TimeoutInterceptor(5000),
  LoggingInterceptor,
)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @Header('Cache-Control', 'no-store')
  findAll(@Query('breed') breed?: string) {
    return this.catsService.findAll(breed);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
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
