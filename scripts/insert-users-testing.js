db.Users.insertMany(
    [
        {
            email: "emprender.cercadolima@gmail.com",
            firstName: "Emprender",
            lastName: "Cercado de Lima",
            password: "Facil123",
            documentType: {
                code: 'DNI',
                description: 'Documento nacional de identidad',
                value: '00000000'
            },
            profile: {
                code: "ADM01",
                description: "Administrador de systema"
            },
            grocers: [
                "629e770e9ad2ba5fe6a9f1e7",
                "629e771599d7ae16bd4a67bd"
            ],
            permissions: [ 
                'purchase::request::write','purchase::request::read',
                'purchase::order::write','purchase::order::read',
                'product::write','product::read',
                'grocer::write','grocer::read',
                'quotation::read','quotation::write',
                'dashboard::red'
            ],
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
            _id: new ObjectId("629e735448f4060b0f77ee36"),
            email: "client.grocer01@yopmail.com",
            firstName: "Client",
            lastName: "Grocer uno",
            password: "Facil123",
            documentType: {
                code: 'DNI',
                description: 'Documento nacional de identidad',
                value: '00000001'
            },
            profile: {
                code: "ADM02",
                description: "Administrador de bodega"
            },
            grocers: [ "629e770e9ad2ba5fe6a9f1e7" ],
            permissions: [ 
                'purchase::request::write','purchase::request::read',
                'purchase::order::write','purchase::order::read',
                'product::read',
                'grocer::write','grocer::read',
                'quotation::read',
                'dashboard::red'
            ],
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
            _id: new ObjectId("629e735448f4060b0f77ee37"),
            email: "client.grocer02@yopmail.com",
            firstName: "Client",
            lastName: "Grocer dos",
            password: "Facil123",
            documentType: {
                code: 'DNI',
                description: 'Documento nacional de identidad',
                value: '00000002'
            },
            profile: {
                code: "ADM02",
                description: "Administrador de bodega"
            },
            grocers: [ "629e771599d7ae16bd4a67bd" ],
            permissions: [ 
                'purchase::request::write','purchase::request::read',
                'purchase::order::write','purchase::order::read',
                'product::read',
                'grocer::write','grocer::read',
                'quotation::read',
                'dashboard::red'
            ],
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
            email: "supplier01@yopmail.com",
            firstName: "Proveedor",
            lastName: "Supplier uno",
            password: "Facil123",
            documentType: {
                code: 'DNI',
                description: 'Documento nacional de identidad',
                value: '00000003'
            },
            profile: {
                code: "ADM03",
                description: "Administrador de bodega"
            },
            grocers: ["629e770e9ad2ba5fe6a9f1e7"],
            permissions: [ 
                'purchase::request::read',
                'purchase::order::read',
                'product::read',
                'grocer::read',
                'quotation::read', 'quotation::write',
                'dashboard::red'
            ],
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
            email: "supplier02@yopmail.com",
            firstName: "Proveedor",
            lastName: "Supplier dos",
            password: "Facil123",
            documentType: {
                code: 'DNI',
                description: 'Documento nacional de identidad',
                value: '00000004'
            },
            profile: {
                code: "ADM03",
                description: "Administrador de bodega"
            },
            grocers: [ "629e771599d7ae16bd4a67bd" ],
            permissions: [ 
                'purchase::request::read',
                'purchase::order::read',
                'product::read',
                'grocer::read',
                'quotation::read', 'quotation::write',
                'dashboard::red'
            ],
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
    ])