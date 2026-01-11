import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { LoginGuard } from 'src/login.guard';
import { PermissionGuard } from 'src/permission.guard';

@Controller('aaa')
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Get()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'query_aaa')
  findAll() {
    return this.aaaService.findAll();
  }
}
