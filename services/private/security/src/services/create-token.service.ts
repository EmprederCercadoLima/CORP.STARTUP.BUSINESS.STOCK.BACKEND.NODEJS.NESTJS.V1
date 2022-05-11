import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestCreateTokenInterface } from 'src/interfaces';
import { PayloadInterface } from 'src/jwt';


@Injectable()
export class CreateTokenService {

  constructor(
    private readonly jwtService: JwtService
  ) {

  }

  execute(requestCreateTokenInterface: RequestCreateTokenInterface) {
    const payload: PayloadInterface = { ...requestCreateTokenInterface };
    return {
      token: this.jwtService.sign(payload),
    }
  }
}
