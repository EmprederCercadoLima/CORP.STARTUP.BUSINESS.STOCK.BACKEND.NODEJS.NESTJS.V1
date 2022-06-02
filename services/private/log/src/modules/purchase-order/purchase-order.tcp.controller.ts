import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PurchaseOrderService } from './purchase-order.service';

@Controller()
export class PurchaseOrderTcpController {
  constructor(
    private readonly purchaseOrderService: PurchaseOrderService
  ) {}

  @MessagePattern({ microservice: 'log-purchase-order', function: 'purchase-order-execute' })
  purchaseOrderExecute({ token, requestBody, message, errors }: any) {
    return this.purchaseOrderService.purchaseOrderExecute(token, requestBody, message, errors);
  }
  
}