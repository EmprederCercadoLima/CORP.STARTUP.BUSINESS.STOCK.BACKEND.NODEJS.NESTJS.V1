"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConstant = void 0;
exports.statusConstant = {
    cancel_the_purchase_request: {
        value: 0,
        description: 'La solicitud de compra fue cancelada',
    },
    send_to_the_supplier: {
        value: 1,
        description: 'Solicitud de compra enviada a proveedores',
    },
    with_assigned_quotes: {
        value: 2,
        description: 'Con cotizaciones asignadas',
    },
    purchase_request_ready_generate_order: {
        value: 3,
        description: 'Solicitud lista para generar orden de compra',
    },
    cancel_the_quotation: {
        value: 0,
        description: 'La cotización fue cancelada',
    },
    send_to_the_grocery: {
        value: 1,
        description: 'Cotización enviada a la bodega',
    },
    read_by_the_grocery: {
        value: 2,
        description: 'Cotización leida por la bodega',
    },
    quotation_ready_generate_order: {
        value: 3,
        description: 'Cotización lista para generar orden de compra',
    },
    purchase_order_generated: {
        value: 4,
        description: 'Orden de compra generada',
    },
    order_creates_with_quotation_purchase_request: {
        value: 1,
        description: 'La orden de compra fue creada',
    },
};
//# sourceMappingURL=status.constant.js.map