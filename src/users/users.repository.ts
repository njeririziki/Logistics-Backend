import { Injectable } from '@nestjs/common';
import { User } from '../generated/client';

@Injectable()
export class UsersRepository {
  private users: User[] = [];

  // Create a new user
  create(user: User): User {
    this.users.push(user);
    return user;
  }

  // Find a user by ID
  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Find all users
  findAll(): User[] {
    return this.users;
  }

  // Update a user by ID
  update(id: string, updatedUser: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
    return this.users[userIndex];
  }

  // Delete a user by ID
  delete(id: string): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return false;
    }
    this.users.splice(userIndex, 1);
    return true;
  }
}
