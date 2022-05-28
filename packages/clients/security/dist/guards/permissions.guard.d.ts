import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    private logger;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
