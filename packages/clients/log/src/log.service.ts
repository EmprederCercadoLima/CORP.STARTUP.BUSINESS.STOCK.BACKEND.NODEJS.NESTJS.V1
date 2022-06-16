import { Inject, Injectable } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';

@Injectable()
export class LogService {
  constructor(@Inject('CLIENT_LOG') private readonly client: ClientTCP) {}

  purchaseRequestExecute(token: any, requestBody: any, message: any, errors: any) {
    const pattern = { microservice: 'log-purchase-request', function: 'purchase-request-execute' };
    return this.client
      .send<any, any>(
        pattern,
        {token, requestBody, message, errors},
      )
      .toPromise();
  } 

  purchaseOrderExecute(token: any, requestBody: any, message: any, errors: any) {
    const pattern = { microservice: 'log-purchase-order', function: 'purchase-order-execute' };
    return this.client
      .send<any, any>(
        pattern,
        {token, requestBody, message, errors},
      )
      .toPromise();
  }

  quotationExecute(token: any, requestBody: any, message: any, errors: any) {
    const pattern = { microservice: 'log-quotation', function: 'quotation-execute' };
    return this.client
      .send<any, any>(
        pattern,
        {token, requestBody, message, errors},
      )
      .toPromise();
  }

  dashboardExecute(token: any, requestBody: any, message: any, errors: any) {
    const pattern = { microservice: 'log-dashboard', function: 'dashboard-execute' };
    return this.client
      .send<any, any>(
        pattern,
        {token, requestBody, message, errors},
      )
      .toPromise();
  }
}