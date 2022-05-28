"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MasterService = class MasterService {
    constructor(client) {
        this.client = client;
    }
    getProductsById(requestProductsByIdInterface) {
        const pattern = { microservice: 'master-product', function: 'get-products-by-id' };
        return this.client
            .send(pattern, requestProductsByIdInterface)
            .toPromise();
    }
    getGrocersById(requestGrocersByIdInterface) {
        const pattern = { microservice: 'master-grocer', function: 'get-grocers-by-id' };
        return this.client
            .send(pattern, requestGrocersByIdInterface)
            .toPromise();
    }
};
MasterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CLIENT_MASTER')),
    __metadata("design:paramtypes", [microservices_1.ClientTCP])
], MasterService);
exports.MasterService = MasterService;
//# sourceMappingURL=master.service.js.map