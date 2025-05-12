import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";
import { User } from "../users/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, fullName } = registerDto;
    const existingUser = await this.usersService.findOneByEmail(email);

    if (existingUser) {
      throw new UnauthorizedException("El usuario ya existe");
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Contraseña original:", password);
    // console.log("Hash generado al registrar:", hashedPassword);

    return this.usersService.create({
      email,
      password: password,
      fullName,
      isActive: true
    });
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.usersService.findByEmailWithPassword(email);

    console.log("Intentando iniciar sesión con:", email);
    console.log("Usuario encontrado:", user);
    console.log("Contraseña ingresada:", password);
    console.log("Contraseña almacenada:", user?.password);

    if (!user) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }
    // console.info("Contraseña original:", password);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    if (!user.isActive) {
      throw new UnauthorizedException("El usuario está inactivo");
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }

  async validateUser(userId: string): Promise<User | null> {
    const user = await this.usersService.findOne(Number(userId));

    if (!user) {
      return null;
    }

    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
