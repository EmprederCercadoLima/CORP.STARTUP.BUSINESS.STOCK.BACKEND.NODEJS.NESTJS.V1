import { CanActivate, ExecutionContext } from "@nestjs/common";
import { SecurityService } from "../security.service";
export declare class SecurityGuard implements CanActivate {
    private readonly securityService;
    private logger;
    constructor(securityService: SecurityService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private decodeTokenForGrocer;
    private parseTokenForGrocer;
}
