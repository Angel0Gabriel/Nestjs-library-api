import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProvider, UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
