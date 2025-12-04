import { Controller, Get, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  // 只保留findOne路由
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }
}
