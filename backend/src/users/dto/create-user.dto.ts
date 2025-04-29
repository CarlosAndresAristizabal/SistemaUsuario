import { IsString, IsEmail, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsDate()
    createdAt: Date;

    @IsString()
    password: string;

    @IsBoolean()
    isActive: boolean;
}