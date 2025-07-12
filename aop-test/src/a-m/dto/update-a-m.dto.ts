import { PartialType } from '@nestjs/mapped-types';
import { CreateAMDto } from './create-a-m.dto';

export class UpdateAMDto extends PartialType(CreateAMDto) {}
