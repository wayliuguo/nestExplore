import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { RequireLogin, RequirePermission } from 'src/custom-decorator';

@Controller('aaa')
@RequireLogin()
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Get()
  @RequirePermission('查询 aaa')
  findAll() {
    return this.aaaService.findAll();
  }
}
