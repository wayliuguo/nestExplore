import { PartialType } from '@nestjs/mapped-types';
import { CreateDMDto } from './create-d-m.dto';

export class UpdateDMDto extends PartialType(CreateDMDto) {}
