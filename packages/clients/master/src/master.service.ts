import { Inject, Injectable } from "@nestjs/common";
import { ClientTCP } from "@nestjs/microservices";
import { RequestGrocersByIdInterface, RequestProductsByIdInterface } from "./interfaces";
import { ResponseGrocersByIdInterface } from "./interfaces/response-get-grocers-by-id.interface";

@Injectable()
export class MasterService {

    constructor(@Inject('CLIENT_MASTER') private readonly client: ClientTCP) {}

    getProductsById(requestProductsByIdInterface: RequestProductsByIdInterface) {
        const pattern = { microservice: 'master-product', function: 'get-products-by-id' };
        return this.client
          .send<any, RequestProductsByIdInterface>(
            pattern,
            requestProductsByIdInterface,
          )
          .toPromise();
    }

    getGrocersById(requestGrocersByIdInterface: RequestGrocersByIdInterface) {
        const pattern = { microservice: 'master-grocer', function: 'get-grocers-by-id'};
        return this.client
          .send<ResponseGrocersByIdInterface, RequestGrocersByIdInterface>(
            pattern,
            requestGrocersByIdInterface,
          )
          .toPromise();
    }

}