db.SystemParameters.insertMany(
    [
        {
            idTarget: new ObjectId("629e771599d7ae16bd4a67bd"),
            operations: [{
              code: "SHOPPING_CARD_SECUENCE",
              prefix: {
                init: "SH-A",
                current: "SH-A"
              },
              value: {
                limit: 9999,
                init: 0,
                current: 0
              }
          },{
                code: "PURCHASE_REQUEST_SECUENCE",
                prefix: {
                  init: "PR-A",
                  current: "PR-A"
                },
                value: {
                  limit: 9999,
                  init: 0,
                  current: 0
                }
            }, {
                code: "PURCHASE_ORDER_SECUENCE",
                prefix: {
                  init: "PO-A",
                  current: "PO-A",
                },
                value: {
                  limit: 9999,
                  init: 0,
                  current: 0
                },
            }],
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            idTarget: new ObjectId("629e770e9ad2ba5fe6a9f1e7"),
            operations: [{
              code: "SHOPPING_CARD_SECUENCE",
              prefix: {
                init: "SH-A",
                current: "SH-A"
              },
              value: {
                limit: 9999,
                init: 0,
                current: 0
              }
          },{
                code: "PURCHASE_REQUEST_SECUENCE",
                prefix: {
                  init: "PR-A",
                  current: "PR-A"
                },
                value: {
                  limit: 9999,
                  init: 0,
                  current: 0
                }
            }, {
                code: "PURCHASE_ORDER_SECUENCE",
                prefix: {
                  init: "PO-A",
                  current: "PO-A",
                },
                value: {
                  limit: 9999,
                  init: 0,
                  current: 0
                },
            }],
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
          idTarget: new ObjectId("629ecbfe642eb00e542beca1"),
          operations: [{
              code: "QUOTATION_SECUENCE",
              prefix: {
                init: "QT1-A",
                current: "QT1-A"
              },
              value: {
                limit: 9999,
                init: 0,
                current: 0,
              }
          }],
          status: {
              value: 1,
              description: "Activado"
          },
          auditProperties: {
              dateCreate: new Date(),
              dateUpdate: null,
              userCreate: 'Database Script',
              userUpdate: null,
              recordActive: true
          }
      },
      {
        idTarget: new ObjectId("629ecbfe642eb00e542beca0"),
        operations: [{
            code: "QUOTATION_SECUENCE",
            prefix: {
              init: "QT2-A",
              current: "QT2-A"
            },
            value: {
              limit: 9999,
              init: 0,
              current: 0,
            }
        }],
        status: {
            value: 1,
            description: "Activado"
        },
        auditProperties: {
            dateCreate: new Date(),
            dateUpdate: null,
            userCreate: 'Database Script',
            userUpdate: null,
            recordActive: true
        }
    }
    ]
    )