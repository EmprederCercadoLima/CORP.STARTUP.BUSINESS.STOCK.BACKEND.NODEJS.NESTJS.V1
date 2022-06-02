import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PurchaseRequestService } from './purchase-request.service';

@Controller()
export class PurchaseRequestTcpController {
  constructor(
      private readonly purchaseRequestService: PurchaseRequestService
  ) {}

  @MessagePattern({ microservice: 'log-purchase-request', function: 'purchase-request-execute' })
  purchaseRequestExecute({ token, requestBody, message, errors }: any) {
    return this.purchaseRequestService.purchaseRequestExecute(token, requestBody, message, errors);
  }
}