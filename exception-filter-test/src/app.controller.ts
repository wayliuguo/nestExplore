import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HelloFilter } from './hello.filter';
import { AaaDto } from './aaa.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HelloFilter)
  getHello(): string {
    throw new BadGatewayException('bad gateway exception');
    return this.appService.getHello();
  }

  @Post('aaa')
  @UseFilters(HelloFilter)
  @UsePipes(ValidationPipe)
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
