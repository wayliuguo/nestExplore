import { IsNotEmpty, MinLength } from 'class-validator';
import { PhoneValidationPipe } from 'src/common/pipe/phone-validation.pipe';

export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码最少 6 位' })
  password: string;

  role?: string;
}
