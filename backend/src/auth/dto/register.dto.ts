import { IsBoolean, IsEmail, IsString, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  fullName: string; // Cambié 'name' a 'fullName' para que coincida con la entidad User

  @IsString()
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;

  @IsBoolean()
  active: boolean;
}
