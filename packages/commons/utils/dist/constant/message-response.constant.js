"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageResponseConstant = void 0;
exports.messageResponseConstant = {
    create: 'Creación exitosa',
    update: 'Actualización exitosa',
    delete: 'Anulación exitosa',
    not_found_exception: {
        grocer: 'Not found exception [grocer]',
        quotation: 'Not found exception [quotation]',
        purchaseRequest: 'Not found exception [purchase-request]',
        purchaseOrder: 'Not found exception [purchase-order]',
        product: 'Not found exception [product]',
        systemParameter: 'Not found exception [system-parameter]',
        typeMeasure: 'Not found exception [type-measure]',
    },
    conflict_exception: {
        insufficient_permissions: 'Permisos insuficientes para esta operación',
        purchase_request_has_purchase_order: 'La solicitud de compra ya cuenta con una Orden de compra'
    },
};
//# sourceMappingURL=message-response.constant.js.map