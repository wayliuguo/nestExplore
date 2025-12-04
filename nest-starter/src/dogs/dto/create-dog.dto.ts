import { IsString, IsInt, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: number;
}
