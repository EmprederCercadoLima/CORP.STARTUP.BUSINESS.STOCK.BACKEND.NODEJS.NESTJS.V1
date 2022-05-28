import { ClientTCP } from '@nestjs/microservices';
import { RequestCreateTokenInterface, RequestInsertTokenInterface, RequestDeleteTokenInterface, RequestValidateTokenInterface, ResponseCreateTokenInterface, ResponseInsertTokenInterface, ResponseDeleteTokenInterface } from './interfaces';
export declare class SecurityService {
    private readonly client;
    constructor(client: ClientTCP);
    createToken(requestCreateTokenInterface: RequestCreateTokenInterface): Promise<ResponseCreateTokenInterface>;
    insertToken(requestInsertTokenInterface: RequestInsertTokenInterface): Promise<ResponseInsertTokenInterface>;
    deleteToken(requestDeleteTokenInterface: RequestDeleteTokenInterface): Promise<ResponseDeleteTokenInterface>;
    validateToken(requestValidateTokenInterface: RequestValidateTokenInterface): Promise<Boolean>;
}
