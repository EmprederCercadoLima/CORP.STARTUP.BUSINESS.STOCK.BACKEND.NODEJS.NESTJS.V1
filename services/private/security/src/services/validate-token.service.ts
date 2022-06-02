import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RequestValidateTokenInterface } from "../interfaces";
import { Tokens, TokensDocument } from "../schemas";

@Injectable()
export class ValidateTokenService {

    private readonly logger = new Logger(ValidateTokenService.name);

    constructor(
        @InjectModel(Tokens.name)
        private readonly tokensModule: Model<TokensDocument>,
    ) {

    }

    async execute(requestValidateTokenInterface: RequestValidateTokenInterface) {
        const { token } = requestValidateTokenInterface
        const countToken = await this.tokensModule.count({ tokens: { $in: [token] } });
        return !!countToken
    }

}