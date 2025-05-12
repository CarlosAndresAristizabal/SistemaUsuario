import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      ...rest,
      password: hashedPassword
    });

    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      select: ["id", "fullName", "email", "password", "isActive"]
    });
  }

  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      select: ["id", "fullName", "email", "password", "isActive", "role"]
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    Object.assign(user, updateUserDto);
    if (updateUserDto.password) {
      user.password = updateUserDto.password;
    }
    if (updateUserDto.email) {
      const existingUser = await this.findOneByEmail(updateUserDto.email);
      if (existingUser && existingUser.id !== id) {
        throw new Error("Correo electrónico ya en uso");
      }
      user.email = updateUserDto.email;
    }
    if (updateUserDto.fullName) {
      user.fullName = updateUserDto.fullName;
    }
    if (updateUserDto.isActive !== undefined) {
      user.isActive = updateUserDto.isActive;
    }
    return await this.userRepository.save(user);
  }

  async toggleActive(id: number, updateData: { isActive: boolean }): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    user.isActive = updateData.isActive;
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
  }
}
