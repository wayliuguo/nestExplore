import { IsBoolean, IsInt, MaxLength, MinLength } from 'class-validator';

export class Ooo {
  @MinLength(10)
  @MaxLength(20)
  name: string;

  @IsInt()
  age: number;

  @IsBoolean()
  sex: boolean;
  
  hobbies: Array<string>;
}
