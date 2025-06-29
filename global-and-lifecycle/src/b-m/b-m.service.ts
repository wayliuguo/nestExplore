import { Injectable } from '@nestjs/common';
import { CreateBMDto } from './dto/create-b-m.dto';
import { UpdateBMDto } from './dto/update-b-m.dto';
import { AMService } from 'src/a-m/a-m.service';

@Injectable()
export class BMService {
  constructor(private AMService: AMService) {}

  create(createBMDto: CreateBMDto) {
    return 'This action adds a new bM';
  }

  findAll() {
    return `This action returns all bM` + this.AMService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bM`;
  }

  update(id: number, updateBMDto: UpdateBMDto) {
    return `This action updates a #${id} bM`;
  }

  remove(id: number) {
    return `This action removes a #${id} bM`;
  }
}
