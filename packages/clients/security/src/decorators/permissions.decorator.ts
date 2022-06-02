import { SetMetadata } from "@nestjs/common";
import { PermissionsEnum } from "../enums";

export const RequirePermissions = (...permissions: PermissionsEnum[]) =>
  SetMetadata('permissions', permissions);