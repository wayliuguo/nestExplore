import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    return `create cat: ${createCatDto.name}, ${createCatDto.age}, ${createCatDto.breed}`;
  }

  findAll(breed?: string) {
    return `This action returns all cats of breed ${breed || 'all'}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
