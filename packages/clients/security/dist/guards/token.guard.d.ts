import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class TokenGuard implements CanActivate {
    private logger;
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
