export const statusConstant = {

  purchase_request: {
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
    purchase_order_generated: {
      value: 4,
      description: 'Orden de compra generada',
    },
  },
  quotation: {
    cancel_the_quotation: {
      value: 0,
      description: 'La cotización fue cancelada',
    },
    send_to_the_grocery: {
      value: 1,
      description: 'Cotización enviada al cliente',
    },
    read_by_the_grocery: {
      value: 2,
      description: 'Cotización vista por la bodega',
    },
    purchase_order_generated: {
      value: 4,
      description: 'Orden de compra generada',
    },
  },
  purchase_order: {
    generated: {
      value: 1,
      description: 'Orden de compra creada'
    },
    approbed_to_supplier: {
      value: 2,
      description: 'Aprobada por el proveedor'
    },
    five_days_delivery_date: {
      value: 3,
      description: 'Cinco días para la fecha de entrega'
    },
    one_days_delivery_date: {
      value: 4,
      description: 'Cinco días para la fecha de entrega'
    },
    concreted: {
      value: 5,
      description: 'Concretada con éxito'
    },
    failded: {
      value: 6,
      description: 'No concretada'
    }
  },
  shopping_card: {
    create: {
      value: 1,
      description: 'Carrito de compra generado'
    },
    purchase_request_generated: {
      value: 2,
      description: 'Solicitud de compra generada'
    }
  }
  
};
