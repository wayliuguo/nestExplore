import { PartialType } from '@nestjs/mapped-types';
import { CreateBMDto } from './create-b-m.dto';

export class UpdateBMDto extends PartialType(CreateBMDto) {}
