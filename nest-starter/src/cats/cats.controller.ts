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
  BadRequestException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { TransformResponseInterceptor } from 'src/common/interceptor/transform-response.interceptor';
import { CacheInterceptor } from 'src/common/interceptor/cache.interceptor';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout.interceptor';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { HttpExceptionFilter } from 'src/common/exceptionFilter/http-exception.filter';
import { AllExceptionsFilter } from 'src/common/exceptionFilter/all-exception.filter';

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
  // @UsePipes(new ValidationPipe()) // 管道：方法级别
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('/testThrowError')
  // @UseFilters(HttpExceptionFilter)
  @UseFilters(AllExceptionsFilter)
  testThrowError() {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );

    throw new BadRequestException('Invalid input', {
      cause: new Error(),
      description: 'Validation failed',
    });

    // throw new NotFoundException('Cat not found');
  }

  @Get()
  @Header('Cache-Control', 'no-store')
  findAll(@Query('breed') breed?: string) {
    return this.catsService.findAll(breed);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe 管道：参数级别
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
