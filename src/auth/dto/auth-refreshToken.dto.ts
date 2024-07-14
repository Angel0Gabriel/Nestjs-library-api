import { ApiProperty } from '@nestjs/swagger';

export class AuthRefreshTokenDto {
  @ApiProperty()
  refresh_token: string;
}
