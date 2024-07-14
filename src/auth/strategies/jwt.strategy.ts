import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: process.env.JWT_SECRET_KEY,
      secretOrKey: '+fw6W8Coc9xEVZNUAwWEPhXiJVh7WocZwD5t6KuVQKQ=',
    });
  }

  async validate(payload: { id: string; email: string }) {
    return { id: payload.id, email: payload.email };
  }
}
