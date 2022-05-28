import { ClientTCP } from "@nestjs/microservices";
import { RequestGrocersByIdInterface, RequestProductsByIdInterface } from "./interfaces";
import { ResponseGrocersByIdInterface } from "./interfaces/response-get-grocers-by-id.interface";
export declare class MasterService {
    private readonly client;
    constructor(client: ClientTCP);
    getProductsById(requestProductsByIdInterface: RequestProductsByIdInterface): Promise<any>;
    getGrocersById(requestGrocersByIdInterface: RequestGrocersByIdInterface): Promise<ResponseGrocersByIdInterface>;
}
