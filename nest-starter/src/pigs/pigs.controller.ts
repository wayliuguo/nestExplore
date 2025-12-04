import { Controller, Get, Param } from '@nestjs/common';
import { PigsService } from './pigs.service';

@Controller('pigs')
export class PigsController {
  constructor(private readonly pigsService: PigsService) {}

  // 只保留findOne路由
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pigsService.findOne(+id);
  }
}