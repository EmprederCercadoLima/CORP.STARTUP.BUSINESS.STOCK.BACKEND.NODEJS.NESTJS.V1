import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LogPurchaseOrders, LogPurchaseOrdersSchema } from "../../schemas";
import { PurchaseOrderService } from "./purchase-order.service";
import { PurchaseOrderTcpController } from "./purchase-order.tcp.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: LogPurchaseOrders.name, schema: LogPurchaseOrdersSchema }
          ])
    ],
    providers: [ PurchaseOrderService ],
    controllers: [PurchaseOrderTcpController],

})
export class PurchaseOrderModule {}