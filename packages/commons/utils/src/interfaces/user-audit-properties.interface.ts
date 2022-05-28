import { Types } from 'mongoose';

export interface UserAuditProperties {
  idUser: Types.ObjectId;
  email: string;
  profile: string;
}
