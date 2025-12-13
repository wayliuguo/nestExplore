import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { LoggerService } from 'src/shared/logger.service';

@Injectable()
export class CatsService {
  constructor(private logger: LoggerService) {}

  create(createCatDto: CreateCatDto) {
    return `create cat: ${createCatDto.name}, ${createCatDto.age}, ${createCatDto.breed}`;
  }

  findAll(breed?: string) {
    return `This action returns all cats of breed ${breed || 'all'}`;
  }

  findOne(id: number) {
    this.logger.log(`Finding cat with id: ${id}`);
    return `This action returns a ${typeof id}: #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
