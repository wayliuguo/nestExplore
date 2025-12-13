import { IsInt, IsNotEmpty } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty({ message: '名字不能为空' })
  name: string;

  @IsInt({ message: '年龄必须是数字' })
  age: number;

  @IsNotEmpty({ message: '品种不能为空' })
  breed: string;
}
