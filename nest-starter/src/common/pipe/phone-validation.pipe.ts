import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class PhoneValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('PhoneValidationPipe-metadata', metadata);
    const checkExp = /^(\+86-)?1[3456789]\d{9}$/; // 简单的手机号正则
    if (!checkExp.test(value.phone)) {
      throw new BadRequestException('手机号码格式不正确');
    }
    return value; // 验证通过，返回原值
  }
}
