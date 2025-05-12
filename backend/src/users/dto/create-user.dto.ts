import { IsString, IsEmail, IsBoolean } from "class-validator";

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  isActive: boolean;
}
