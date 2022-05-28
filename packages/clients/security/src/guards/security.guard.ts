import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { decode, verify } from "jsonwebtoken";
import { SecurityService } from "../security.service";
import { RequestCreateTokenInterface } from "../interfaces";

@Injectable()
export class SecurityGuard implements CanActivate {

    private logger = new Logger(SecurityGuard.name);

    constructor(
        private readonly securityService: SecurityService
    ) {

    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if(!request.headers.authorization)
            throw new UnauthorizedException();

        const parts = request.headers.authorization.split(' ');

        if(parts.length !== 2)
            throw new ForbiddenException();
        
        if(parts[0].toLowerCase() !== 'bearer')
            throw new ForbiddenException();
        
        const isVerify = verify(parts[1], 'CORP.STARTUP.BUSINESS.STOCK.BACKEND.NODEJS.NESTJS', { algorithms: ['HS256'] });

        const isValid = await this.securityService.validateToken({ token: parts[1] });

        if(!isValid)
            throw new UnauthorizedException();
        
        request.token = isVerify //this.decodeTokenForGrocer(parts[1]);

        return true;
    }

    private decodeTokenForGrocer = (token: string) => {
        const decodeToken = Buffer.from(decode(token).toString(), 'base64').toString('utf8')
        return this.parseTokenForGrocer(decodeToken);
    }

    private parseTokenForGrocer = (decodeToken: string) => {
        const decodeTokenParse = JSON.parse(decodeToken);
        this.logger.log(`${SecurityGuard.name}::canActivate::parseTokenForGrocer::${decodeTokenParse}`)
        return <RequestCreateTokenInterface> {
            email: decodeTokenParse["email"],
            firstName: decodeTokenParse["firstName"],
            lastName: decodeTokenParse["lastName"],
            idGrocer: decodeTokenParse["idGrocer"],
            permisions: decodeTokenParse["poermisions"]
        }
    }
}