import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, Request } from "@nestjs/common";
import { UseGuards } from "@nestjs/common";
import { Roles } from "../auth/guards/roles.decorator";
import { AuthGuard } from "../auth/guards/auth.guard";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Controller("users")
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() newUser: CreateUserDto): Promise<User> {
    return this.usersService.create(newUser);
  }

  @Get()
  @Roles("admin")
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Get("me")
  @Roles("user")
  findMe(@Request() req: any): Promise<User | null> {
    return this.usersService.findOne(req.user.id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(":id/toggle-active")
  @Roles("admin")
  async toggleActive(@Param("id") id: string): Promise<User> {
    const user = await this.usersService.findOne(+id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    const updatedUser = await this.usersService.update(+id, { isActive: !user.isActive });
    return updatedUser;
  }

  @Delete(":id")
  @Roles("admin")
  async deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
