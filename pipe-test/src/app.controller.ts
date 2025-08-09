import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('age', ParseIntPipe) age: string): string {
    return age + 1;
  }

  @Get('parseIntPipeException')
  parseIntPipeException(
    @Query(
      'age',
      new ParseIntPipe({
        exceptionFactory: (error) => {
          console.log(error);
          throw new HttpException(
            `Invalid age: ${error}`,
            HttpStatus.NOT_IMPLEMENTED,
          );
        },
      }),
    )
    age: string,
  ): string {
    return age + 1;
  }

  @Get('nnn/:bbb')
  nnn(
    @Query('aaa', AaaPipe) aaa: string,
    @Param('bbb', AaaPipe) bbb: string,
  ): string {
    return aaa + bbb;
  }
}
