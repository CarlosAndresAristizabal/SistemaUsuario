import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly fullName?: string;
  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
  @IsOptional()
  @IsString()
  readonly password?: string;
}
