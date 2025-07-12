import { Injectable } from '@nestjs/common';
import { CreateDMDto } from './dto/create-d-m.dto';
import { UpdateDMDto } from './dto/update-d-m.dto';

@Injectable()
export class DMService {
  create(createDMDto: CreateDMDto) {
    return 'This action adds a new dM';
  }

  findAll() {
    return `This action returns all dM`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dM`;
  }

  update(id: number, updateDMDto: UpdateDMDto) {
    return `This action updates a #${id} dM`;
  }

  remove(id: number) {
    return `This action removes a #${id} dM`;
  }
}
