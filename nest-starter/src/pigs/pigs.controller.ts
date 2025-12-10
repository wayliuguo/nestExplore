import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/role.guard';
import { Roles } from 'src/common/guard/roles.decorator';

@Controller('pigs')
export class PigsController {
  constructor(private readonly pigsService: PigsService) {}

  // 只保留findOne路由
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pigsService.findOne(+id);
  }
}
