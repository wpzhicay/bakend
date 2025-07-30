import { Injectable } from '@nestjs/common';
import { User } from './user/user';


@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  /**
   * Crear un nuevo usuario con email y contraseña ya hasheada
   */
  create(email: string, password: string): User {
    const newUser: User = {
      id: this.idCounter++,
      email,
      password,
    };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * Buscar usuario por correo electrónico
   */
  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  /**
   * Obtener todos los usuarios (opcional, para debug)
   */
  findAll(): User[] {
    return this.users;
  }
  
}
