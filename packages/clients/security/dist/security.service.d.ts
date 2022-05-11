import { ClientTCP } from "@nestjs/microservices";
import { RequestCreateTokenInterface, RequestInsertTokenInterface, RequestDeleteTokenInterface, ResponseCreateTokenInterface, ResponseInsertTokenInterface, ResponseDeleteTokenInterface } from "./interfaces";
export declare class SecurityService {
    private readonly client;
    constructor(client: ClientTCP);
    private logger;
    createToken(requestCreateTokenInterface: RequestCreateTokenInterface): Promise<ResponseCreateTokenInterface>;
    insertToken(requestInsertTokenInterface: RequestInsertTokenInterface): Promise<ResponseInsertTokenInterface>;
    deleteToken(requestDeleteTokenInterface: RequestDeleteTokenInterface): Promise<ResponseDeleteTokenInterface>;
}
