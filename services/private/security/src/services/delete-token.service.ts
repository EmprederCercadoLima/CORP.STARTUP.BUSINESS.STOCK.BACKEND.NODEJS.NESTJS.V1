import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestDeleteTokenInterface } from 'src/interfaces';
import { Tokens, TokensDocument } from 'src/schemas';

@Injectable()
export class DeleteTokenService {

  private readonly logger: Logger

  constructor(
    @InjectModel(Tokens.name)
    private readonly tokensModule: Model<TokensDocument>,
  ) {
    this.logger = new Logger(DeleteTokenService.name)
  }

  async execute(requestDeleteTokenInterface: RequestDeleteTokenInterface) {
    const { token } = requestDeleteTokenInterface;
    return await this.tokensModule.findOneAndUpdate(
      { tokens: token },
      { $pull: { tokens: token } }
    ).exec()
  }
}
