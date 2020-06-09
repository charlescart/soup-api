import {
  IsNotEmpty, IsArray,
} from 'class-validator';

export default class Soup {
  @IsNotEmpty()
  @IsArray()
  soup!: string[][];

  @IsNotEmpty()
  @IsArray()
  searchWords!: string[];
}
