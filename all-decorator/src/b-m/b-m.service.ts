import { Injectable } from '@nestjs/common';
import { CreateBMDto } from './dto/create-b-m.dto';
import { UpdateBMDto } from './dto/update-b-m.dto';

@Injectable()
export class BMService {
  create(createBMDto: CreateBMDto) {
    return 'This action adds a new bM';
  }

  findAll() {
    return `This action returns all bM`;
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
