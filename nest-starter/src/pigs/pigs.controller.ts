import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guard/role.guard';
import { Roles } from 'src/common/guard/roles.decorator';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { UserProperty } from 'src/common/decorator/user-property.decorator';
import { Auth } from 'src/common/decorator/auth.decorator';

@Controller('pigs')
export class PigsController {
  constructor(private readonly pigsService: PigsService) {}

  // 只保留findOne路由
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('user')
  // 使用Auth装饰器,聚合Roles、JwtAuthGuard和RolesGuard
  @Auth('user')
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @UserProperty('role') role: string,
  ) {
    console.log('CurrentUser', user);
    console.log('userRole', role);
    return this.pigsService.findOne(+id);
  }
}
