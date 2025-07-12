import { PartialType } from '@nestjs/mapped-types';
import { CreateCMDto } from './create-c-m.dto';

export class UpdateCMDto extends PartialType(CreateCMDto) {}
