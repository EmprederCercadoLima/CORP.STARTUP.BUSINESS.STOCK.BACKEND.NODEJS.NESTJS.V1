import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { QuotationService } from './quotation.service';

@Controller()
export class QuotationTcpController {
  constructor(
    private readonly quotationService: QuotationService
  ) {}

  @MessagePattern({ microservice: 'log-quotation-request', function: 'quotation-request-execute' })
  quotationExecute({ token, requestBody, message, errors }: any) {
    return this.quotationService.quotationExecute(token, requestBody, message, errors);
  }

}