import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { RolesGuard } from './guards/permissions.guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      // privateKey: process.env.JW_SECRET_KEY,
      privateKey: '+fw6W8Coc9xEVZNUAwWEPhXiJVh7WocZwD5t6KuVQKQ=',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    RolesGuard,
  ],
  controllers: [AuthController],
  exports: [AuthService, RolesGuard],
})
export class AuthModule {}
