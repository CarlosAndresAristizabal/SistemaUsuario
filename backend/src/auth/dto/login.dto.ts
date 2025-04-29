import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MinLength, IsEmail } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: "El email no es válido" })
  email: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  @IsNotEmpty()
  password: string;
}
