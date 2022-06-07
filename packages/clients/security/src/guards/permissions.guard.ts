import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PermissionsEnum } from "../enums";

@Injectable()
export class PermissionsGuard implements CanActivate {

    private logger = new Logger(PermissionsGuard.name);

    constructor(private reflector: Reflector) {

    }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<PermissionsEnum[]>('permissions', [
            context.getHandler(),
            context.getClass()
        ]);

        const request = context.switchToHttp().getRequest();
        const { permissions, email } = request.token;

        requiredPermissions.forEach((permission: string) => {
            if(!permissions.includes(permission)) {
                this.logger.log(`El usuario ${email} no tiene el permiso ${permission}`)
                throw new UnauthorizedException()
            }
        })
        return true;
    }

}