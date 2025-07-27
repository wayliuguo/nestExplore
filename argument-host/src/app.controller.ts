import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AMFilter } from './a-m.filter';
import { AMException } from './a-m-exception';
import { AMGuard } from './a-m.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AMFilter)
  @UseGuards(AMGuard)
  @Roles(Role.Admin)
  getHello(): string {
    throw new AMException('Hello', 'World');
  }
}
