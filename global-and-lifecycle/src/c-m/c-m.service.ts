import { Injectable } from '@nestjs/common';
import { CreateCMDto } from './dto/create-c-m.dto';
import { UpdateCMDto } from './dto/update-c-m.dto';

@Injectable()
export class CMService {
  create(createCMDto: CreateCMDto) {
    return 'This action adds a new cM';
  }

  findAll() {
    return `This action returns all cM`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cM`;
  }

  update(id: number, updateCMDto: UpdateCMDto) {
    return `This action updates a #${id} cM`;
  }

  remove(id: number) {
    return `This action removes a #${id} cM`;
  }
}
