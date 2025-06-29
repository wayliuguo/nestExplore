import { Injectable } from '@nestjs/common';
import { CreateAMDto } from './dto/create-a-m.dto';
import { UpdateAMDto } from './dto/update-a-m.dto';

@Injectable()
export class AMService {
  create(createAMDto: CreateAMDto) {
    return 'This action adds a new aM';
  }

  findAll() {
    return `This action returns all aM`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aM`;
  }

  update(id: number, updateAMDto: UpdateAMDto) {
    return `This action updates a #${id} aM`;
  }

  remove(id: number) {
    return `This action removes a #${id} aM`;
  }
}
