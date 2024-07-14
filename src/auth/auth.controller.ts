import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRefreshTokenDto } from './dto/auth-refreshToken.dto';

@Controller('api/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any, @Body() _body: AuthLoginDto) {
    return await this.authService.login(req.user);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Req() req: any, @Body() _body: AuthRefreshTokenDto) {
    return await this.authService.refreshToken(req.user);
  }
}
