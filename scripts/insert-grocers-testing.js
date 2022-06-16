db.Grocers.insertMany(
    [
        {
            _id: new ObjectId("629e770e9ad2ba5fe6a9f1e7"),
            code: 'GRO01',
            name: 'Tiendita abarrotes uno',
            businessName: 'Tiendita ABARROTES CeroUno S.A.C',
            ruc: '00000000001',
            description: 'Tienda de abarrotes de prueba',
            legalRepresentative: {
                idLegalRepresentative: new ObjectId("629e735448f4060b0f77ee36"),
                email: 'client.grocer01@yopmail.com',
                fullName: 'Client Grocer uno',
                documentType: {
                    code: 'DNI',
                    description: 'Documento nacional de identidad',
                    value: '00000001'
                }
            },
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
            _id: new ObjectId("629e771599d7ae16bd4a67bd"),
            code: 'GRO02',
            name: 'Tiendita abarrotes dos',
            businessName: 'Tiendita ABARROTES CeroDos S.A.C',
            ruc: '00000000002',
            description: 'Tienda de abarrotes de prueba',
            legalRepresentative: {
                idLegalRepresentative: new ObjectId("629e735448f4060b0f77ee37"),
                email: 'client.grocer02@yopmail.com',
                fullName: 'Client Grocer dos',
                documentType: {
                    code: 'DNI',
                    description: 'Documento nacional de identidad',
                    value: '00000002'
                }
            },
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