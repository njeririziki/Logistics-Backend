import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'generated/prisma';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
