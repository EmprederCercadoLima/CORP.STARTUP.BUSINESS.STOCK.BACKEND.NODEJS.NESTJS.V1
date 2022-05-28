import { SetMetadata } from "@nestjs/common";
import { PermissionsEnum } from "src/enums";

export const RequirePermissions = (...permissions: PermissionsEnum[]) =>
  SetMetadata('permissions', permissions);