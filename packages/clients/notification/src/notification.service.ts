import { Inject, Injectable } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('CLIENT_NOTIFICATION') private readonly client: ClientTCP,
  ) {}
}
