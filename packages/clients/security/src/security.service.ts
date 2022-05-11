import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientTCP } from "@nestjs/microservices";
import { RequestCreateTokenInterface, RequestInsertTokenInterface, RequestDeleteTokenInterface, ResponseCreateTokenInterface, ResponseInsertTokenInterface, ResponseDeleteTokenInterface } from "./interfaces";

@Injectable()
export class SecurityService { 

    constructor(@Inject('CLIENT_SECURITY') private readonly client: ClientTCP) {}
    private logger = new Logger('client-security');
    
    createToken(requestCreateTokenInterface: RequestCreateTokenInterface) {
        const pattern = { microservice: 'security', function: 'create-token' };
        return this.client.send<ResponseCreateTokenInterface, RequestCreateTokenInterface>(pattern, requestCreateTokenInterface).toPromise();
    }

    insertToken(requestInsertTokenInterface: RequestInsertTokenInterface) {
        const pattern = { microservice: 'security', function: 'insert-token' };
        return this.client.send<ResponseInsertTokenInterface, RequestInsertTokenInterface>(pattern, requestInsertTokenInterface).toPromise();
    }

    deleteToken(requestDeleteTokenInterface: RequestDeleteTokenInterface) {
        const pattern = { microservice: 'security', function: 'delete-token' };
        return this.client.send<ResponseDeleteTokenInterface, RequestCreateTokenInterface>(pattern, requestDeleteTokenInterface).toPromise();
    }

}