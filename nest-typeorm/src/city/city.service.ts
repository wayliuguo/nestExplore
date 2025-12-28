import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async create(createCityDto: CreateCityDto) {
    return this.createCityWithChildren(createCityDto);
  }

  private async createCityWithChildren(
    dto: CreateCityDto,
    parent?: City,
  ): Promise<City> {
    const city = new City();
    city.name = dto.name;

    if (parent) {
      city.parent = parent;
    }

    const savedCity = await this.entityManager.save(city);

    if (dto.children && dto.children.length > 0) {
      for (const childDto of dto.children) {
        await this.createCityWithChildren(childDto, savedCity);
      }
    }

    return savedCity;
  }

  async findAll() {
    return this.entityManager.getTreeRepository(City).findTrees();
  }

  async findOne(name: string) {
    const parent = await this.entityManager.findOne(City, {
      where: {
        name,
      },
    });
    return this.entityManager
      .getTreeRepository(City)
      .findDescendantsTree(parent);
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
