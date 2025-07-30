import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // ¡IMPORTANTE! Exporta el servicio para que AuthService lo use
})
export class UsersModule {}
